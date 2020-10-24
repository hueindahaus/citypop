import React, {Component} from "react"
import "../../css/search.css"
import {TweenMax, Power3} from "gsap"



class CountrySearch extends Component{

  constructor(){
    super()
    this.searchBar = null
  }
  componentDidMount(){
    TweenMax.to(this.searchBar, 1.2,{opacity:1,y: -20,ease: Power3.easeOut})
  }

  render(){
    return(
      <div className="column">
        <div ref={element=> {this.searchBar=element}} class="finder">
            <div class="finder__outer">
              <div class="finder__inner">
                <div class="finder__icon" ref="icon"></div>
                <input class="finder__input" type="text" name="q" placeholder="e.g. Sweden" />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default CountrySearch