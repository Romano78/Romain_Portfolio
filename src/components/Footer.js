import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <SocialLinks />
      <h4>
        copyright&copy;{new Date().getFullYear()}
        <span style={{ paddingLeft: "10px" }}>WebDev</span> all right reserved
      </h4>
    </footer>
  )
}

export default Footer
