import React, {Component, useRef, useEffect} from "react"
import "../../css/search.css"

// import for enter-animations
import {TweenMax, Power3} from "gsap"

// class based component that handles everything that has to do with city-searching
class CitySearch extends Component{

  constructor(){
    super()
    this.searchBar = null
  }

  // lifecycle method that is called when the component succesfully mounts
  componentDidMount(){
    TweenMax.to(this.searchBar, 1.2,{opacity:1,y: -20,ease: Power3.easeOut})
  }

  render(){
    return(
      <div className="column">
        <div ref={element => {this.searchBar = element}} class="finder">
            <div class="finder__outer">
              <div class="finder__inner">
                <div class="finder__icon" ref="icon"></div>
                <input class="finder__input" type="text" name="q" placeholder="e.g. Stockholm" />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default CitySearch