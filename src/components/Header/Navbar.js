import React from "react"
import logo from "../../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../../constants/links"
import styles from "../../css/navbar.module.css"
const Navbar = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.navCenter}>
          <div className={styles.navHeader}>
            <img src={logo} alt="logo" />
            <button type="button" className={styles.toggleBtn}>
              <FaAlignRight />
            </button>
          </div>
          <PageLinks styleClass={styles.navLinks} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
