import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Img from 'gatsby-image'
import { Helmet } from "react-helmet"
import '../styles/global.css'

export default ({data}) => {
  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <Helmet title={`MM Science | ${post.frontmatter.title}`} />
      <div className="row">
        <div className="col-md-8">
          <div className="article">
            <Img fluid={featuredImgFluid}/>
            <div className="article__content">
              <h1>{post.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

