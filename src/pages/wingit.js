import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';

import Img from "gatsby-image"
import Head from "../components/head"
import Plx from "react-plx"

import Layout from "../components/layout"
import wingItStyles from "./wingit.module.scss"


const WingIt = () => {

    const data = useStaticQuery(graphql`
    query {
      
      wingit: file(relativePath: { eq: "WingIt_Logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      noah: file(relativePath: { eq: "Noahs_Logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      poked: file(relativePath: { eq: "Poked_Logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 0,
          endValue: 150,
          property: "translateY",
        },
      ],
    },
  ]

    
    return (
     <Layout>
     <Head title="WingIt" />
     <section className={wingItStyles.upper}>
         upper
     </section>
     <section className="below">

     </section>

        {/* <h1>WingIt</h1>
        <Img fluid={data.wingit.childImageSharp.fluid} />

        <h2><Link to="/">Home Page</Link></h2> */}
    </Layout>
    )
}

export default WingIt