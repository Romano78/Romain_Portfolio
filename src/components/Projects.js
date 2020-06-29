import React from "react"
import Title from "./Title"
import Project from "./Project"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Projects = ({ projects, title, showLinkProject, showLinkPage }) => {
  return (
    <>
      <section className="section projects" id="projects">
        <Title title={title} />
        <div className="section-center projects-center">
          {projects.map((project, index) => {
            return <Project key={project.id} index={index} {...project} />
          })}
        </div>
        {(showLinkProject && (
          <AniLink cover bg="#2caeba" to="/projects" className="btn center-btn">
            More Projects
          </AniLink>
        )) ||
          (showLinkPage && (
            <AniLink cover bg="#2caeba" to="/" className="btn center-btn">
              Back Home
            </AniLink>
          ))}
      </section>
    </>
  )
}

export default Projects
