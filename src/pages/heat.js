import React from 'react'
import { Link, graphql } from 'gatsby'
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
        >  
          mmscience
        </h1>

        <h4>{data.allMarkdownRemark.totalCount} posts</h4>

          {data.allMarkdownRemark.edges.map(({ node }) => (

            <div 
              key={node.id}
              css={css`
                box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.1);
                padding: 1rem 1rem;
                border-radius: .5em;
                cursor: pointer;
                margin-bottom: 20px;
                background-color: #fff;
            `}>
              <Link
                to={node.fields.slug}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
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
              </Link>
            </div>
          ))}
      </div>
    </Layout>
  )
}

export const query = graphql `
query {
  allMarkdownRemark(filter: {frontmatter: {tags:{eq: "Heat"}}}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          tags
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