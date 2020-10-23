import React from "react"
import BackgroundVideo from "./BackgroundVideo.js"
import "../css/header.css"

//This is a functional component that represents the header and "landing section" of the page
function Header(){
  return(
    <header className="header-container">
      <BackgroundVideo />
    </header>
  )
}



export default Header