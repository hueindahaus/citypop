import React, {Component, useEffect} from "react"
import "../css/main-content.css"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);



class MainContent extends Component{

  constructor(){
    super()
    this.state = {
      
    }
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

  render(){
  
    return(
      <main id="main" className="main-container">
        <div className="column">
          <h2 className="option-text">Choose your option!</h2>
          <div className="row">
            <button className="option-button">Search by city</button>
            <button className="option-button">Search by country</button>
          </div>
        </div>
        
      </main>
    )
  }
}

export default MainContent