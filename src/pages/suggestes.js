import React from 'react';

export default (props) => {
  return (
    <div>
      {props.suggestList.map(({node}) => (
        <div key={node.id}>
        <h1>{node.frontmatter.title}</h1>
        </div>
      ))}
    </div>
  )
}