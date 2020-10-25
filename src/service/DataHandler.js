import {getCode, getName} from "country-list"

// http://download.geonames.org/export/dump/readme.txt : a readme about geonames database


// function that returns a city object (or error object) depending on the search. It will take the one that matches the input string best and then taking the one that has highest population
export async function searchCity(input){
  
  input = input.toLowerCase();

  // eslint-disable-next-line
  if(!input.match("^([a-zA-Z\u0080-\u024F]{1}[a-zA-Z\u0080-\u024F\. |\-| |']*[a-zA-Z\u0080-\u024F\.']{1})$")){
    //console.log("not valid characters")
    return {error:"Oops, invalid city name!"}
  }
  
  // some api argument
  const username = "weknowit"

  // documentation of api can be found here: http://www.geonames.org/export/geonames-search.html
  let url = "http://api.geonames.org/searchJSON?name_equals=" + input + "&maxRows=10&cities=cities15000&orderby=population&username=" + username

  let response = await fetch(url)

  // response will be handled if it is code: 400 (ok)
  if(response.ok){
    let data = await response.json()
    
    if(data.hasOwnProperty("geonames") && data.geonames.length > 0){
      //console.log(data.geonames)
      for(let i=0; i <data.geonames.length; i++){
        if(data.geonames[i].fcl === "P"){
          //return the first object that is classfied as a "populated place" (Note that the list is already sorted by population)
          return data.geonames[i]
        }
      }

      //if feature class: city doesn't exist in the list, return the first element
      return data.geonames[0]
      
    } else if (data.hasOwnProperty("geonames") && data.geonames.length === 0){
      //if there is no results attached return no results found
      return {error: "No matches found."}
    } else {
      return {error: "Internal api error, sorry about that :("}
    }
  } else {
    return {error: "Server response was not ok :("}
  }
    
}

// geonames api is unpredictable and slightly hard to handle. There is no direct way to limit a query to top populated cities by only country name. Therefore this is an extended solution.
// 1. convert input-name to countrycode by ISO standard
// 2. query a list of cities by the country code from geonames search api

// facade-pattern
export async function searchCountry(input){

  // if the direct input is a country code, then use it
  if(getName(input) !== undefined){
    return await getCitiesByCountryCode(input)
  }

  // if the input is a country name, convert it to country code and then query result
  const country = getCode(input)
  if(country !== undefined){
    return await getCitiesByCountryCode(country)
  } else {
    return {error: "Oops, invalid country name or code!"}
  }
}

// function that accepts a country code and returns a list of the top 5 most poulated cities (as objects) in the country
async function getCitiesByCountryCode(countryCode){

  countryCode = countryCode.toLowerCase();

  // eslint-disable-next-line
  if(!countryCode.match("^([a-zA-Z\u0080-\u024F]{1}[a-zA-Z\u0080-\u024F\. |\-| |']*[a-zA-Z\u0080-\u024F\.']{1})$")){
    //console.log("not valid characters")
    return {error:"Oops, invalid country name!"}
  }

  // some api argument
  const username = "weknowit"

  let url = "http://api.geonames.org/searchJSON?q=" + countryCode + "&country=" + countryCode +"&maxRows=10&orderby=population&cities=cities15000&username=" + username


  let response = await fetch(url)

  // response will be handled if it is code: 200 (ok)
  if(response.ok){
    let data = await response.json()
    
    if(data.hasOwnProperty("geonames") && data.geonames.length > 0){
      //console.log(data.geonames)
      
      if(data.geonames.length > 5){
        return {cities: [data.geonames[0], data.geonames[1], data.geonames[2], data.geonames[3], data.geonames[4]]}
      }  else return {cities: data.geonames};
      

    } else if (data.hasOwnProperty("geonames") && data.geonames.length === 0){
      //if there is no results attached return this
      return {error: "No matches found."}
    } else {
      return {error: "Internal api error, sorry about that :("}
    }
  } else {
    return {error: "Server response was not ok :("}
  }
  
}

