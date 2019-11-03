
module.exports = {
  pathPrefix: "/mmscience",
  siteMetadata: {
    title: `MM Science`,
    description:
      "MMScience is an online library website for Myanmar High School Students.",
    url: "https://mmscience-2019.firebaseapp.com", // No trailing slash allowed!
    image: "./src/assets/mmscience0.jpg", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MM Science`,
        short_name: `MM Science`,
        description: `MMScience is an online library website for Myanmar Education`,
        "icons": [
          {
            "src": "/icons/small-app-icon.jpg",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "/icons/big-app-icon.jpg",
            "type": "image/png",
            "sizes": "512x512"
          }
        ],
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#2d2d2d`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      // Blank options, equivalent to string-only plugin
      options: {
        precachePages: [`/wiki/*`, `/discover/*`],
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            path: node => node.frontmatter.path,
            author: node => node.frontmatter.author
          },
        },
        // Optional filter to limit indexed nodes
        filter: (node, getNode) =>
          node.frontmatter.tags !== 'exempt',
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-dark-mode`
  ],
}