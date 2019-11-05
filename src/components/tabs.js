import React from 'react';
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Grid from '@material-ui/core/Grid'
import { css } from '@emotion/core'

export default class Example extends React.Component {
  render() {
    return (
      <Grid container spacing={3}>
        {this.props.tags.map(tag => (
          <Grid item xs={12} sm={6} key={tag.fieldValue} style={{ marginTop: '40px' }}>
            <div 
              style={{ backgroundColor: 'var(--appBar-bg)', color: 'var(--appBar-text)' }}
              css={css`
                padding: 10px;
                border-radius: 20px;
              `}
              key={tag.fieldValue}
            >
              <Link 
                to={`/${kebabCase(tag.fieldValue)}/`}
                alt={tag.fieldValue}
                css={css`
                  color: #1ca086;
                  text-decoration: none;
                `}>
                  <b>{tag.fieldValue}</b> <br />
                  <b>{tag.totalCount} articles</b>
              </Link> 
            </div>
          </Grid>
        ))} 
      </Grid>
    );
  }
}