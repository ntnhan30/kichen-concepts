
const path = require(`path`);



module.exports = {
  siteMetadata: {
    title: 'Delivery Hero Concepts'
  },
plugins: [
 
  {
    resolve: `gatsby-plugin-s3`,
    options: {
        bucketName: 'concepts.deliveryhero.com'
    },
},
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.join(__dirname, `src`, `images`),
    },
  },
  'gatsby-plugin-sass',
  `gatsby-plugin-sharp`, 
  `gatsby-transformer-sharp`,
  `gatsby-plugin-offline`
]
}
