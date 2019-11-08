import React from 'react';
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Grid from '@material-ui/core/Grid'
import { css } from '@emotion/core'
import Typography from '@material-ui/core/Typography'

export default class Tabs extends React.Component {

  render() {
    return (
      <Grid container spacing={3}>
        {this.props.tags.map(tag => (
         
          <Grid item xs={12} sm={4} key={tag.fieldValue} style={{ marginTop: '20px' }}>
            <div 
              style={{ backgroundColor: 'var(--appBar-bg)', color: 'var(--appBar-text)' }}
              css={css`
                padding: 10px;
                border-radius: 20px;
                box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
                text-align: center;
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
              
                  <Typography variant="subtitle1">
                    {tag.fieldValue}
                  </Typography>

              
                 
                  <Typography variant="body2">
                    {tag.totalCount} articles
                  </Typography>
                 
              </Link> 
            </div>
          </Grid>
        ))} 
      </Grid>
    );
  }
}

