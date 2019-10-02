import React from "react"
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Badge } from 'reactstrap';
import { Helmet } from "react-helmet"
import Img from 'gatsby-image'

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
            <Img fluid={featuredImgFluid}/>
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

      <div className="other_stories">
        <div className="row">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="col-md-4" key={node.id}>
              <div 
                css={css`
                  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
                  border-radius: .25rem;
                  cursor: pointer;
                  margin-bottom: 20px;
                  background-color: #fff;
              `}>
                <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} className="content__image"/>
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
                  </Link> 

                  { node.frontmatter.tags.length > 1 
                    ? <Badge color="success">{node.frontmatter.tags.join(' ')}</Badge>
                    : <Badge color="success">{node.frontmatter.tags}</Badge>
                  } <br />
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
            }
          }
        }
      }
      timeToRead
    }
    allMarkdownRemark(limit: 3) {
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

