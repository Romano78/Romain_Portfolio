import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        siteUrl
        siteTitle: title
        image
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)

  const { author, siteDesc, siteUrl, siteTitle, image } = site.siteMetadata
  return (
    <Helmet title={` ${title} | ${siteTitle}`} htmlAttribute={{ lang: "en" }}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
    </Helmet>
  )
}

export default SEO
