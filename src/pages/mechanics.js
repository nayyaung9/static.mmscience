import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { Helmet } from "react-helmet"
import { Badge } from 'reactstrap';
import '../styles/global.css'

export default ({ data }) => {
  return (
    <Layout>
      <Helmet title={data.site.siteMetadata.title} />

      <h4>{data.allMarkdownRemark.totalCount} posts</h4>

      <div className="row">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="col-md-4 wiki__article">
             <div key={node.id} className="blog__post__list">
              <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
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
                  <Badge color="success">{node.frontmatter.tags}</Badge> <br />
                  <span>{node.frontmatter.date}</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
     </div>
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
  allMarkdownRemark(filter: {frontmatter: {tags:{eq: "Mechanics"}}}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
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