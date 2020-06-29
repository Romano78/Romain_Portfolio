import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"
import SEO from "../components/SEO"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="this is our home page" />
      <Hero />
      <About />
      <Jobs />
      <Projects
        projects={projects}
        title="featured projects"
        showLinkProject
        showLinkPage
      />
      <Contact />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        title
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featured
        url
        github
        id
        component_stack {
          id
          stack_title
        }
      }
    }
  }
`

// ...GatsbyImageSharpFluid
