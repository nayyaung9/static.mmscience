import React from "react"
import Layout from '../components/layout'
import { StaticQuery } from "gatsby"
import { graphql } from "gatsby"
import SearchList from "./searchList"

const Search = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }, 
          limit: 6,
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                author
                authorPic {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
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
              excerpt(truncate: true)
              timeToRead
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <header style={{ marginTop: '80px'}}>
          <SearchList searchIndex={data.siteSearchIndex.index} />
        </header>
      </Layout>
    )}
  />
)

export default Search