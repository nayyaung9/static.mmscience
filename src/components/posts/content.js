import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { Badge } from 'reactstrap'
import { css } from '@emotion/core'

export default (props) => {
  return (
    <div css={css`
      padding: .25rem 1rem 1rem 1rem;
    `}>
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