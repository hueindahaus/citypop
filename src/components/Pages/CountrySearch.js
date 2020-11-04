import React, {useRef, useState, useEffect, Component} from "react"
import "../../css/search.css"
import {searchCountry} from "../../service/DataHandler.js"
import {debounce} from "../../service/Debounce.js"
import CityTile from "../CityTile.js"

// import for enter-animations
import {TweenMax, Power3} from "gsap"

// functional component that handles everything that has to do with country-searching
function CountrySearch(){

  let searchBar = useRef(null)
  //state should consist of result and loading
  let [loading, setLoading] = useState(false)
  let [result, setResult] = useState("")

  //called on mount
  useEffect(()=>{
    TweenMax.to(searchBar, 1.2,{opacity:1,y: -20,ease: Power3.easeOut})
  }, [])
  
   // method that queries a result from DataHandler.js
  async function handleSearch(event){
    setLoading(true)
    if(event.target.value.length > 0){
      setResult(await searchCountry(event.target.value))
      setLoading(false)

    } else {
      setResult("")
      setLoading(false)
    }
  }

    //section for handling how the result should be displayed
  let resultDisplay = ""
  if(result.hasOwnProperty("error")){
    resultDisplay = <h2 style={{color: "#e66b2e"}}>{result.error}</h2>
  } else if (result.hasOwnProperty("cities")){
    let resultHeadline = <h2 style={{color:"#e62e6b"}}>{result.cities[0].countryName +"'s top populated cities are:"}</h2>
    
    let resultList = result.cities.map((city) => {
      return <CityTile cityName={city.toponymName} population={city.population} key={city.geonameId}/>
    })

    resultDisplay = <div style={{marginBottom:"2rem"}}>
      {resultHeadline}
      {resultList}
    </div>
  } else {
    resultDisplay = <h2> </h2>
  }

  return(
    <div className="column">
      <div ref={element=> {searchBar=element}} className="finder">
          <div className="finder__outer">
            <div className="finder__inner">
              <div className="finder__icon"></div>
              <input onChange={debounce(handleSearch,500)} className="finder__input" type="text" name="q" placeholder="e.g. Sweden" />
            </div>
          </div>
        </div>
        {loading ? <h2>loading..</h2> : resultDisplay}
    </div>
  )
}

export default CountrySearch