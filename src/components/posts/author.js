import React from 'react'
import { css } from '@emotion/core'

export default (props) => {
  return (
    <div className="article_role_play">
      <div className="article_owner">
        <img src={props.src} alt={props.name} className="author__pic" />
      </div>
      <div css={css`
        margin-left: 12px;
      `}>
        <span css={css`
          font-weight: 700px;
        `}>
          {props.name}
        </span>
        <div>
          <span className="article__meta" style={{ color: 'var(--appBar-text)' }}> 
            {props.date} · {props.timeToRead} min read 
          </span>
        </div>
      </div>
    </div>
  )
}