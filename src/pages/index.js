import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Head from "../components/head";

import Layout from "../components/layout";
import indexStyles from "./index-page.module.scss";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      dhLogo: file(relativePath: { eq: "DHConcepts_Logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bowl: file(relativePath: { eq: "NGK_Bowl.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rectangle: file(relativePath: { eq: "Rectangle.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oval: file(relativePath: { eq: "Oval.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blue: file(relativePath: { eq: "blue.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Home" />
      <div className={indexStyles.upper}>
        <div className={indexStyles.text}>
          <div className={indexStyles.logo}>
            <Img fluid={data.dhLogo.childImageSharp.fluid} />
          </div>

          <h1>Food you crave, delivered to  your door.</h1>
          <p>
            Delivery Hero Concepts is a collective of virtual restaurants fully
            owned, developed and managed by Delivery Hero, implemented and
            operated through carefully selected restaurants.
          </p>
        </div>
        <div className={indexStyles.bowlContainer}>
          <div className={indexStyles.bowl}>
            <Img fluid={data.bowl.childImageSharp.fluid} />
          </div>
          <div className={indexStyles.rectangle}>
            <Img fluid={data.rectangle.childImageSharp.fluid} />
          </div>
        </div>
      </div>
      <div className={indexStyles.below}>
        <div className={indexStyles.oval}>
          <Img fluid={data.oval.childImageSharp.fluid} />
        </div>
        <div className={indexStyles.concepts}>

        </div>
        <div className={indexStyles.blue}>
          <Img fluid={data.blue.childImageSharp.fluid} />
        </div>
      </div>
    </Layout>
    )}

export default IndexPage
