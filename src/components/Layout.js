import React from "react"
// import "../css/main.css"
import Navbar from "./Header/Navbar"
import Sidebar from "./Header/Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleSideBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSideBar={toggleSideBar} />
      <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
