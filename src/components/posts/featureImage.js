import React from 'react'

export default (props) => {
  return (
    <div className="responsive-image-border">
      <div className="responsive-image"
        aria-label={props.alt}
        alt={props.alt}
        style={{
          backgroundImage: `url(${props.src.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#cccccc'
        }}
      >
      </div>
    </div>
  )
}