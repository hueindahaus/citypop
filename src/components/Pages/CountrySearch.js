import React, {Component} from "react"
import "../../css/search.css"

// import for enter-animations
import {TweenMax, Power3} from "gsap"


// class based component that handles everything that has to do with country-searching
class CountrySearch extends Component{

  constructor(){
    super()
    this.searchBar = null
  }

  //lifecycle method that will be called when the component succesfully mounts
  componentDidMount(){
    TweenMax.to(this.searchBar, 1.2,{opacity:1,y: -20,ease: Power3.easeOut})
  }

  render(){
    return(
      <div className="column">
        <div ref={element=> {this.searchBar=element}} className="finder">
            <div className="finder__outer">
              <div className="finder__inner">
                <div className="finder__icon" ref="icon"></div>
                <input className="finder__input" type="text" name="q" placeholder="e.g. Sweden" />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default CountrySearch