import React from "react";
import styles from "./newProjectForm.module.css";

const NewProjectForm = () => {
  return (
    <div className={styles.newProjectFormContainer}>
      <h2 className={styles.formTitle}>Create Project</h2>
      <form className={styles.projectForm}>
        <div className={styles.formGroupContainer}>
          {/* Left Column */}
          <div className={styles.formGroup}>
            <div className={styles.formRow}>
              <label>Name:</label>
              <input type="text" placeholder="Enter Project Name" />
            </div>

            <div className={styles.formRow}>
              <label>Sanction Date:</label>
              <input type="date" />
            </div>

            <div className={styles.formRow}>
              <label>Length:</label>
              <input type="text" placeholder="e.g. 4.9 Km" />
            </div>

            <div className={styles.formRow}>
              <label>Total Project Cost:</label>
              <input type="text" placeholder="e.g. 85.53 Cr" />
            </div>

            <div className={styles.formRow}>
              <label>Contractor:</label>
              <input type="text" placeholder="Enter Contractor Name" />
            </div>

            <div className={styles.formRow}>
              <label>Location:</label>
              <input type="text" placeholder="Enter Location" />
            </div>

            <div className={styles.formRow}>
              <label>Lane Configuration:</label>
              <input
                type="text"
                placeholder="e.g. 4 Lane with Paved Shoulder"
              />
            </div>

            <div className={styles.formRow}>
              <label>Revised Project Cost:</label>
              <input type="text" placeholder="Enter Revised Cost" />
            </div>

            <div className={styles.formRow}>
              <label>Latest Comment:</label>
              <input type="text" placeholder="Enter Latest Comment" />
            </div>

            <div className={styles.formRow}>
              <label>Physical Progress:</label>
              <input type="text" placeholder="Enter Physical Progress" />
            </div>

            <div className={styles.formRow}>
              <label>Financial Progress:</label>
              <input type="text" placeholder="Enter Financial Progress" />
            </div>

          </div>
          

          {/* Right Column */}
          <div className={styles.formGroup}>
            <div className={styles.formRow}>
              <label>Completion Period:</label>
              <input
                type="text"
                placeholder="Enter Completion Period (Months)"
              />
            </div>

            <div className={styles.formRow}>
              <label>Appointed Date:</label>
              <input type="date" />
            </div>

            <div className={styles.formRow}>
              <label>Scheduled Completion Date:</label>
              <input type="date" />
            </div>

            <div className={styles.formRow}>
              <label>EOT:</label>
              <input type="text" placeholder="Enter EOT" />
            </div>

            <div className={styles.formRow}>
              <label>Total Delay (Days):</label>
              <input type="text" placeholder="Enter Delay Days" />
            </div>

            

            <div className={styles.formRow}>
              <label htmlFor="projectStatus">Project Status:</label>
              <select id="projectStatus" className={styles.selectInput}>
                <option value="">Select Status</option>
                <option value="ongoing">On Going</option>
                <option value="on-hold">On Hold</option>
                <option value="new">New</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className={styles.formRow}>
              <label>Land Acquisition Cost:</label>
              <input type="text" placeholder="Enter Land Acquisition Cost" />
            </div>

            <div className={styles.formRow}>
              <label>Cure Period Notice Date:</label>
              <input type="text" placeholder="Enter Cure Period Notice Datet" />
            </div>

            <div className={styles.formRow}>
              <label>Termination Notice Date:</label>
              <input type="text" placeholder="Enter Termination Notice Date" />
            </div>


            <div className={styles.formRow}>
              <label>Termination Proposal Date:</label>
              <input type="text" placeholder="Enter Termination Proposal Date" />
            </div>

          </div>
        </div>

        <div className={styles.submitContainer}>
          <button type="submit" className={styles.submitButton}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProjectForm;
