import React from "react"
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Badge } from 'reactstrap'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    
    <Helmet title="MM Science | A Online Library website for Myanmar Education" />
    
    <Grid container spacing={3} 
    css={css`
      padding-top: 10px;
    `}>
        
      {data.allMarkdownRemark.edges.map(({ node }) => (
          
        <Grid item xs={12} sm={4} 
          key={node.id} 
          css={css`
            @media screen and (max-width: 700px) {
              padding: 0 !important;
            }        
        `}>
          <div className="blog__post__items">
            <div 
              css={css`
                @media screen and (max-width: 700px) {
                  padding: 10px;
                }
            `}>
              <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} 
              alt={node.frontmatter.title}
              css={css`
                @media screen and (max-width: 700px) {
                  box-shadow: none;
                  border-radius: 20px;
                }
              `}/>
            </div>
            <div 
            css={css`
              padding: 1rem 1rem;
              background: #fff;
              @media screen and (max-width: 700px) {
                border-radius: 20px;
              }
            `}>
              <Link
                to={node.fields.slug}
                alt={node.fields.slug}
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
                <Typography paragraph style={{ margin: '0'}}>
                  {node.excerpt}
                </Typography>
              </Link>
              <div className="article__label"> 
                <Badge color="success">{node.frontmatter.tags}</Badge>  
              </div>
              <span className="article__meta"> 
                {node.frontmatter.date} · {node.timeToRead} min read 
              </span>
            </div>
          </div>
        </Grid>
         
      ))}
    </Grid>
  </Layout>
);


export const query = graphql `
query {
  allMarkdownRemark(filter: {frontmatter: {tags:{eq: "Chemistry"}}}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          tags
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`