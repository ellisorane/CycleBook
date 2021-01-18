import React from 'react'
import { NavLink } from "react-router-dom";

import styles from './Navbar.module.css'

const Navbar = ({showAcNav, setShowAcNav}) => {
  return (
    <nav>
      <div className={styles.navWrapper}>
        <h1><NavLink className={styles.navBrand} exact to="/">CycleBooK</NavLink></h1>
        <ul>
          <li><NavLink className={styles.navLink} activeClassName={styles.active} exact to="/">Feed</NavLink></li>
          <li><NavLink className={styles.navLink} activeClassName={styles.active} exact to="/messages">Messages</NavLink></li>
          <li><NavLink className={styles.navLink} activeClassName={styles.active} exact to="/marketplace">Marketplace</NavLink></li>
        </ul>
        <ul>
          <div className={styles.acDiv}>
            <li className={styles.navLink} onClick={() => setShowAcNav(!showAcNav)}>Account</li>
            {/* SHOW THE BELOW INFO ONLY IF THE showAcNav STATE IS TRUE */}
            {
              showAcNav ? 
              <ul className={styles.acDropdown}>
                <li><NavLink className={styles.navLink} activeClassName={styles.active} exact to="/profile">Profile</NavLink></li>
                <li><NavLink className={styles.navLink} activeClassName={styles.active} exact to="/posts">Posts</NavLink></li>
                <li><NavLink className={styles.navLink} activeClassName={styles.active} exact to="/settings">Settings</NavLink></li>
                <li><NavLink className={styles.navLink} activeClassName={styles.active} exact to="/help">Help</NavLink></li>
              </ul> : null
            }
          </div>
          <li><NavLink className={styles.navLink} exact to="/logout">Logout</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar