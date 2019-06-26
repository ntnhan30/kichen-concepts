import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import Head from "../components/head"
import Plx from "react-plx"

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

  const parallaxRectangle = [
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

  const parallaxOval = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 0,
          endValue: -150,
          property: "translateY",
        },
      ],
    },
  ]

  return (
    <Layout>
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
          <Plx
            parallaxData={parallaxRectangle}
            className={indexStyles.rectangleContainer}
          >
            <Img
              className={indexStyles.rectangle}
              fluid={data.rectangle.childImageSharp.fluid}
            />
          </Plx>
        </div>
      </section>

      <section className={indexStyles.below}>
      <Plx
          parallaxData={parallaxOval}
          className={indexStyles.ovalContainer}
        >
          <Img
            className={indexStyles.oval}
            fluid={data.oval.childImageSharp.fluid}
          />
        </Plx>

        <div className={indexStyles.conceptsContainer}>
          <div>
        <h2>Check out our concepts:</h2>
          </div>
        <div className={indexStyles.concepts}>  
            <ul>
              <li>
                <Link to="/">
                  <Img fluid={data.yumza.childImageSharp.fluid} />
                </Link>
              </li>
              <li>
                <Link to="/wingit">
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
        </div>
        <div>
        <p>
              We create amazing delivery experiences by giving you the food you
              want, whenever and wherever you want it! We ensure dishes are
              prepared and assembled as quickly as possible, meaning no extra
              waiting for you. To maintain a high quality service, we regularly
              check in on our restaurant partners to keep things running
              smoothly.
            </p>
        </div>

        </div>
        <div className={indexStyles.blueContainer}>
          <Img
            className={indexStyles.blue}
            fluid={data.blue.childImageSharp.fluid}
          />
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
