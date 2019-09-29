import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"
import { css } from '@emotion/core'

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet title={title} />
    <div>
      <h1>Discover</h1>
        <div className="row">

          {group.map(tag => (
            <div className="col-md-4">
              <div 
                key={tag.fieldValue}
                css={css`
                box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.1);
                padding: 1rem 1rem;
                border-radius: .5em;
                cursor: pointer;
                margin-bottom: 20px;
                background-color: #fff;
            `}>
              <Link 
                to={`/${kebabCase(tag.fieldValue)}/`}
                css={css`
                  color: #1ca086;
                  text-decoration: none;
              `}
              >
                {tag.fieldValue} ({tag.totalCount})
              </Link>      
            </div>
            </div>
          ))}

       
        </div>
    </div>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`