import React, { useState, useEffect, useRef } from "react";
import styles from "./header.module.css";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [showInput, setShowInput] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const navRef = useRef(null);
  const menuBtnRef = useRef(null); // 🔧 New ref for hamburger button

  const avathar = "https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png";

  // Toggle Navbar and Close Admin Dropdown
  const toggleNavbar = () => {
    setMenuOpen((prev) => !prev);
    setDropdownOpen(false);
  };

  // Toggle Admin Dropdown and Close Navbar
  const toggleAdminDropdown = () => {
    setDropdownOpen((prev) => !prev);
    setMenuOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  // Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className={styles.headerContainer}>
      {/* Logo Section */}
      <div className={styles.headerLogo}>
        <Link to="/">
          <img src="/Images/logo.png" alt="Logo" />
        </Link>
      </div>

      {/* Navbar */}
      <nav ref={navRef} className={`${styles.navbar} ${menuOpen ? styles.navOpen : ""}`}>
        <ul>
          <li onClick={() => setMenuOpen(false)}>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : "")}>Overview</NavLink>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? styles.activeLink : "")}>Projects</NavLink>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <NavLink to="/tasks" className={({ isActive }) => (isActive ? styles.activeLink : "")}>Tasks</NavLink>
          </li>
          <li onClick={() => setMenuOpen(false)}>
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
        <div className={styles.adminWrapper} ref={dropdownRef}>
          <button className={styles.adminBtn} onClick={toggleAdminDropdown}>
            <img src={avathar} alt="Avatar" width={20} />
          </button>

          {dropdownOpen && (
            <div className={styles.adminDropdown}>
              <div className={styles.profileHeader}>
                <img src={avathar} alt="Avatar" className={styles.profilePic} />
                <span className={styles.username}>Rahul</span>
              </div>
              <hr />
              <ul>
                <li><Link to="/" onClick={() => setDropdownOpen(false)}>Edit Profile</Link></li>
                <li><Link to="/" onClick={() => setDropdownOpen(false)}>Account & Info</Link></li>
                <li><button className={styles.logoutBtn} onClick={() => setDropdownOpen(false)}>Log Out</button></li>
              </ul>
            </div>
          )}
        </div>

        {/* Hamburger Menu */}
        <button ref={menuBtnRef} className={styles.menuBtn} onClick={toggleNavbar}>
          {menuOpen ? <IoMdClose size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
