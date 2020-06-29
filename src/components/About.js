import React from "react"
import Title from "./Title"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

const aboutQuery = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        info
        strapiId
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about_stack {
          id
          stack_title
        }
      }
    }
  }
`

const About = () => {
  const aboutData = useStaticQuery(aboutQuery)
  const {
    allStrapiAbout: { nodes: about },
  } = aboutData

  console.log(about[0])

  return (
    <section className="section-about bg-grey" id="about">
      <div className="section-center about-center">
        <Image
          fluid={about[0].image.childImageSharp.fluid}
          className="about-img"
        />
        <article className="about-text">
          <Title title="about me" />
          <p>{about[0].info}</p>
          <div className="about-stack">
            {about[0].about_stack.map(stack => {
              return <span key={stack.id}>{stack.stack_title}</span>
            })}
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
