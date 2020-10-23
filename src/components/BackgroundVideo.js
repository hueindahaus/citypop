import React from "react"
import videoSource from "../resources/videos/city-view.mp4"
import "../css/header.css"

function BackgroundVideo(){
  
  return(
    <div >
      <video autoPlay="autoPlay" loop="loop" muted className="video">
        <source src={videoSource} type="video/mp4"/>
        your browser does not support the video tag.
      </video>
    </div>
  )
}

export default BackgroundVideo