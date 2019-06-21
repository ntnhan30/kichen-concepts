
const path = require(`path`);



module.exports = {
  siteMetadata: {
    title: 'Delivery Hero Concepts'
  },
plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.join(__dirname, `src`, `images`),
    },
  },
  'gatsby-plugin-sass',
  `gatsby-plugin-sharp`, 
  `gatsby-transformer-sharp`
]
}
