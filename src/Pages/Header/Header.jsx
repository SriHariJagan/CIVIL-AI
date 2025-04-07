import React, { useState, useEffect, useRef } from "react";
import styles from "./header.module.css";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";
import { projects, tasks, usersData } from "../../data"; // Adjust path if needed

const Header = ({getData}) => {
  const [showInput, setShowInput] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const dropdownRef = useRef(null);
  const navRef = useRef(null);
  const searchRef = useRef(null);
  const menuBtnRef = useRef(null);

  const avatar = "https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png";

  const toggleNavbar = () => {
    setMenuOpen((prev) => !prev);
    setDropdownOpen(false);
  };

  const toggleAdminDropdown = () => {
    setDropdownOpen((prev) => !prev);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }

      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setShowInput(false);
        setSearchTerm("");
        setSearchResults([]);
      }

      if (
        menuOpen &&
        !(
          navRef.current?.contains(event.target) ||
          menuBtnRef.current?.contains(event.target)
        )
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Search logic
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    const term = searchTerm.toLowerCase();
    const matchedProjects = projects.filter(p => p.name.toLowerCase().includes(term));
    const matchedTasks = tasks.filter(t => t.name.toLowerCase().includes(term));
    const matchedUsers = usersData.filter(u => u.name.toLowerCase().includes(term));

    const results = [
      ...matchedProjects.map(p => ({ type: "Project", name: p.name })),
      ...matchedTasks.map(t => ({ type: "Task", name: t.name })),
      ...matchedUsers.map(u => ({ type: "User", name: u.name })),
    ];

    if(results.length >0){
      setSearchResults(results);
      console.log(results)
    }

  }, [searchTerm]);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <Link to="/">
          <img src="/Images/logo.png" alt="App Logo" />
        </Link>
      </div>

      <nav ref={navRef} className={`${styles.navbar} ${menuOpen ? styles.navOpen : ""}`}>
        <ul>
          {["/", "/projects", "/tasks", "/users"].map((route, idx) => (
            <li key={route} onClick={() => setMenuOpen(false)}>
              <NavLink
                to={route}
                className={({ isActive }) => (isActive ? styles.activeLink : "")}
              >
                {["Overview", "Projects", "Tasks", "Users"][idx]}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.rightHeader}>
        <span className={styles.searchContainer} ref={searchRef}>
          {showInput && (
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          )}
          <button
            onClick={() => setShowInput((prev) => !prev)}
            className={styles.searchBtn}
          >
            <img src="/Images/searchIcon.png" alt="Search Icon" width={10} />
          </button>

          {searchResults.length > 0 && (
            <div className={styles.searchDropdown}>
              {searchResults.map((result, idx) => (
                <Link to='/details' key={idx} onClick={() => getData(result)}>
                  <div  className={styles.searchItem} onClick={() => {setSearchResults([]), setShowInput(false)}}>
                    <strong>{result.type}:</strong> {result.name}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </span>

        <div className={styles.adminWrapper} ref={dropdownRef}>
          <button className={styles.adminBtn} onClick={toggleAdminDropdown}>
            <img src={avatar} alt="User Avatar" width={20} />
          </button>

          {dropdownOpen && (
            <div className={styles.adminDropdown}>
              <div className={styles.profileHeader}>
                <img src={avatar} alt="User Avatar" className={styles.profilePic} />
                <span className={styles.username}>Rahul</span>
              </div>
              <hr />
              <ul>
                <li><Link to="/">Edit Profile</Link></li>
                <li><Link to="/">Account & Info</Link></li>
                <li>
                  <button className={styles.logoutBtn}>Log Out</button>
                </li>
              </ul>
            </div>
          )}
        </div>

        <button ref={menuBtnRef} className={styles.menuBtn} onClick={toggleNavbar}>
          {menuOpen ? <IoMdClose size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
