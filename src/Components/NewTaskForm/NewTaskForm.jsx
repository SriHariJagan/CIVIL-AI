import React from "react";
import styles from "./newTaskForm.module.css";

const NewTaskForm = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create Task</h2>
      <form className={styles.form}>
        <div className={styles.leftColumn}>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" placeholder="Enter task name" />
          </div>

          <div className={styles.formGroup}>
            <label>Description</label>
            <textarea placeholder="Enter task description"></textarea>
          </div>

          <div className={styles.formGroup}>
            <label>Assigned To</label>
            <input type="text" placeholder="Enter assignee name" />
          </div>

          <div className={styles.formGroup}>
            <label>Start Date</label>
            <input type="date" />
          </div>

          <div className={styles.formGroup}>
            <label>Due Date</label>
            <input type="date" />
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.formGroup}>
            <label>Task Status</label>
            <select>
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Priority</label>
            <select>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Dependencies</label>
            <input type="text" placeholder="TASK LIST, ADHOC" />
          </div>

          <div className={styles.formGroup}>
            <label>Progress</label>
            <input type="number" min="0" max="100" placeholder="Enter progress %" />
          </div>

          <div className={styles.formGroup}>
            <label>*PROJECT NAME</label>
            <input type="text" value="READ ONLY" readOnly className={styles.readOnly} />
          </div>
        </div>

        <button className={styles.submitBtn}>Create Task</button>
      </form>
    </div>
  );
};

export default NewTaskForm;
