import React, {useRef, useState, useEffect, Component} from "react"
import "../../css/search.css"
import {searchCity} from "../../service/DataHandler.js"
import {debounce} from "../../service/Debounce.js"

// import for enter-animations
import {TweenMax, Power3} from "gsap"

// functional component that handles everything that has to do with city-searching
function CitySearch(){

  let searchBar = useRef(null)
  //state should consist of result and loading
  let [result, setResult] = useState("")
  let [loading, setLoading] = useState(false)

  //called on mount
  useEffect(()=> {
    TweenMax.to(searchBar, 1.2,{opacity:1,y: -20,ease: Power3.easeOut})
  }, [])



  // method that queries a result from DataHandler.js
  async function handleSearch(event){
    setLoading(true)

    if(event.target.value.length > 0){
      setResult(await searchCity(event.target.value))
      setLoading(false)
    } else {
      setResult("")
      setLoading(false)
    }
  }

  //section for handling how the result should be displayed
  let resultDisplay = ""
  if(result !== undefined){
    if(result.hasOwnProperty("error")){
      resultDisplay = <h2 style={{color: "#e66b2e"}}>{result.error}</h2>
    } else if (result.hasOwnProperty("toponymName") && result.hasOwnProperty("population")){
      resultDisplay = <h2 style={{color:"#e62e6b"}}>{result.toponymName + " has a population of:  " + result.population}</h2>
    } else {
      resultDisplay = <h2> </h2>
    }
  }


  let loadingIndicator = <h2>loading...</h2>

  return(
    <div className="column">
      <div ref={element => {searchBar = element}} className="finder">
        <div className="finder__outer">
          <div className="finder__inner">
            <div className="finder__icon"></div>
            <input onChange={debounce(handleSearch, 500)} className="finder__input" type="text" name="q" placeholder="e.g. Gothenburg" />
          </div>        
        </div>
      </div>
      <div>
        {loading ? loadingIndicator : resultDisplay}
      </div>
    </div>
  )
}

export default CitySearch