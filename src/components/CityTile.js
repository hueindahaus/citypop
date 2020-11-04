import React, {useState, useEffect, useRef} from "react"
import "../css/search.css"

// import for animations
import {TweenMax, Power3} from "gsap"

function CityTile(props){
  let textRef = useRef(null)

  let [active, setActive] = useState(false)

  useEffect(()=>{
    TweenMax.to(textRef, 1.2,{opacity:1,ease: Power3.easeOut})
  })

  function handleClick(){
    setActive(prevActive => {
      return !prevActive
    })
  }

  return(
    <div onClick={handleClick} className="city-tile">
      {active ? <p ref={element=> {textRef=element}} className="city-tile-title">{props.cityName} has a population of {props.population}</p> :
      <p ref={element=> {textRef=element}} className="city-tile-title">{props.cityName}</p>}
    </div>
  )
}

export default CityTile