import React from 'react'
// import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

export const Navbar = () => {
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
          <li className={styles.navLink}>Account</li>
          <li>Settings</li>
        </ul>
      </div>
    </nav>
  )
}
