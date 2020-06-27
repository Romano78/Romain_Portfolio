import React from "react"
import Title from "./Title"
import Project from "./Project"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Projects = ({ projects, title, showLink }) => {
  return (
    <>
      <section className="section projects" id="projects">
        <Title title={title} />
        <div className="section-center projects-center">
          {projects.map((project, index) => {
            return <Project key={project.id} index={index} {...project} />
          })}
        </div>
        {showLink && (
          <AniLink cover bg="#2caeba" to="/projects" className="btn center-btn">
            More Projects
          </AniLink>
        )}
      </section>
    </>
  )
}

export default Projects
