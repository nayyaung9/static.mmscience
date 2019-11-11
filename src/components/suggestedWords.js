import React from 'react'


const SuggestedWords = (props) => {
  return (
    <React.Fragment>
      {props.words.map((index) => (
        <button color="secondary" style={{ margin: '0 10px 10px 0', padding: '5px'}} value={index}>
          {index}
        </button>
      ))}
   </React.Fragment>
  )
}

export default SuggestedWords