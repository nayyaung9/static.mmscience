import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import Layout from '../components/layout'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
          mmscience
        ></h1>
        <h4>{data.allMarkdownRemark.totalCount} posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            > 
              {node.frontmatter.title}{" "} <br />
              <span
                css={css`
                  color: #bbb;
                `}
              >
                {node.frontmatter.date} {node.frontmatter.tags} 
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql `
query {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          tags
        }
        excerpt
      }
    }
  }
}
`