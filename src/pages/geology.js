import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/layout'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      
        <h4>{data.allMarkdownRemark.totalCount} posts</h4>

        <div className="row">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div class="col-md-4">
            <div 
              key={node.id}
              css={css`
                box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
                padding: 1rem 1rem;
                border-radius: .5em;
                cursor: pointer;
                margin-bottom: 20px;
                background-color: #fff;
                height: 200px;
            `}>
              <Link
                to={node.fields.slug}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <h3> 
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
            </div>
          ))}
     </div>
    </Layout>
  )
}

export const query = graphql `
query {
  allMarkdownRemark(filter: {frontmatter: {tags:{eq: "Geology"}}}) {
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