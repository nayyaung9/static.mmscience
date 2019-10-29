import React from "react"
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Badge } from 'reactstrap'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Layout from '../components/layout'
import HomePage from '../components/home'

export default ({ data }) => (
  <React.Fragment>
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
                  <span className="article__meta"> 
                    {node.frontmatter.date} · {node.timeToRead} min read 
                  </span>
                </div>
              </div>
            </div>

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
            </Link>

            <div className="article__label"> 
              <Badge color="success">{node.frontmatter.tags}</Badge>  
            </div>
          </div> 
            </div>
          </Grid>
          
        ))}
      </Grid>

    
    </Layout>
  <HomePage />
  </React.Fragment>
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
`;