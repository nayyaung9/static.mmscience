import React from 'react'
import kebabCase from "lodash/kebabCase"
import { css } from '@emotion/core'
import Button from '@material-ui/core/Button'
import { Link } from 'gatsby'

export default ({ tags }) => {
  return (
    <div
    className="tags_scrollbar"
    css={css`
      overflow: auto;
      white-space: nowrap;
    `}>
      {tags.map(tag => (
        <div key={tag.fieldValue}
        css={css`
          display: inline-block;
          text-align: center;
          text-decoration: none;
          margin: 20px 10px;
          border-radius: .25rem;
        `}>       
          <Link to={`/${kebabCase(tag.fieldValue)}/`} alt={tag.fieldValue.toLowerCase()}>
            <Button variant="contained" 
              style={{ backgroundColor: 'var(--appBar-bg)', color: 'var(--discover-text)' }}
              css={css`
                text-decoration: none;
            `}>
              {tag.fieldValue}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  )
}