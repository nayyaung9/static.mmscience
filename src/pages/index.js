import React from "react"
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Badge } from 'reactstrap'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import TagBar from '../components/discover'
import Layout from '../components/layout'
import HomePage from '../components/home'

export default ({ data }) => (
  <Layout>

    {/* <TagBar tags={data.allMarkdownRemark.group}/> */}

    <Helmet title="MM Science | A Online Library website for Myanmar Education" > */}
      <meta name="description" content="A Online Library website for Myanmar Educatio" />
      <meta name="image" content="/src/assets/mmscience0.jpg" />
    </Helmet> 

    <div>
      <Typography variant="h6">
        Feature articles
      </Typography>
    </div>
    
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

    <HomePage />
  </Layout>
);

export const query = graphql `
query {
  site {
    siteMetadata {
      title
      description
      image
      url
    }
  }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 6) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMM, YYYY")
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
        timeToRead
      }
    }
  }
}
`;