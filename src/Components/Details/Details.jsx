import React from 'react';
import styles from './details.module.css';
import { tasks, projects, usersData } from '../../data';

const Details = ({ data }) => {
  if (!data || !data.name || !data.type) {
    return <div className={styles.wrapper}>No data found.</div>;
  }

  let details = null;

  if (data.type === "Task") {
    details = tasks.find(task => task.name === data.name);
  } else if (data.type === "Project") {
    details = projects.find(project => project.name === data.name);
  } else if (data.type === "User") {
    details = usersData.find(user => user.name === data.name);
  }

  if (!details) {
    return <div className={styles.wrapper}>No details available for this item.</div>;
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{data.type} Details</h2>
      <div className={styles.card}>
        {Object.entries(details).map(([key, value]) => (
          <div key={key} className={styles.detailRow}>
            <span className={styles.label}>{key.replace(/([A-Z])/g, ' $1')}:</span>
            <span className={styles.value}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
