import React, { useState } from "react";
import styles from "./user.module.css";
import UserModal from "../../Components/UserModal/UserModal";
import NewUserForm from "../../Components/NewUserForm/NewUserForm";

import { usersData } from "../../data";

const statusColors = {
  AVERAGE: "#FFC107",
  GOOD: "#17A2B8",
  BAD: "#DC3545",
  EXCELLENT: "#28A745",
};

const UserTable = () => {
  const [users, setUsers] = useState(usersData);
  const [filterName, setFilterName] = useState("");
  const [filterTotalTasks, setFilterTotalTasks] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [showNewUserForm, setShowNewUserForm] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalMode, setModalMode] = useState("view");

  const filteredUsers = users.filter(
    (user) =>
      (filterName === "" ||
        user.name.toLowerCase().includes(filterName.toLowerCase())) &&
      (filterTotalTasks === "" ||
        user.totalTasks.toString().includes(filterTotalTasks)) &&
      (filterStatus === "All" || user.status === filterStatus)
  );

  return (
    <>
      {showNewUserForm && (
        <div className={styles.newUserForm}>
          <button
            className={styles.closeFormBtn}
            onClick={() => setShowNewUserForm(false)}
          >
            X
          </button>
          <NewUserForm
            onClose={() => setShowNewUserForm(false)}
            setUsers={setUsers}
          />
        </div>
      )}

      {modalData && (
        <UserModal
          user={modalData}
          mode={modalMode}
          onClose={() => setModalData(null)}
          onDelete={() => {
            setUsers(users.filter((u) => u.id !== modalData.id));
            setModalData(null);
          }}
        />
      )}

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
              {Object.keys(statusColors).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            <button
              className={styles.clearBtn}
              onClick={() => {
                setFilterName("");
                setFilterTotalTasks("");
                setFilterStatus("All");
              }}
            >
              Clear Filter
            </button>
          </div>
          <button
            className={styles.addUserBtn}
            onClick={() => setShowNewUserForm(true)}
          >
            Add User
          </button>
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
                  <td>
                    <a href="#" className={styles.link}>
                      {user.name}
                    </a>
                  </td>
                  <td>{user.totalTasks}</td>
                  <td>{user.pending}</td>
                  <td>{user.priority}</td>
                  <td>{user.joined}</td>
                  <td
                    style={{
                      backgroundColor: statusColors[user.status],
                      color: "white",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  >
                    {user.status}
                  </td>
                  <td>{user.notifications}</td>
                  <td>
                    <button
                      className={styles.view}
                      onClick={() => {
                        setModalData(user);
                        setModalMode("view");
                      }}
                    >
                      VIEW
                    </button>
                    <button
                      className={styles.edit}
                      onClick={() => {
                        setModalData(user);
                        setModalMode("edit");
                      }}
                    >
                      EDIT
                    </button>
                    <button
                      className={styles.delete}
                      onClick={() => {
                        setModalData(user);
                        setModalMode("delete");
                      }}
                    >
                      DELETE
                    </button>
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

export default UserTable;
