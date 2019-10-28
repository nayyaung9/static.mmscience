import React from "react"
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Badge } from 'reactstrap';
import { Helmet } from "react-helmet"
import Img from 'gatsby-image'
import Typography from '@material-ui/core/Typography';

import Layout from "../components/layout"
import Author from '../assets/mmscience.jpg'

import '../styles/global.css'

export default ({data}) => {

  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>

      <Helmet title={`MM Science | ${post.frontmatter.title}`} />
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 singal_content">
          <div className="article">
            <Img fluid={featuredImgFluid} loading="lazy" />
            <div className="article__content">
              <h2>{post.frontmatter.title}</h2>
              <div className="article_role_play">
                <div className="article_owner">
                  <img src={Author} alt="Nay Yaung Lin Lakk" className="author__pic"/>
                </div>
                <div className="article__profile">
                  <span className="article__name">MM Science</span>
                  <div>
                    <span className="article__meta"> 
                      {post.frontmatter.date} · {post.timeToRead} min read 
                    </span>
                  </div>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>

      <Typography variant="body2">
        Awesome articles
      </Typography>
      <div className="other_stories">
        <div className="row">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="col-md-4 wiki__article" key={node.id}>
            <div className="blog__post__list">
              <div className="featured__image">
                <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} className="content__image"/>
              </div>
              <div className="content__spaces">
                <Link
                  to={node.fields.slug}
                  css={css`
                    text-decoration: none;
                    color: inherit;
                `}>
                  <h5 className="content__header"> 
                    {node.frontmatter.title}
                  </h5>
                  <Typography paragraph style={{ margin: '0'}}>{node.excerpt}</Typography>
                </Link>
                 <div className="article__label"> 
                    { node.frontmatter.tags.length > 1 
                      ? <Badge color="success">{node.frontmatter.tags.join(' ')}</Badge>
                      : <Badge color="success">{node.frontmatter.tags}</Badge>
                    }
                  </div>
                 <span className="article__meta"> 
                    {node.frontmatter.date} · {node.timeToRead} min read 
                  </span>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

    </Layout>
  )
}

export const query = graphql `
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
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
    allMarkdownRemark(limit: 3, sort: {order: DESC, fields: frontmatter___tags}) {
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

