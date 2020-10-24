import React, {Component, useEffect} from "react"
import "../css/main-content.css"
import Option from "./Option.js"
import CitySearch from "./Pages/CitySearch.js"
import CountrySearch from "./Pages/CountrySearch";

// imports for animation and animation on scroll
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import for react route that switches between city search and country search
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


// class component that includes everything that the page is meant to do. This component could in fact be a functional component, but since I want the code open for extensions
// it is more convenient to keep it as a class based component.
class MainContent extends Component{

  constructor(){
    super()
  }

  // lifecycle method that will be called when the component succesfully mounts
  componentDidMount(){
    const scrollTrigger = {
      trigger: "#main",
      scrub:1,
      start:"top bottom",
      end: "top 100px",
      //markers: true
    }

    // enables scroll-triggered animation
    gsap.to('.option-button', { 
      "margin-left": "1rem",
      "margin-right": "1rem",
      duration: 3,
      scrollTrigger: scrollTrigger
    });

    // enables scroll-triggered animation
    gsap.to('.option-text', { 
      opacity: "100%",
      duration: 3,
      scrollTrigger: scrollTrigger
    });
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