
module.exports = {
  pathPrefix: "/mmscience",
  siteMetadata: {
    title: `MM Science`,
    siteUrl: `https://mmscience-2019.firebaseapp.com`,
    description: "MMScience is an online library website for Myanmar High School Students.",
    url: "https://mmscience-2019.firebaseapp.com", 
    image: "./public/icons/MMsciIcon512.png", 
  },
  plugins:[
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
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
            "src": "/icons/MMsciIcon192.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "/icons/MMsciIcon512.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ],
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#2d2d2d`,
        display: `standalone`,
        legacy: true,
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
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-embed-video",
          options: {
            width: 800,
            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
            height: 400, // Optional: Overrides optional.ratio
            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
          }
        }
        ]
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
      host: `https://mmscience-2019.firebaseapp.com`,
      sitemap: `https://mmscience-2019.firebaseapp.com/sitemap.xml`,
      policy: [{ userAgent: '*', disallow: '' }],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-dark-mode`,
    `gatsby-transformer-sharp`
  ],
}