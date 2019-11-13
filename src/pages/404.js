import React from 'react';
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Layout from '../components/layout'

import FeatureImage from '../components/posts/featureImage'
import Author from '../components/posts/author'
import Content from '../components/posts/content'
import SEO from '../components/SEO'

export default ({ data }) => {
  return (
    <Layout>

      <SEO title="MM Science | Page Not Found"/>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'var(--appBar-text)',
        margin: '80px auto'
      }}>
        <h1>This page will be coming soon</h1>
      </div>

      <Typography variant="h6">Here are feature articles</Typography>
      
      <Grid container spacing={3} 
          direction="row"
          justify="center"
          alignItems="stretch"
          css={css`
            padding-top: 10px;
          `}>
        
          {data.allMarkdownRemark.edges.map(({ node }) => (
              
            <Grid item xs={12} sm={4} 
              key={node.id} 
              css={css`
                @media screen and (max-width: 700px) {
                  padding: 0 12px !important;
                  margin-bottom: 20px !important;
                }        
            `}>
              <div 
                className="blog__post__items" 
                style={{ height: '100%', backgroundColor: 'var(--appBar-bg)' }}
              >
                <FeatureImage 
                  src={node.frontmatter.featuredImage.childImageSharp.fluid}
                  alt={node.frontmatter.title} 
                />
                <div className="author_field">
                  <Author 
                    src={node.frontmatter.authorPic.childImageSharp.fluid.src} 
                    name={node.frontmatter.author} 
                    date={node.frontmatter.date} 
                    timeToRead={node.timeToRead} 
                  />
                </div>
                <Content 
                  to={node.fields.slug}
                  title={node.excerpt}
                  tags={node.frontmatter.tags}
                />
              </div>
            </Grid>
            
          ))}
        </Grid>
    </Layout>
  )
}

export const query = graphql `
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 6)   {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          author
          authorPic {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
        excerpt(truncate: true)
        timeToRead
      }
    }
  }
}
`