import React, { useState } from "react";
import styles from "./newUserForm.module.css";

const NewUserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Create New User</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Role</label>
          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className={styles.submitContainer}>
          <button type="submit" className={styles.submitButton}>Create User</button>
        </div>
      </form>
    </div>
  );
};

export default NewUserForm;
