import React from "react"
import Layout from '../components/layout'
import { graphql } from "gatsby"
import SearchList from "./searchList"
import SEO from '../components/SEO'

const Search = ({ data }) => {
  return(
    <Layout>
      <SEO />
      <header style={{ marginTop: '80px'}}>
        <SearchList 
          searchIndex={data.siteSearchIndex.index}  
          words={data.allMarkdownRemark.group}
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
    group(field: frontmatter___searchKeywords) {
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