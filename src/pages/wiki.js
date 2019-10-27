import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Helmet } from "react-helmet"
import Layout from '../components/layout'
import ReadType from '../components/read-type'
import { Badge } from 'reactstrap';
import Img from 'gatsby-image'
import '../styles/global.css'

export default ({ data }) => {
  return (
    <Layout>
      <Helmet title={data.site.siteMetadata.title} />

      <div className="reading_type_style">
        <ReadType type="select reading style"/>
      </div>
      

      <div className="row">

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="col-md-4 wiki__article" key={node.id}>
            <div className="blog__post__list">
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
                  <span className="article__meta"> 
                    {node.frontmatter.date} · {node.timeToRead} min read 
                  </span> <br />
                </Link>
                { node.frontmatter.tags.length > 1 
                  ? <Badge color="success">{node.frontmatter.tags.join(' ')}</Badge>  
                  : <Badge color="success">{node.frontmatter.tags}</Badge>
                }
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