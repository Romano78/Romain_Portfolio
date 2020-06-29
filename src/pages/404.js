import React from "react"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page main">
        <div className="error-container">
          <h1>opps. Looks like there is nothing here</h1>
          <AniLink fade to="/" className="btn">
            Back Home
          </AniLink>
        </div>
      </main>
    </Layout>
  )
}

export default Error
