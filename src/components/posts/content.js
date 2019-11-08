import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import kebabCase from "lodash/kebabCase"
import { css } from '@emotion/core'
import { Badge } from 'reactstrap';

export default (props) => {
  return (
    <div css={css`
      padding: .25rem 1rem .25rem 1rem;
    `}>
      <h5>
        {props.tags.map((index) => (
          <Link to={`/${kebabCase(index)}/`} alt={index}>
            <Badge color="info" style={{ marginRight: '3px' }}>{index}</Badge>
          </Link>
        ))}
      </h5>
      <Link
        to={props.to}
        alt={props.title}
        css={css`
          text-decoration: none;
          color: inherit;
      `}>
        <Typography variant="body1"
         style={{ color: 'var(--appBar-text)' }}
          css={css` 
            font-weight: bold;
        `}> 
          {props.title}
        </Typography>
      </Link>   
      
    </div>
  )
}