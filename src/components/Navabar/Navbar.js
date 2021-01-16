import React from 'react'
// import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

const Navbar = ({showAcNav, setShowAcNav}) => {
  return (
    <nav>
      <div className={styles.navWrapper}>
        <h1 className={styles.navBrand}>CycleBooK</h1>
        <ul>
          <li className={styles.active}>Feed</li>
          <li>Liked</li>
          <li>Messages</li>
        </ul>
        <ul>
          <div className={styles.acDiv}>
            <li className={styles.navLink} onClick={() => setShowAcNav(!showAcNav)}>Account</li>
            {/* SHOW THE BELOW INFO ONLY IF THE showAcNav STATE IS TRUE */}
            {
              showAcNav ? 
              <ul className={styles.acDropdown}>
                <li>Profile</li>
                <li>Posts</li>
                <li>Settings</li>
                <li>Help</li>
              </ul> : null
            }
          </div>
          <li>Logout</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar