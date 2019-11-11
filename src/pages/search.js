import React from "react"
import Layout from '../components/layout'
import { graphql } from "gatsby"
import SearchList from "./searchList"

const Search = ({ data }) => {
  return(
    <Layout>
      <header style={{ marginTop: '80px'}}>
        <SearchList 
          searchIndex={data.siteSearchIndex.index}  
          words={data.allMarkdownRemark}
        />
      </header>
    </Layout>
  )
}

export default Search

export const query = graphql`
query SearchIndexQuery {
  siteSearchIndex {
    index
  }
  allMarkdownRemark {
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
          searchKeywords
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
`