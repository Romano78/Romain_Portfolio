import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "#about",
  },
  {
    id: 3,
    text: "services",
    url: "#services",
  },
  {
    id: 4,
    text: "projects",
    url: "#projects",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <AniLink fade to={link.url}>
        {link.text}
      </AniLink>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
