import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const jobsQuery = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: ASC }) {
      nodes {
        strapiId
        company
        company_short_name
        date
        position
        info {
          name
          id
        }
      }
    }
  }
`

const Jobs = () => {
  const jobsData = useStaticQuery(jobsQuery)
  const {
    allStrapiJobs: { nodes: jobs },
  } = jobsData

  const [value, setValue] = React.useState(0)

  const { company, date, info, position, company_short_name } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={job.strapiId}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {job.company_short_name}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {info.map(item => {
            return (
              <div className="job-desc" key={item.id}>
                <FaAngleDoubleRight className="job-icon" />
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
        <AniLink cover bg="#2caeba" to="#about" className="btn center-btn">
          Contact Me..
        </AniLink>
      </div>
    </section>
  )
}

export default Jobs
