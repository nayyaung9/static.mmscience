import React from "react"
import Layout from '../components/layout'
import { StaticQuery, Link } from "gatsby"
import { graphql } from "gatsby"

import SearchList from "./searchList"

const Search = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
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