import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Img from 'gatsby-image'
import { Helmet } from "react-helmet"
import '../styles/global.css'
import Author from '../assets/mmscience.jpg'

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
  }
`

