import React from 'react'

export default (props) => {
  return (
    <div className="responsive-image-border">
      <div className="responsive-image"
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