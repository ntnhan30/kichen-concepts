import React from "react"
// import ReactDOM from 'react-dom'

import { Link, graphql, useStaticQuery } from "gatsby"
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import Img from "gatsby-image"
import Head from "../components/head"

import Layout from "../components/layout"
import indexStyles from "./index-page.module.scss"

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
      yumza: file(relativePath: { eq: "Yumza_Logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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

  return (
    <Layout>
    {/* <Parallax pages={2}> */}
      <Head title="Home" />
      <section className={indexStyles.upper}>
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
          <div  className={indexStyles.rectangleContainer} speed={-0.1} style={{ pointerEvents: 'none' }}>
              <Img className={indexStyles.rectangle} fluid={data.rectangle.childImageSharp.fluid} />
          </div>
        </div>
      </section>
      <section className={indexStyles.below}>
        <div className={indexStyles.ovalContainer}>
            <Img className={indexStyles.oval} fluid={data.oval.childImageSharp.fluid} />
        </div>
        <div className={indexStyles.conceptsContainer}>
          <div className={indexStyles.concepts}>
          <h2>Check out our concepts:</h2>
          <ul>
            <li>
              <Link to="/">
                <Img fluid={data.yumza.childImageSharp.fluid} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <Img fluid={data.wingit.childImageSharp.fluid} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <Img fluid={data.noah.childImageSharp.fluid} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <Img fluid={data.poked.childImageSharp.fluid} />
              </Link>
            </li>
          </ul>
          <p>
            We create amazing delivery experiences by giving you the food you
            want, whenever and wherever you want it! We ensure dishes are
            prepared and assembled as quickly as possible, meaning no extra
            waiting for you. To maintain a high quality service, we regularly
            check in on our restaurant partners to keep things running smoothly.
          </p>
          </div>
        </div>
        <div className={indexStyles.blueContainer}>
            <Img className={indexStyles.blue} fluid={data.blue.childImageSharp.fluid} />
        </div>
      </section>
    {/* </Parallax> */}
    </Layout>
  )
}

export default IndexPage
