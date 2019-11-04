// import React from 'react'
// import { graphql } from 'gatsby'
// import SearchList from '../pages/searchList'

// export default ({ data }) => {
//   return (
//     <div>
//         {data.allMarkdownRemark.edges.map(({ node }) => (
//           <h1>{node.frontmatter.title}</h1>

//         ))}
//         <SearchList features={data.allMarkdownRemark.edges} />
//     </div>
//   )
// }

// export const query = graphql`
// query {
//   allMarkdownRemark {
//     edges {
//       node {
//         frontmatter {
//           title
//         }
//       }
//     }
//   }
// }
// `