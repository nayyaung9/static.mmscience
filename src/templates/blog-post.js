import React from "react"
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Helmet } from "react-helmet"
import Img from 'gatsby-image'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Master from '../components/master'
import FeatureImage from '../components/posts/featureImage'
import Author from '../components/posts/author'
import Content from '../components/posts/content'
import Reaction from '../components/posts/reaction'

export default ({data}) => {

  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  let authorPic = post.frontmatter.authorPic.childImageSharp.fluid

  return (
    <Master>
      <main style={{ marginTop: '80px' }}>

      <Helmet title={`MM Science | ${post.frontmatter.title}`} />

        <Container maxWidth="md">
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} sm={9}
               css={css`
               @media screen and (max-width: 700px) {
                 padding: 0 !important;
                 margin-bottom: 20px !important;
               }        
           `}>
              <div className="article">
                <Img fluid={featuredImgFluid} loading="lazy" alt={post.frontmatter.title} aria-label={post.frontmatter.title}/>
                <div className="article__content" style={{ backgroundColor: 'var(--appBar-bg)', color: 'var(--appBar-text)'}}>
                  <Typography style={{ fontSize: '20px' }}>
                    {post.frontmatter.title}
                  </Typography>
                  <div className="article_role_play">
                    <div className="article_owner">
                      <img src={authorPic.src} alt={post.frontmatter.author} aria-label={post.frontmatter.author} className="author__pic"/>
                    </div>
                    <div className="article__profile">
                      <span className="article__name">{post.frontmatter.author}</span>
                      <div>
                        <span className="article__meta" style={{ color: 'var(--appBar-text)'}}> 
                          {post.frontmatter.date} · {post.timeToRead} min read 
                        </span>
                      </div>
                    </div>
                  </div>
                  <Typography variant="subtitle1">
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                  </Typography>
                    <Reaction path={post.path} />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="md">
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} sm={9} style={{ padding: 0, margin: '30px auto' }}>
              <div className="content_writer" style={{ backgroundColor: 'var(--appBar-bg)', color: 'var(--appBar-text)'}}>
                <Author 
                  src={authorPic.src} 
                  name={post.frontmatter.author} 
                  date={post.frontmatter.date} 
                  timeToRead={post.timeToRead} 
                />
              </div>
            </Grid>
          </Grid>
        </Container>

      
       
        <Typography variant="h6" style={{ margin: '20px auto', color: 'var(--appBar-text)'}}>
          Awesome articles
        </Typography>

        <div className="other_stories">

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
    
        </div>
      </main>
    </Master>
  )
}

export const query = graphql `
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        path
        author
        authorPic {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
        date(formatString: "MMM DD")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
      timeToRead
    }
    allMarkdownRemark(limit: 3, sort: {fields: frontmatter___date, order: ASC}){
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

