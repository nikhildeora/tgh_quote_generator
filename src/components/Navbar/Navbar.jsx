import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.main_nav_div}>
        <NavLink className={({isActive})=> isActive ? styles.nav_link_active: null } to={"/"}>Home</NavLink>
        <NavLink className={({isActive})=> isActive ? styles.nav_link_active : null } to={"/bookmark"}>Bookmark</NavLink>
    </nav>
  )
}

export default Navbar;