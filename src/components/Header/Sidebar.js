import React from "react"
import Links from "../../constants/links"
import SocialLinks from "../../constants/socialLinks"
import { FaTimes } from "react-icons/fa"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Sidebar = ({ toggleSideBar, isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? `show-sidebar` : ""}`}>
      <button className="close-btn" onClick={toggleSideBar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <div onClick={toggleSideBar}>
          <Links styleClass={`${isOpen ? "sidebar-links" : ""}`}></Links>
        </div>
        <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  )
}

export default Sidebar
