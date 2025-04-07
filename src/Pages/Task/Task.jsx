import React, { useState } from "react";
import { tasks as initialTasks } from "../../data";
import styles from "./task.module.css";
import TaskModal from "../../Components/TaskModal/TaskModal";
import NewTaskForm from "../../Components/NewTaskForm/NewTaskForm";
import { normalize } from "../../Utils/filterData";

const Task = () => {
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);
  const [filters, setFilters] = useState({
    status: "",
    assignedTo: "",
    dueDate: "",
    priority: "",
  });
  const [selectedTask, setSelectedTask] = useState(null);
  const [modalMode, setModalMode] = useState("view");

  // Filtering logic
  const filteredTasks = tasks.filter((task) => {
    return (
      (filters.status ? task.status === filters.status : true) &&
      (filters.assignedTo ? task.assignedTo === filters.assignedTo : true) &&
      (filters.dueDate ? task.dueDate === filters.dueDate : true) &&
      (filters.priority ? task.priority === filters.priority : true)
    );
  });

  const handleOpenModal = (task, mode) => {
    setSelectedTask(task);
    setModalMode(mode);
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
    setSelectedTask(null);
  };

  return (
    <>
      {showNewTaskForm && (
        <div className={styles.addTaskContainer}>
          <button
            className={styles.closeNewTaskBtn}
            onClick={() => setShowNewTaskForm(false)}
          >
            X
          </button>
          <NewTaskForm />
        </div>
      )}

      {selectedTask && (
        <TaskModal
          task={selectedTask}
          mode={modalMode}
          onClose={handleCloseModal}
          onDelete={() => handleDeleteTask(selectedTask)}
        />
      )}

      <div className={styles.taskContainer}>
        {/* Filters Section */}
        <div className={styles.filter}>
          <div className={styles.filterSection}>
            <select
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
            >
              <option value="">Filter by Status</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="On Hold">On Hold</option>
            </select>

            <select
              value={filters.assignedTo}
              onChange={(e) =>
                setFilters({ ...filters, assignedTo: e.target.value })
              }
            >
              <option value="">Filter by Person</option>
              <option value="John">John</option>
              <option value="Alice">Alice</option>
              <option value="Bob">Bob</option>
            </select>

            <input
              type="date"
              value={filters.dueDate}
              onChange={(e) =>
                setFilters({ ...filters, dueDate: e.target.value })
              }
            />

            <select
              value={filters.priority}
              onChange={(e) =>
                setFilters({ ...filters, priority: e.target.value })
              }
            >
              <option value="">Filter by Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <button
              className={styles.clearBtn}
              onClick={() =>
                setFilters({
                  status: "",
                  assignedTo: "",
                  dueDate: "",
                  priority: "",
                })
              }
            >
              Clear Filters
            </button>
          </div>

          <button
            className={styles.addTaskBtn}
            onClick={() => setShowNewTaskForm(true)}
          >
            Add Task
          </button>
        </div>

        {/* Task Table with Scroll */}
        <div className={styles.tableWrapper}>
          <table className={styles.taskTable}>
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Task</th>
                <th>Description</th>
                <th>Assigned To</th>
                <th>Start Date</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Project</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task, index) => (
                <tr key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.name}</td>
                  <td>{task.description}</td>
                  <td>{task.assignedTo}</td>
                  <td>{task.startDate}</td>
                  <td>{task.dueDate}</td>
                  <td
                    className={`${styles.status} ${
                      styles[normalize(task.status)]
                    }`}
                  >
                    {task.status}
                  </td>
                  <td>{task.priority}</td>
                  <td>{task.project}</td>
                  <td className={styles.editBtns}>
                    <button
                      className={styles.view}
                      onClick={() => handleOpenModal(task, "view")}
                    >
                      View
                    </button>
                    <button
                      className={styles.edit}
                      onClick={() => handleOpenModal(task, "edit")}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.delete}
                      onClick={() => handleOpenModal(task, "delete")}
                    >
                      Delete
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

export default Task;
