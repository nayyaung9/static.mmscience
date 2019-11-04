import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Helmet } from "react-helmet"
import Layout from '../components/layout'
import ReadType from '../components/read-type'
import { Badge } from 'reactstrap';
import Img from 'gatsby-image'
import '../styles/global.css'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import FeatureImage from '../components/posts/featureImage'
import Author from '../components/posts/author'
import Content from '../components/posts/content'

export default ({ data }) => {
  return (

    <React.Fragment>
      <div
      style={{ backgroundColor: 'var(--wiki-board)'}} 
      css={css`
        padding: 20px;
        color: #fff;
        padding: 100px 0 40px 0;
        text-align: center;
      `}>
        <Typography variant="h6">
          wiki ( ကဏ္ဍစုံစာမျက်နှာ )
        </Typography>
      </div>

      <Container maxWidth="md" style={{ margin: '30px auto'}}>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6}>
            <ReadType />
          </Grid>
          <Grid item xs={6} sm={6} style={{ textAlign: 'right', fontWeight: 'bold' }}>
            <Typography variant="h6">
              {data.allMarkdownRemark.totalCount} articles
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Layout>
        <main>

          <Helmet title={data.site.siteMetadata.title} />

          <Grid container 
            spacing={3} 
            direction="row"
            justify="center"
            alignItems="stretch">
          
        
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
    </React.Fragment>
  )
}

export const query = graphql `
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC })  {
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
        excerpt
        timeToRead
      }
    }
  }
}
`