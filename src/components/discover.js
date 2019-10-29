import React from 'react'
import { Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import { css } from '@emotion/core'
import Tabs from '@material-ui/core/Tabs'
import Button from '@material-ui/core/Button'

export default ({ tags }) => {
  return (
    <div
    css={css`
    overflow: auto;
    white-space: nowrap;

    `}>
      {tags.map(tag => (
        <div key={tag.fieldValue}
        css={css`
          display: inline-block;
          color: #1ca086;
          background-color: #fff;
          text-align: center;
          text-decoration: none;
          margin: 20px 10px;
          border-radius: .25rem;
        `}>       
       
          <Link 
              to={`/${kebabCase(tag.fieldValue)}/`}
              css={css`
                color: #1ca086;
                text-decoration: none;
            `}>
               <Button color="inherit">
              {tag.fieldValue}
              </Button>
            </Link> 
       
        </div>
      ))}
    </div>
  )
}