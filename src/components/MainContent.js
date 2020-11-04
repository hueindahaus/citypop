import React, {useEffect} from "react"
import "../css/main-content.css"
import Option from "./Option.js"
import CitySearch from "./Pages/CitySearch.js"
import CountrySearch from "./Pages/CountrySearch";

// imports for animation and animation on scroll
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

// import for react route that switches between city search and country search
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);



// functional component that regulates the container for all of the main conent
function MainContent(){

  useEffect(()=>{
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
  })  

  return(
    <main id="main" className="main-container">
      <Router>
        <Option  />
        <Switch>
          <Route path="/city" component={CitySearch} />
          <Route path="/country" component={CountrySearch} />
        </Switch>
      </Router>
    </main>
  )
}


export default MainContent