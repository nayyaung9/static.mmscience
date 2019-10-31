import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Helmet } from "react-helmet"
import Layout from '../../components/layout'
import ReadType from '../../components/read-type'
import { Badge } from 'reactstrap';
import Img from 'gatsby-image'
import '../../styles/global.css'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default ({ data }) => {
  return (
    <React.Fragment>
      <div css={css`
        background: rgb(72, 191, 131);
        padding: 20px;
        color: #fff;
        padding: 100px 0 40px 0;
        text-align: center;
      `}>
        <Typography variant="h6">
          MM Science <br />
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

     

        <Grid container spacing={3} 
          direction="row"
          justify="center"
          alignItems="stretch"
>
        
        
          {data.allMarkdownRemark.edges.map(({ node }) => (
              
            <Grid item xs={12} sm={4} 
              key={node.id} 
              css={css`
                @media screen and (max-width: 700px) {
                  padding: 0 !important;
                  margin-bottom: 20px !important;
                }        
            `}>
              <div className="blog__post__items" style={{ height: '100%' }}>
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