import React from 'react';
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { Badge } from 'reactstrap'
import { Helmet } from 'react-helmet'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default (props) => {
  return (
    <React.Fragment>
      <Helmet title="MM Science | Search" />
      {props.suggestList.map(({node}) => (
        <Grid item xs={12} sm={4} 
        key={node.id} 
        css={css`
          @media screen and (max-width: 700px) {
            padding: 0 !important;
            margin-bottom: 20px !important;
          }        
      `}>
        <div className="blog__post__items" style={{ height: '100%', backgroundColor: 'var(--appBar-bg)' }}>
          <div 
          className="responsive-image-border"
            css={css`

              @media screen and (max-width: 700px) {
                padding: 10px;
              }
          `}>
            <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} 
            className="responsive-image"
            alt={node.frontmatter.title}
              css={css`
                @media screen and (max-width: 700px) {
                  box-shadow: none;
                  border-radius: 20px;
                }
            `}/>
          </div>
          <div 
            style={{ backgroundColor: 'var(--appBar-bg)', color: 'var(--appBar-text)' }}
            css={css`
              padding: .25rem 1rem 1rem 1rem;
              background: #fff;
              @media screen and (max-width: 700px) {
                border-radius: 20px;
              }
          `}>
            
            <div
              css={css`
                display: flex;
                flex-direction: row;
                margin: 10px auto;
            `}>
              <div className="article_owner">
                <img src={node.frontmatter.authorPic.childImageSharp.fluid.src} alt={node.frontmatter.author} 
                  css={css`
                    width: 40px;
                    height: 40px;
                    border-radius: 100%;
                `}/>
              </div>
              <div
                css={css`
                  margin-left: 12px;
              `}>
                <span css={css`
                  font-weight: 700px;
                `}>
                  {node.frontmatter.author}
                </span>
              <div>
              <span className="article__meta" style={{ color: 'var(--appBar-text)' }}> 
                {node.frontmatter.date} · {node.timeToRead} min read 
              </span>
            </div>
          </div>
        </div>

        <Link
          to={node.fields.slug}
          alt={node.frontmatter.title}
          css={css`
            text-decoration: none;
            color: inherit;
        `}>
          <Typography variant="body1"
            css={css` 
              font-weight: bold;
          `}> 
            {node.frontmatter.title}
          </Typography>
        </Link>

        <div className="article__label"> 
          <Badge color="success">
            {node.frontmatter.tags}
          </Badge>
        </div>
      </div> 
        </div>
      </Grid>
      ))}
    </React.Fragment>
  )
}