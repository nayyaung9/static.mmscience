import React from "react"
const Video = ({ videoSourceURL, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={videoSourceURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video