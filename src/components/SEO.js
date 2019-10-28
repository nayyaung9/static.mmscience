// import React from "react"
// import { Helmet } from "react-helmet"
// import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

// const SEO = ({ title, description, image, url }) => (
//   <StaticQuery
//     query={query}
//     render={({
//       site: {
//         siteMetadata: {
//           title,
//           description,
//           url,
//           image,
//         }
//       }
//     }) => {
//       const seo = {
//         title: title,
//         description: description,
//         image: `${siteUrl}${image}`,
//         // url: `${siteUrl}${pathname || '/'}`,
//       }

//       return (
//         <React.Fragment>
//            <Helmet title={seo.title} titleTemplate={titleTemplate}>
//             <meta name="description" content={seo.description} />
//             <meta name="image" content={seo.image} />
//             {seo.url && <meta property="og:url" content={seo.url} />}
//             {(article ? true : null) && (
//               <meta property="og:type" content="article" />
//             )}
//             {seo.title && <meta property="og:title" content={seo.title} />}
//             {seo.description && (
//               <meta property="og:description" content={seo.description} />
//             )}
//             {seo.image && <meta property="og:image" content={seo.image} />}
//             <meta name="twitter:card" content="summary_large_image" />
//             {twitterUsername && (
//               <meta name="twitter:creator" content={twitterUsername} />
//             )}
//             {seo.title && <meta name="twitter:title" content={seo.title} />}
//             {seo.description && (
//               <meta name="twitter:description" content={seo.description} />
//             )}
//             {seo.image && <meta name="twitter:image" content={seo.image} />}
//           </Helmet>
//         </React.Fragment>
//       )
//     }}
//   />
// )

// export default SEO

// SEO.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   image: PropTypes.string,
//   url: PropTypes.string,
//   article: PropTypes.bool,
// }

// SEO.defaultProps = {
//   title: null,
//   description: null,
//   image: null,
//   url: null,
//   article: false,
// }