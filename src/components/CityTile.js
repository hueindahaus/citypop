import React, {Component} from "react"
import "../css/search.css"

// import for animations
import {TweenMax, Power3} from "gsap"


class CityTile extends Component{
  constructor(){
    super()
    this.state = {
      active: false
    }

    this.textRef = null
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    TweenMax.to(this.textRef, 1.2,{opacity:1,ease: Power3.easeOut})
  }

  handleClick(){
    this.setState(prevState =>({
      active:!prevState.active
    }))
  }

  render(){
    let display;

    if(this.state.active){
      display = <p ref={element=> {this.textRef=element}} className="city-tile-title">{this.props.cityName} has a population of {this.props.population}</p>
    } else {
      display = <p ref={element=> {this.textRef=element}} className="city-tile-title">{this.props.cityName}</p>
    }

    return(
      <div onClick={this.handleClick} className="city-tile">
        {display}
      </div>
    )
  }
}

export default CityTile