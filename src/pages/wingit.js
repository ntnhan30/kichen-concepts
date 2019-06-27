import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

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
      bowlFillIt: file(relativePath: { eq: "WingIt_BowlFillIt.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bowlFillItwhite: file(
        relativePath: { eq: "WingIt_Bowl_Stripes_FillItwhite.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Sauce_SuperSpicy: file(
        relativePath: { eq: "WingIt_Sauce_SuperSpicy.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Sauce_Sweet: file(relativePath: { eq: "WingIt_Sauce_Sweet.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      LogoWhite: file(relativePath: { eq: "DHConcepts_Logo_White.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const parallaxLeft = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 0,
          endValue: 150,
          property: "translateX",
        },
      ],
    },
  ]

  const parallaxRight = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 150,
          endValue: 0,
          property: "translateX",
        },
      ],
    },
  ]

  return (
    <Layout>
      <Head title="WingIt" />
      <section className={wingItStyles.upper}>
        <div className={wingItStyles.left}>
          <Plx className={wingItStyles.Sauce_SuperSpicyContainer}>
            <Img
              className={wingItStyles.Sauce_SuperSpicy}
              fluid={data.Sauce_SuperSpicy.childImageSharp.fluid}
            />
          </Plx>
          <Plx  parallaxData={parallaxLeft} className={wingItStyles.bowlFillItContainer}>
            <Img
              className={wingItStyles.bowlFillIt}
              fluid={data.bowlFillIt.childImageSharp.fluid}
            />
          </Plx>
          <Plx   className={wingItStyles.Sauce_SweetContainer}>
            <Img className={wingItStyles.Sauce_Sweet} fluid={data.Sauce_Sweet.childImageSharp.fluid} />
          </Plx>
        </div>
        <div className={wingItStyles.middle}>
          <div className={wingItStyles.wingItContainer}>
            <Img fluid={data.wingit.childImageSharp.fluid} />
          </div>
          <div>
          <h2>
            Wing It! is succulent <span>Korean fried chicken</span>  dishes delivered
            straight to your door.
          </h2>
          <p>
            We also deliver a whole lot of love beyond our <span>delicious chicken 
            wings, strips and sauces </span> . Our high-quality packaging is designed to
            keep food <span> crispy and hot upon arrival </span> , while Wing It! wet wipes give
            you clean and fresh hands after your <span>juicy experience. </span> 
          </p>
          </div>
        </div>
        <div className={wingItStyles.right}>
          <Plx  parallaxData={parallaxRight} className={wingItStyles.bowlFillItwhiteContainer}>
            <Img className={wingItStyles.bowlFillItwhite} fluid={data.bowlFillItwhite.childImageSharp.fluid} />
          </Plx>
          <Plx  className={wingItStyles.Sauce_SuperSpicyContainer}>
            <Img className={wingItStyles.Sauce_SuperSpicy} fluid={data.Sauce_SuperSpicy.childImageSharp.fluid} />
          </Plx>
          <Plx  parallaxData={parallaxRight} className={wingItStyles.bowlFillItContainer}>
            <Img className={wingItStyles.bowlFillIt} fluid={data.bowlFillIt.childImageSharp.fluid} />
          </Plx>
        </div>
      </section>
      <section className={wingItStyles.below}>
    <p>
    In the mood for different tasty food, like poke bowls or healthy wraps?  Check out other yummy cuisines available:  
    </p>
    <div className={wingItStyles.concepts}>
        <ul>
            <li>
            <Link to="/">
                  <Img fluid={data.poked.childImageSharp.fluid} />
                </Link>

            </li>
            <li>
            <Link to="/">
                  <Img fluid={data.noah.childImageSharp.fluid} />
                </Link>
            </li>
        </ul>
    </div>
      </section>
      <section className={wingItStyles.conceptsInfo}>
        <Link to="/">
      <div className={wingItStyles.LogoWhiteContainer}>
            <Img className={wingItStyles.LogoWhite} fluid={data.LogoWhite.childImageSharp.fluid} />
          </div>
        </Link>
        <p>
        Wing It! is part of the <span>Delivery Hero Concepts </span> Delivery Hero Concepts family -  find out more about us <span>here.</span>
        </p>
      </section>

    </Layout>
  )
}

export default WingIt
