import React from "react"
import { Link } from 'gatsby'
import { css } from '@emotion/core'

const Category = () => {
  return (
    <div>
    <div
      css={css`
        box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.1);
        padding: 1rem 1rem;
        border-radius: .5em;
        cursor: pointer;
        margin-bottom: 20px;
        background-color: #fff;
    `}>
      <Link 
        to='/mechanics'  
        css={css`
          text-decoration: none;
          color: inherit;
        `}>
          Mechanics
      </Link>
    </div>
    <div
      css={css`
        box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.1);
        padding: 1rem 1rem;
        border-radius: .5em;
        cursor: pointer;
        margin-bottom: 20px;
        background-color: #fff;
    `}>
      <Link 
        to='/heat'  
        css={css`
          text-decoration: none;
          color: inherit;
        `}>
          Power
      </Link>
    </div>
    </div>
  )
}

export default Category