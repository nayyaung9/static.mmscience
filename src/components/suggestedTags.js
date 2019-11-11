import React from 'react'
import { Badge } from 'reactstrap'

const SuggestedTags = (props) => {
  return (
    <React.Fragment>
      {props.tags.map((tag) => (
        <Badge color="secondary" style={{ margin: '0 10px 10px 0', padding: '5px'}}>
          {tag.fieldValue}
        </Badge>
      ))}
   </React.Fragment>
  )
}

export default SuggestedTags