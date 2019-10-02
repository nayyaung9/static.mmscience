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
      <h4>{data.allMarkdownRemark.totalCount} posts</h4>

      <div className="reading_type_style">
        <ReadType type="select reading style"/>
      </div>
      

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
                  <span className="article__meta"> 
                    {node.frontmatter.date} · {node.timeToRead} min read 
                  </span>
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