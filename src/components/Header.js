import React, {useRef, useEffect} from "react"
import BackgroundVideo from "./BackgroundVideo.js"
import "../css/header.css"

import {TweenMax, Power3} from "gsap"

import facebookIcon from "../resources/icons/facebook.svg"
import instagramIcon from "../resources/icons/instagram.svg"
import twitterIcon from "../resources/icons/twitter.svg"

//This is a functional component that represents the header and "landing section" of the page
//The module uses Greensock (GSAP) library to create animations
function Header(props){
  //returns an object with current:null
  let headline = useRef(null)
  let subline = useRef(null)
  let facebook = useRef(null)
  let instagram = useRef(null)
  let twitter = useRef(null)
  let button = useRef(null)

  //input animation-method which will be called like the lifecycle method componentDidMount()
  useEffect(() => {
    TweenMax.to(headline,1.2,{opacity:1,y: -20,ease: Power3.easeOut})

    TweenMax.to(subline,1.2,{opacity:1,y: -20,ease: Power3.easeOut,delay: 0.2})

    TweenMax.to(facebook,1.2,{opacity:1,y: -20,ease: Power3.easeOut,delay: 0.8})

    TweenMax.to(instagram,1.2,{opacity:1,y: -20,ease: Power3.easeOut,delay: 1})

    TweenMax.to(twitter,1.2,{opacity:1,y: -20,ease: Power3.easeOut,delay: 1.2})
    
    TweenMax.to(button,1.2,{opacity:1,y: -20,ease: Power3.easeOut,delay: 0.2})
  }, [])

  return(
    <header className="header-container">
      <h1 ref={element => {headline=element}} className="head-line">CityPop</h1>
      <h2 ref={element => {subline=element}} className="sub-line">Population of cities all around the globe.</h2>
      <div className="link-box">
        <a href="#"><img ref={element => {facebook=element}} className="social-media" src={facebookIcon}/></a>
        <a href="#"><img ref={element => {instagram=element}} className="social-media" src={instagramIcon}/></a>
        <a href="#"><img ref={element => {twitter=element}} className="social-media" src={twitterIcon}/></a>
      </div>
      <button ref={element => {button=element}} className="get-started-button" onClick={scrollToMainSection}>Get started</button>
      <BackgroundVideo />
    </header>
  )
}

function scrollToMainSection(){
  const mainElement = document.getElementById("main")
  mainElement.scrollIntoView({behavior: "smooth"})
}




export default Header