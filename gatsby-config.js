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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
  ],
}