import React, {Component, useEffect} from "react"
import "../css/main-content.css"
import Option from "./Option.js"
import CitySearch from "./Pages/CitySearch.js"
import CountrySearch from "./Pages/CountrySearch";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {Route, BrowserRouter as Router, Switch} from "react-router-dom"



// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);



class MainContent extends Component{

  constructor(){
    super()
    this.state = {
      page:"start"
    }

    this.handleCityButton = this.handleCityButton.bind(this)
    this.handleCountryButton = this.handleCountryButton.bind(this)
  }

  componentDidMount(){
    const scrollTrigger = {
      trigger: "#main",
      scrub:1,
      start:"top bottom",
      end: "top 100px",
      //markers: true
  }

    gsap.to('.option-button', { 
      "margin-left": "1rem",
      "margin-right": "1rem",
      duration: 3,
      scrollTrigger: scrollTrigger
    });


    gsap.to('.option-text', { 
      opacity: "100%",
      duration: 3,
      scrollTrigger: scrollTrigger
    });
  }

  handleCityButton(event){
    this.setState({
      page:"left"
    })
    console.log(this.state)
  }

  handleCountryButton(event){
    this.setState({
      page:"right"
    })
    console.log(this.state)
  }

  render(){
    

    return(
      <main id="main" className="main-container">

        <Router>
          <Option handleCityButton={this.handleCityButton} handleCountryButton={this.handleCountryButton} />
          <Switch>
            <Route path="/city" component={CitySearch} />
            <Route path="/country" component={CountrySearch} />
          </Switch>
        </Router>
      </main>
    )
  }
}

export default MainContent