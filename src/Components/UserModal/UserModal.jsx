import React, { useState } from "react";
import styles from "./userModal.module.css";
import { FaTimes, FaTrashAlt, FaCheck } from "react-icons/fa";

const UserModal = ({ user, mode, onClose, onDelete }) => {
  const [formData, setFormData] = useState({ ...user });
  const [showDeleteConfirm] = useState(mode === "delete");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    console.log("Updated user data:", formData);
    onClose();
  };

  const confirmDelete = () => {
    console.log("User deleted:", user);
    onDelete();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        {showDeleteConfirm ? (
          <div className={styles.confirmBox}>
            <h3>{user.name}</h3>
            <p><strong>Date Joined:</strong> {user.joined}</p>
            <p>Are you sure you want to delete this user?</p>
            <div className={styles.confirmButtons}>
              <button onClick={confirmDelete} className={styles.confirmButton}><FaTrashAlt /> Delete</button>
              <button onClick={onClose} className={styles.cancelButton}><FaTimes /> Cancel</button>
            </div>
          </div>
        ) : (
          <>
            <h2 className={styles.formTitle}>{mode === "view" ? "User Details" : "Edit User"}</h2>
            <div className={styles.modalContent}>
              <div className={styles.formGroupContainer}>
                <div className={styles.formColumn}>
                  <div className={styles.formRow}>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} readOnly={mode === "view"} />
                  </div>
                  <div className={styles.formRow}>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} readOnly={mode === "view"} />
                  </div>
                </div>
                <div className={styles.formColumn}>
                  <div className={styles.formRow}>
                    <label>Role:</label>
                    <input type="text" name="role" value={formData.role} onChange={handleChange} readOnly={mode === "view"} />
                  </div>
                  <div className={styles.formRow}>
                    <label>Status:</label>
                    <select name="status" value={formData.status} onChange={handleChange} disabled={mode === "view"}>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.submitContainer}>
              <button onClick={onClose} className={styles.submitButton}><FaTimes /> Close</button>
              {mode === "edit" && <button onClick={handleUpdate} className={styles.submitButton}><FaCheck /> Update</button>}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserModal;
