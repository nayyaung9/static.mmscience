import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Helmet } from "react-helmet"
import Layout from '../components/layout'
import ReadType from '../components/read-type'
import { Badge } from 'reactstrap';
import Img from 'gatsby-image'
import '../styles/global.css'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default ({ data }) => {
  return (
    <Layout>
      <Helmet title={data.site.siteMetadata.title} />

      <div className="reading_type_style">
        <ReadType type="select reading style"/>
      </div>
      

      <Grid container spacing={3}>

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
                `}
              >
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
                  <Typography variant="body2" 
                  css={css`
                    font-family: 'Rubik', 'Pyidaungsu', sans-serif;
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
  )
}

export const query = graphql `
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark {
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
`