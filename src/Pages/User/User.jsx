import React, { useState } from "react";
import styles from "./user.module.css";

const users = [
  { id: 1, name: "USER1", totalTasks: 5, pending: 2, priority: "Medium", joined: "30 March 2025", status: "AVERAGE", notifications: "On" },
  { id: 2, name: "USER2", totalTasks: 8, pending: 1, priority: "Low", joined: "30 March 2025", status: "GOOD", notifications: "Off" },
  { id: 3, name: "USER3", totalTasks: 9, pending: 4, priority: "High", joined: "30 March 2025", status: "BAD", notifications: "On" },
  { id: 4, name: "USER4", totalTasks: 10, pending: 0, priority: "Low", joined: "30 March 2025", status: "EXCELLENT", notifications: "On" },
];

const statusColors = {
  AVERAGE: "#FFC107",
  GOOD: "#17A2B8",
  BAD: "#DC3545",
  EXCELLENT: "#28A745",
};

const UserTable = () => {
  const [filterName, setFilterName] = useState("");
  const [filterTotalTasks, setFilterTotalTasks] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredUsers = users.filter(user =>
    (filterName === "" || user.name.toLowerCase().includes(filterName.toLowerCase())) &&
    (filterTotalTasks === "" || user.totalTasks.toString().includes(filterTotalTasks)) &&
    (filterStatus === "All" || user.status === filterStatus)
  );

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <div className={styles.filterBar}>
            <input
            type="text"
            placeholder="Filter by name"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
            className={styles.filterInput}
            />
            <input
            type="number"
            placeholder="Filter by total tasks"
            value={filterTotalTasks}
            onChange={(e) => setFilterTotalTasks(e.target.value)}
            className={styles.filterInput}
            />
            <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className={styles.filterSelect}
            >
            <option value="All">All Status</option>
            {Object.keys(statusColors).map(status => (
                <option key={status} value={status}>{status}</option>
            ))}
            </select>
        </div>
        <button className={styles.addUserBtn}>Add User</button>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>NAME</th>
              <th>TOTAL TASK</th>
              <th>PENDING</th>
              <th>Priority</th>
              <th>DATE JOINED</th>
              <th>STATUS</th>
              <th>NOTIFICATIONS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td><a href="#" className={styles.link}>{user.name}</a></td>
                <td>{user.totalTasks}</td>
                <td>{user.pending}</td>
                <td>{user.priority}</td>
                <td>{user.joined}</td>
                <td style={{ backgroundColor: statusColors[user.status], color: "white", padding: "5px", borderRadius: "5px" }}>{user.status}</td>
                <td>{user.notifications}</td>
                <td>
                  <button className={styles.view}>VIEW</button>
                  <button className={styles.edit}>EDIT</button>
                  <button className={styles.delete}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
