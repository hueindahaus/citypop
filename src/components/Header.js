import React from "react"
import BackgroundVideo from "./BackgroundVideo.js"
import "../css/header.css"
import facebook from "../resources/icons/facebook.svg"
import instagram from "../resources/icons/instagram.svg"
import twitter from "../resources/icons/twitter.svg"

//This is a functional component that represents the header and "landing section" of the page
function Header(props){
  return(
    <header className="header-container">
      <h1 className="head-line">CityPop</h1>
      <h2 className="sub-line">Population of cities all around the globe.</h2>
      <div className="link-box">
        <a href="#"><img className="social-media" src={facebook}/></a>
        <a href="#"><img className="social-media" src={instagram}/></a>
        <a href="#"><img className="social-media" src={twitter}/></a>
      </div>
      <button className="get-started-button" onClick={scrollToMainSection}>Get started</button>
      <BackgroundVideo />
    </header>
  )
}

function scrollToMainSection(){
  const mainElement = document.getElementById("main")
  mainElement.scrollIntoView({behavior: "smooth"})
}




export default Header