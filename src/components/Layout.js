import React from "react"
// import "../css/main.css"
import Navbar from "./Header/Navbar"
import Sidebar from "./Header/Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
