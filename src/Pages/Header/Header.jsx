import React, { useState } from "react";
import styles from "./header.module.css";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";

import userIcon from '/Images/programmer.png'

const Header = () => {
  const [showInput, setShowInput] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle Navbar and Close Admin Dropdown
  const toggleNavbar = () => {
    setMenuOpen((prev) => !prev);
    setDropdownOpen(false); // Close profile dropdown
  };

  // Toggle Admin Dropdown and Close Navbar
  const toggleAdminDropdown = () => {
    setDropdownOpen((prev) => !prev);
    setMenuOpen(false); // Close navbar
  };

  return (
    <header className={styles.headerContainer}>
      {/* Logo Section */}
      <div className={styles.headerLogo}>
        <Link to="/">
          <img src="/Images/logo.png" alt="Logo" />
        </Link>
      </div>

      {/* Navbar */}
      <nav className={`${styles.navbar} ${menuOpen ? styles.navOpen : ""}`}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : "")}>Overview</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? styles.activeLink : "")}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/tasks" className={({ isActive }) => (isActive ? styles.activeLink : "")}>Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/users" className={({ isActive }) => (isActive ? styles.activeLink : "")}>Users</NavLink>
          </li>
        </ul>
      </nav>

      {/* Right Side Header */}
      <div className={styles.rightHeader}>
        {/* Search Bar */}
        <span className={styles.searchContainer}>
          {showInput && <input type="text" className={styles.searchInput} placeholder="Search..." />}
          <button onClick={() => setShowInput((prev) => !prev)} className={styles.searchBtn}>
            <img src="/Images/searchIcon.png" alt="Search" width={10} />
          </button>
        </span>

        {/* Admin Button with Dropdown */}
        <div className={styles.adminWrapper}>
          <button className={styles.adminBtn} onClick={toggleAdminDropdown}>
            <img src={userIcon} alt="Admin Icon" width={20} />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className={styles.adminDropdown}>
              <div className={styles.profileHeader}>
                <img src={userIcon} alt="User Avatar" className={styles.profilePic} />
                <span className={styles.username}>Jhon Jhosey</span>
              </div>
              <hr />
              <ul>
                <li><Link to="/edit-profile">Edit Profile</Link></li>
                <li><Link to="/account-info">Account & Info</Link></li>
                <li><button className={styles.logoutBtn}>Log Out</button></li>
              </ul>
            </div>
          )}
        </div>

        {/* Hamburger Menu */}
        <button className={styles.menuBtn} onClick={toggleNavbar}>
          {menuOpen ? <IoMdClose size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
