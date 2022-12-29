module.exports = {
  siteMetadata: {
    title: "Explore the Planets",
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `planets`,
        path: `${__dirname}/planets`,
      }
    },
    "gatsby-plugin-mdx",
  ],
}
