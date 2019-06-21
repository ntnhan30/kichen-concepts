import React from "react";
import {Link, graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image"


import Layout from '../components/layout';


const IndexPage = () => {
    
    const data = useStaticQuery(graphql`
    query { 
        site{
            siteMetadata{    
                    title
            }
        }
        file(relativePath: { eq: "01-04.jpg" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
    }
    
    `);


    return(
        <Layout>
            <h1>{data.site.siteMetadata.title}</h1>
            <h2> <Link to="/wingit">WingIt</Link></h2>
            <Img fixed={data.file.childImageSharp.fixed} />
        </Layout>
    )
}

export default IndexPage

// import React from "react"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"

// export default ({ data }) => (
//   <div>
//     <h1>Hello gatsby-image</h1>
//     <Img fixed={data.file.childImageSharp.fixed} />
//   </div>
// )

// export const query = graphql`
//   query {
    // file(relativePath: { eq: "01-04.jpg" }) {
    //   childImageSharp {
    //     fixed(width: 125, height: 125) {
    //       ...GatsbyImageSharpFixed
    //     }
    //   }
    // }
//   }
// `