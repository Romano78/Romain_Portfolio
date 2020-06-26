import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({
  description,
  title,
  image,
  github,
  component_stack,
  index,
  url,
}) => {
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {component_stack.map(stack => (
            <span key={stack.id}>{stack.stack_title}</span>
          ))}
        </div>
        <div className="project-links">
          {github ? (
            <a href={github}>
              <FaGithubSquare className="project-icon"></FaGithubSquare>
            </a>
          ) : (
            ""
          )}
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {}

export default Project
