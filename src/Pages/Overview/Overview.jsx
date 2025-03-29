import React, { useState } from "react";
import styles from "./overview.module.css";

const Overview = () => {
  const [isProjectOpen, setIsProjectOpen] = useState(true);
  const [isTaskOpen, setIsTaskOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const projectData = [
    { title: "Total Projects", value: "4" },
    { title: "New Projects", value: "2" },
    { title: "On Going", value: "1" },
    { title: "On Hold", value: "1" },
    { title: "Completed", value: "1" },
  ];

  const taskData = [
    { title: "Total Tasks", value: "150" },
    { title: "New Tasks", value: "50" },
    { title: "On Going", value: "70" },
    { title: "On Hold", value: "20" },
    { title: "Completed", value: "10" },
  ];

  const filteredProjects = projectData.filter((item) =>
    item.title.toLowerCase().replace(/\s+/g, '').includes(searchTerm.toLowerCase().replace(/\s+/g, ''))
  );

  const filteredTasks = taskData.filter((item) =>
    item.title.toLowerCase().replace(/\s+/g, '').includes(searchTerm.toLowerCase().replace(/\s+/g, ''))
  );

  return (
    <div className={styles.container}>
      {/* Projects Section */}
      <div className={styles.section}>
        <div className={styles.header} onClick={() => {
          setIsProjectOpen(!isProjectOpen);
          setIsTaskOpen(false);
        }}>
          <h2>Projects</h2>
          <button className={styles.toggleBtn}>{isProjectOpen ? "Hide" : "Show"}</button>
        </div>
        {isProjectOpen && (
          <div className={styles.content}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search Projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className={styles.dataContainer}>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((item, index) => (
                  <div key={index} className={styles.dataCard}>
                    <h3>{item.title}</h3>
                    <p>{item.value}</p>
                  </div>
                ))
              ) : (
                <p className={styles.noResults}>No results found</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Tasks Section */}
      <div className={styles.section}>
        <div className={styles.header} onClick={() => {
          setIsTaskOpen(!isTaskOpen);
          setIsProjectOpen(false);
        }}>
          <h2>Tasks</h2>
          <button className={styles.toggleBtn}>{isTaskOpen ? "Hide" : "Show"}</button>
        </div>
        {isTaskOpen && (
          <div className={styles.content}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search Tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className={styles.dataContainer}>
              {filteredTasks.length > 0 ? (
                filteredTasks.map((item, index) => (
                  <div key={index} className={styles.dataCard}>
                    <h3>{item.title}</h3>
                    <p>{item.value}</p>
                  </div>
                ))
              ) : (
                <p className={styles.noResults}>No results found</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;