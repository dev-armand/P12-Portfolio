// This is the "Background video" for the application

import React from "react"
import blackhole from "../../assets/blackhole.mp4"
import "./blackhole.scss"

function VideoBackhole() {
  return(
    <div className="video-container">
        <video src={blackhole} autoPlay loop muted className="video-container__video" />
    </div>
  )
}

export default VideoBackhole