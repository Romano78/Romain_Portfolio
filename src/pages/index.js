import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import About from "../components/About"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Jobs />
      <Projects
        projects={projects}
        title="featured projects"
        showLinkProject
        showLinkPage
      />
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
