import React from "react"
import Layout from '../components/layout'
import { StaticQuery, Link } from "gatsby"
import { graphql } from "gatsby"

import SearchList from "./searchList"
import Suggestes from './suggestes'

const Search = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
              id
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <header style={{ marginTop: '80px'}}>
          <SearchList searchIndex={data.siteSearchIndex.index} />
          <Suggestes suggestList={data.allMarkdownRemark.edges} />
        </header>
      </Layout>
    )}
  />
)

export default Search