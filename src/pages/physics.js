import React from "react"
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Helmet } from 'react-helmet'

import Grid from '@material-ui/core/Grid'
import FeatureImage from '../components/posts/featureImage'
import Author from '../components/posts/author'
import Content from '../components/posts/content'
import Layout from '../components/layout'
import Cover from '../components/posts/cover'

export default ({ data }) => (
  <Layout>

    <Cover title="Physics" totalCount={data.allMarkdownRemark.totalCount} />
    
    <main style={{ marginTop: '35px'}}>
      <Helmet title="MM Science | A Online Library website for Myanmar Education" />
      
      <Grid container spacing={3} 
        direction="row"
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
                title={node.frontmatter.title}
                tags={node.frontmatter.tags}
              />
            </div>
          </Grid>
          
        ))}
      </Grid>
    </main>
  </Layout>
);

export const query = graphql `
query {
  allMarkdownRemark(filter: {frontmatter: {tags:{eq: "Physics"}}}) {
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
          date(fromNow: true)
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