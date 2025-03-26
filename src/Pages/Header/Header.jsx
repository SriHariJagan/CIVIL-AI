import React, { useState } from "react";
import styles from "./header.module.css";
import { FiMenu } from "react-icons/fi"; // Import menu icon
import { IoMdClose } from "react-icons/io"; // Import close icon
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [showInput, setShowInput] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.headerContainer}>
      {/* Logo Section */}
      <div className={styles.headerLogo}>
        <Link to="/">
          <img src="/Images/logo.png" alt="Logo" />
        </Link>
      </div>

      {/* Navbar - Desktop & Mobile */}
      <nav className={`${styles.navbar} ${menuOpen ? styles.navOpen : ""}`}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : ""}>Overview</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? styles.activeLink : ""}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/tasks" className={({ isActive }) => isActive ? styles.activeLink : ""}>Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/users" className={({ isActive }) => isActive ? styles.activeLink : ""}>Users</NavLink>
          </li>
        </ul>
      </nav>

      {/* Right Side Header */}
      <div className={styles.rightHeader}>
        {/* Search Bar */}
        <span className={styles.searchContainer}>
          {showInput && <input type="text" className={styles.searchInput} placeholder="Search..." />}
          <button onClick={() => setShowInput(prev => !prev)} className={styles.searchBtn}>
            <img src="/Images/searchIcon.png" alt="Search" width={10} />
          </button>
        </span>

        {/* Admin Button */}
        <button className={styles.adminBtn}>Admin</button>

        {/* Hamburger Menu for Mobile */}
        <button className={styles.menuBtn} onClick={() => setMenuOpen(prev => !prev)}>
          {menuOpen ? <IoMdClose size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
