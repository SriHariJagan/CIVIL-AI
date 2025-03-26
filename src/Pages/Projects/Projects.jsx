import React, { useState } from "react";
import styles from "./projects.module.css";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const projectData = [
    { title: "TOTAL PROJECTS", value: "4" },
    { title: "On Going", value: "1" },
    { title: "On Hold", value: "1" },
    { title: "Completed", value: "1" },
    { title: "Budget", value: "90 Cr" },
    { title: "Pending Budget", value: "90 Cr" },
    { title: "All TASK", value: "150" },
    { title: "High Priority", value: "6" },
    { title: "ALL USER/CLIENTS", value: "30" },
  ];

  // Filtered data based on search term
  const filteredProjects = projectData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.projectsContainer}>
      {/* Filter Options & Search Box */}
      <div className={styles.filterBar}>
        <span className={styles.active} onClick={() => setSearchTerm("")}>OVER ALL</span>
        <div className={styles.filter}>
            <span>Filter by Project:</span>
            <input
            type="text"
            className={styles.searchInput}
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
      </div>

      {/* Project Cards */}
      <div className={styles.projectGrid}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((item, index) => (
            <div key={index} className={styles.projectCard}>
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
