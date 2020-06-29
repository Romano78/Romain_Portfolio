import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEO title="all projects page" descrption="this is the projects page" />
      <section className="projects-page">
        <Projects
          projects={projects}
          title="All Projects"
          showLinkPage
          style={{ marginTop: "25px" }}
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        title
        url
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featured
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

export default ProjectsPage
