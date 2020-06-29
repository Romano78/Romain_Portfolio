import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import styles from "../css/hero.module.css"

const heroQuery = graphql`
  {
    hero: file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    hero: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(heroQuery)
  return (
    <header className="hero">
      <div className="hero-center section-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Romain</h1>
            <p>
              Full Stack Web Developer. Looking for a job opportunity in
              Montreal.{" "}
            </p>
            <AniLink cover bg="#2caeba" to="/contact" className="btn">
              Contact Me
            </AniLink>
          </div>
          <SocialLinks />
        </article>
        <Image fluid={fluid} className={styles.heroImg} />
      </div>
    </header>
  )
}

export default Hero
