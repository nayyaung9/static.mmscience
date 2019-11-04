import React from 'react'
import Img from 'gatsby-image'

export default (props) => {
  return (
    <div className="responsive-image-border">
      <Img 
        fluid={props.src} 
        alt={props.alt}
        className="responsive-image"
      />
    </div>
  )
}