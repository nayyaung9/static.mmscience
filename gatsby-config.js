module.exports = {
  pathPrefix: "/mmscience",
  siteMetadata: {
    title: `MM Science`,
    description:
      "MMScience is a online library website for Myanmar High School Students.",
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
        description: `MMScience is a online library website for Myanmar Education`,
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
        theme_color: `#fff`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-dark-mode`
  ],
}