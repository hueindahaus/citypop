
// function that returns a city object (or error object) depending on the search. It will take the one that matches the input string best and then taking the one that has highest population
export async function searchCity(input){
  
  input = input.toLowerCase();

  // eslint-disable-next-line
  if(!input.match("^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$")){
    console.log("not valid characters")
    return {error:"Oops! Invalid characters in the field!"}
  }
  
  // some api argument
  const username = "weknowit"
  const  fuzzyness = "0.8"

  // fuzzy search is used so that even if the user's input is a little bit incorrect, it will return what was meant in the search input
  // documentation of api can be found here: http://www.geonames.org/export/geonames-search.html
  let url = "http://api.geonames.org/searchJSON?q=" + input + "&fuzzy=" + fuzzyness +"&cities=cities5000&username=" + username

  //await new Promise(r => setTimeout(r, 2000));

  let response = await fetch(url)

  // response will be handled if it is code: 400 (ok)
  if(response.ok){
    let data = await response.json()

    if(data.hasOwnProperty("geonames") && data.geonames.length > 0){
      let mostPopulation = {population: 0};
      const cities = data.geonames

      // loop through all the cities to find the one with highest population. Note that algorithm complexity (O-notation) can be brought down by sorting first and then picking the first element
      for(let i = 0; i < cities.length; i++){
        if (cities[i].population >= mostPopulation.population){
          mostPopulation = cities[i]
        }
      }

      return mostPopulation

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

