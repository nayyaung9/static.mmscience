// import React from "react"
// import { Link, useStaticQuery, graphql } from 'gatsby'
// import { css } from '@emotion/core'
// import { Helmet } from 'react-helmet'

// import Grid from '@material-ui/core/Grid'
// import Button from '@material-ui/core/Button'

// import Layout from '../components/layout'
// import HomePage from '../components/home'
// import TagBar from '../components/discover'

// import FeatureImage from '../components/posts/featureImage'
// import Author from '../components/posts/author'
// import Content from '../components/posts/content'

// const Index = () => {
//   const tags = useStaticQuery(graphql`
//     query {
//       allMarkdownRemark {
//         group(field: frontmatter___tags) {
//           fieldValue
//           totalCount
//         }
//       }
//     }
//   `)
//   const data = useStaticQuery(graphql`
//     query {
//       site {
//         siteMetadata {
//           title
//           description
//           image
//           url
//         }
//       }
//       allMarkdownRemark(
//         sort: { fields: [frontmatter___date], order: DESC }, 
//         limit: 6
//       ) {
//         group(field: frontmatter___tags) {
//           fieldValue
//           totalCount
//         }
//         totalCount
//         edges {
//           node {
//             id
//             frontmatter {
//               path
//               title
//               author
//               authorPic {
//                   childImageSharp {
//                     fluid(maxWidth: 800) {
//                       ...GatsbyImageSharpFluid
//                     }
//                   }
//                 }
//                 date(fromNow: true)
//                 tags
//                 featuredImage {
//                   childImageSharp {
//                     fluid(maxWidth: 800) {
//                       ...GatsbyImageSharpFluid
//                     }
//                   }
//                 }
//               }
//               fields {
//                 slug
//               }
//               excerpt
//               timeToRead
//             }
//           }
//         }
//       }
//     `)
//     return (
//       <React.Fragment>
//         <Layout>

//           <main style={{ marginTop: '80px'}}>

//           <Helmet title="MM Science | An Online Library website for Myanmar Education" > 
//             <html lang="en" />
//             <meta name="description" content="A Online Library website for Myanmar Educatio" />
//             <meta name="image" content="/src/assets/mmscience0.jpg" />
//           </Helmet> 

//           <Grid container spacing={3}>
//             <TagBar tags={tags.allMarkdownRemark.group}/>
//           </Grid>
       
//           <Grid container spacing={3} 
//             direction="row"
//             justify="center"
//             alignItems="stretch"
//             css={css`
//               padding-top: 10px;
//             `}>
         
//             {data.allMarkdownRemark.edges.map(({ node }) => (
                
//               <Grid item xs={12} sm={4} 
//                 key={node.id} 
//                 css={css`
//                   @media screen and (max-width: 700px) {
//                     padding: 0 12px !important;
//                     margin-bottom: 20px !important;
//                   }        
//               `}>
//                 <div 
//                   className="blog__post__items" 
//                   style={{ height: '100%', backgroundColor: 'var(--appBar-bg)' }}
//                 >
//                   <FeatureImage 
//                     src={node.frontmatter.featuredImage.childImageSharp.fluid}
//                     alt={node.frontmatter.title} 
//                   />
//                   <div className="author_field">
//                     <Author 
//                       src={node.frontmatter.authorPic.childImageSharp.fluid.src} 
//                       name={node.frontmatter.author} 
//                       date={node.frontmatter.date} 
//                       timeToRead={node.timeToRead} 
//                     />
//                   </div>
//                   <Content 
//                     to={node.fields.slug}
//                     title={node.frontmatter.title}
//                     tags={node.frontmatter.tags}
//                   />
//                 </div>
//               </Grid>
              
//             ))}
//           </Grid>
//           <div css={css`
//             padding: 30px;
//             text-align: center;
//           `}>
//             <Button variant="outlined" style={{ textAlign: 'center', backgroundColor: 'var(--appBar-bg)' }}>
//               <Link to='/wiki/' alt="feed" style={{ color: 'var(--appBar-text)' }}>
//                 read more
//               </Link>
//             </Button>
//           </div>
          
//         </main>
        
//         </Layout>
//         <div css={css`
//           margin-top: 20px;
//         `}>
//           <HomePage />
//         </div>
//       </React.Fragment>
//     )
// };

// export default Index;

import React from "react"
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Helmet } from 'react-helmet'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Layout from '../components/layout'
import HomePage from '../components/home'
import TagBar from '../components/discover'

import FeatureImage from '../components/posts/featureImage'
import Author from '../components/posts/author'
import Content from '../components/posts/content'

export default ({ data }) => {
  return (
    <React.Fragment>
      <Layout>

        <main style={{ marginTop: '80px'}}>

        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
          { name: 'description', content: 'An Online Library website for Myanmar Education' },
          { name: 'keywords', content: 'reactjs, pwa, gatsbyjs' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        
        <Grid container spacing={3}>
          <TagBar tags={data.allMarkdownRemark.group} />
        </Grid>
      
        <Grid container spacing={3} 
          direction="row"
          justify="center"
          alignItems="stretch"
          css={css`
            padding-top: 10px;
          `}>
        
          {data.allMarkdownRemark.edges.map(({ node }) => (
              
            <Grid item xs={12} sm={4} 
              key={node.id} 
              css={css`
                @media screen and (max-width: 700px) {
                  padding: 0 12px !important;
                  margin-bottom: 20px !important;
                }        
            `}>
              <div 
                className="blog__post__items" 
                style={{ height: '100%', backgroundColor: 'var(--appBar-bg)' }}
              >
                <FeatureImage 
                  src={node.frontmatter.featuredImage.childImageSharp.fluid}
                  alt={node.frontmatter.title} 
                />
                <div className="author_field">
                  <Author 
                    src={node.frontmatter.authorPic.childImageSharp.fluid.src} 
                    name={node.frontmatter.author} 
                    date={node.frontmatter.date} 
                    timeToRead={node.timeToRead} 
                  />
                </div>
                <Content 
                  to={node.fields.slug}
                  title={node.excerpt}
                  tags={node.frontmatter.tags}
                />
              </div>
            </Grid>
            
          ))}
        </Grid>
        <div css={css`
          padding: 30px;
          text-align: center;
        `}>
          <Button variant="outlined" style={{ textAlign: 'center', backgroundColor: 'var(--appBar-bg)' }}>
            <Link to='/wiki/' alt="feed" style={{ color: 'var(--appBar-text)' }}>
              read more
            </Link>
          </Button>
        </div>
        
      </main>
      
      </Layout>
      <div css={css`
        margin-top: 20px;
      `}>
        <HomePage />
      </div>
    </React.Fragment>
  )
};

export const query = graphql `
query {
  site {
    siteMetadata {
      title
      description
      image
      url
    }
  }
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    limit: 6
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
          path
          title
          tags
          author
          authorPic {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          date(fromNow: true)
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
`;