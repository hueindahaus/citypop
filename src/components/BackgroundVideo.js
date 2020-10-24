import React from "react"
import videoSource from "../resources/videos/city-view.mp4"
import "../css/header.css"


//functional component that returns a <video> element
// video is taken from https://mixkit.co/free-stock-video/daytime-city-traffic-aerial-view-56/ and complies with the license
function BackgroundVideo(){
  return(
    <div className="video-container">
      <video autoPlay="autoPlay" loop="loop" muted className="video">
        <source src={videoSource} type="video/mp4"/>
        your browser does not support the video tag.
      </video>
    </div>
  )
}

export default BackgroundVideo