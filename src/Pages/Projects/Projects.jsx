import React, { useState } from "react";
import styles from "./projects.module.css";
import { projects } from "../../data";
import NewProjectForm from "../../Components/NewProjectForm/NewProjectForm";
import ProjectModal from "../../Components/ProjectModal/ProjectModal";
import { Link } from "react-router-dom";
import { normalize } from "../../Utils/filterData";

const Projects = () => {
  const [showNewProject, setShowNewProject] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState(["all"]);
  const [modalData, setModalData] = useState(null);
  const [modalMode, setModalMode] = useState("view");

  // Handle checkbox toggle
  const handleFilterChange = (status) => {
    if (status === "all") {
      setSelectedFilters(["all"]);
    } else {
      let updatedFilters = [...selectedFilters];
      if (updatedFilters.includes(status)) {
        updatedFilters = updatedFilters.filter((item) => item !== status);
      } else {
        updatedFilters.push(status);
      }
      if (updatedFilters.length === 0) {
        updatedFilters = ["all"];
      } else {
        updatedFilters = updatedFilters.filter((item) => item !== "all");
      }
      setSelectedFilters(updatedFilters);
    }
  };

  // Filter projects based on selected filters
  const filteredProjects = projects.filter((project) =>
    selectedFilters.includes("all")
      ? true
      : selectedFilters.includes(normalize(project.status))
  );

  return (
    <>
      {showNewProject && (
        <div className={styles.newProject}>
          <button
            className={styles.closeNewProjectBtn}
            onClick={() => setShowNewProject(false)}
          >
            X
          </button>
          <NewProjectForm />
        </div>
      )}

      {modalData && (
        <ProjectModal
          project={modalData}
          mode={modalMode}
          onClose={() => setModalData(null)}
          onDelete={() => {
            console.log("Deleting project:", modalData);
            setModalData(null); // Close modal after deletion
          }}
        />
      )}

      <div className={styles.homeContainer}>
        <div className={styles.homeHeader}>
          <div className={styles.filterContainer}>
            {["all", "new", "ongoing", "onhold", "completed"].map((status) => (
              <label key={status}>
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(status)}
                  onChange={() => handleFilterChange(status)}
                />
                  <span className={styles.status}>{status}</span>
              </label>
            ))}
          </div>
          <button className={styles.createProject} onClick={() => setShowNewProject(true)}>
            + Project
          </button>
        </div>

        <div className={styles.projectTableContainer}>
          <table className={styles.projectTable}>
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>PROJECT</th>
                <th>SANCTION DATE</th>
                <th>LENGTH</th>
                <th>COST</th>
                <th>PROGRESS</th>
                <th>CONTRACTOR</th>
                <th>DUE DATE</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project, index) => (
                <tr key={project.id}>
                  <td>{index + 1}</td>
                  <td><Link to="/tasks">{project.name}</Link></td>
                  <td>{project.sanctionDate}</td>
                  <td className={styles.length}>{project.length}</td>
                  <td className={styles.cost}>{project.cost}</td>
                  <td className={styles.progress}>{project.progress}</td>
                  <td className={styles.contractor}>{project.contractor}</td>
                  <td>{project.dueDate}</td>
                  <td className={`${styles.status} ${styles[normalize(project.status)]}`}>
                    {project.status}
                  </td>
                  <td className={styles.actions}>
                    <a 
                      href="#" 
                      className={`${styles.actionLink} ${styles.view}`} 
                      onClick={() => { setModalData(project); setModalMode("view"); }}
                    >
                      VIEW
                    </a>
                    <a 
                      href="#" 
                      className={`${styles.actionLink} ${styles.edit}`} 
                      onClick={() => { setModalData(project); setModalMode("edit"); }}
                    >
                      EDIT
                    </a>
                    <a
                      href="#"
                      className={`${styles.actionLink} ${styles.delete}`}
                      onClick={() => {
                        setModalData(project);
                        setModalMode("delete");
                      }}
                    >
                      DELETE
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Projects;
