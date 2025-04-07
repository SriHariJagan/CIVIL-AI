import React, { useState } from "react";
import styles from "./taskModal.module.css";

const TaskModal = ({ task, mode, onClose, onDelete }) => {
  const [formData, setFormData] = useState({ ...task });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(mode === "delete");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    console.log("Updated task data:", formData);
    onClose();
  };

  const confirmDelete = () => {
    console.log("Task deleted:", task);
    setShowDeleteConfirm(false);
    onDelete();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        {showDeleteConfirm ? (
          <div className={styles.confirmBox}>
            <p><strong>Project:</strong> {task.project}</p>
            <p><strong>Assigned To:</strong> {task.assignedTo}</p>
            <p>Are you sure you want to delete this task?</p>
            <button onClick={confirmDelete} className={styles.confirmButton}>Confirm</button>
            <button onClick={onClose} className={styles.cancelButton}>Cancel</button>
          </div>
        ) : (
          <>
            <h2 className={styles.formTitle}>{mode === "view" ? "Task Details" : "Edit Task"}</h2>
            <div className={styles.modalContent}>
              <div className={styles.formGroupContainer}>
                
                {/* Left Section */}
                <div className={styles.formGroup}>
                  <div className={styles.formRow}>
                    <label>Name:</label>
                    {mode === "view" ? (
                      <p>{task.name}</p>
                    ) : (
                      <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    )}
                  </div>

                  <div className={styles.formRow}>
                    <label>Description:</label>
                    {mode === "view" ? (
                      <p>{task.description}</p>
                    ) : (
                      <textarea name="description" value={formData.description} onChange={handleChange} />
                    )}
                  </div>

                  <div className={styles.formRow}>
                    <label>Assigned To:</label>
                    {mode === "view" ? (
                      <p>{task.assignedTo}</p>
                    ) : (
                      <input type="text" name="assignedTo" value={formData.assignedTo} onChange={handleChange} />
                    )}
                  </div>

                  <div className={styles.formRow}>
                    <label>Start Date:</label>
                    {mode === "view" ? (
                      <p>{task.startDate}</p>
                    ) : (
                      <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
                    )}
                  </div>

                  <div className={styles.formRow}>
                    <label>Due Date:</label>
                    {mode === "view" ? (
                      <p>{task.dueDate}</p>
                    ) : (
                      <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />
                    )}
                  </div>
                </div>

                {/* Right Section */}
                <div className={styles.formGroup}>
                  <div className={styles.formRow}>
                    <label>Task Status:</label>
                    {mode === "view" ? (
                      <p>{task.status}</p>
                    ) : (
                      <select name="status" value={formData.status} onChange={handleChange}>
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                    )}
                  </div>

                  <div className={styles.formRow}>
                    <label>Priority:</label>
                    {mode === "view" ? (
                      <p>{task.priority}</p>
                    ) : (
                      <select name="priority" value={formData.priority} onChange={handleChange}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    )}
                  </div>

                  <div className={styles.formRow}>
                    <label>Dependencies:</label>
                    <input type="text" value={task.dependencies} readOnly />
                  </div>

                  <div className={styles.formRow}>
                    <label>Progress:</label>
                    {mode === "view" ? (
                      <p>{task.progress}</p>
                    ) : (
                      <input type="text" name="progress" value={formData.progress} onChange={handleChange} />
                    )}
                  </div>

                  <div className={styles.formRow}>
                    <label>*PROJECT NAME:</label>
                    <input type="text" value={task.project} readOnly />
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className={styles.submitContainer}>
              <button onClick={onClose} className={styles.submitButton}>Close</button>
              {mode === "edit" && <button onClick={handleUpdate} className={styles.submitButton}>Update</button>}
              {mode === "view" && <button onClick={onClose} className={styles.submitButton}>OK</button>}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskModal;
