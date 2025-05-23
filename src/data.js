export const projects = [
    { id: 1, name: 'Rohat Bypass', sanctionDate: '29.03.2018', length: 4.9, cost: 85.53, progress: 'completed', contractor: 'M/s. R & B Infra Project Pvt Ltd, Mumbai', dueDate: '31.01.2023', status: 'Completed' },
    { id: 2, name: 'NH-458', sanctionDate: 'Not yet', length: 30.0, cost: 308.03, progress: 'forest clearance proposal is pending with UA since 14.12.2023', contractor: 'M/s. R & B Infra Project Pvt Ltd, Mumbai ', dueDate: '15 AUG 2025', status: 'onhold' },
    { id: 3, name: 'NH30', sanctionDate: '28 July 2024', length: 4.3, cost: 85, progress: '90', contractor: 'CN', dueDate: '15 AUG 2025', status: 'New' },
    { id: 4, name: 'NH14', sanctionDate: '28 July 2024', length: 4.3, cost: 85, progress: '90', contractor: 'CN', dueDate: '15 AUG 2025', status: 'Completed' },
  ];



  export const tasks = [
    { id: 1, name: "TASK1", description: "Task Description", assignedTo: "John", startDate: "2025-03-25", dueDate: "2025-03-30", status: "Pending", priority: "High", project: "NH20" },
    { id: 2, name: "TASK2", description: "Task Description", assignedTo: "Alice", startDate: "2025-03-20", dueDate: "2025-03-28", status: "Completed", priority: "Medium", project: "NH21" },
    { id: 3, name: "TASK3", description: "Task Description", assignedTo: "Bob", startDate: "2025-03-22", dueDate: "2025-04-01", status: "On Hold", priority: "Low", project: "NH22" },
  ];


  export const usersData = [
    { id: 1, name: "USER1", totalTasks: 5, pending: 2, priority: "Medium", joined: "30 March 2025", status: "AVERAGE", notifications: "On" },
    { id: 2, name: "USER2", totalTasks: 8, pending: 1, priority: "Low", joined: "30 March 2025", status: "GOOD", notifications: "Off" },
    { id: 3, name: "USER3", totalTasks: 9, pending: 4, priority: "High", joined: "30 March 2025", status: "BAD", notifications: "On" },
    { id: 4, name: "USER4", totalTasks: 10, pending: 0, priority: "Low", joined: "30 March 2025", status: "EXCELLENT", notifications: "On" },
  ];
  

 export  const projectData = [
    { title: "Total Projects", value: "4" },
    { title: "New Projects", value: "2" },
    { title: "On Going", value: "1" },
    { title: "On Hold", value: "1" },
    { title: "Completed", value: "1" },
  ];

  export const taskData = [
    { title: "Total Tasks", value: "150" },
    { title: "New Tasks", value: "50" },
    { title: "On Going", value: "70" },
    { title: "On Hold", value: "20" },
    { title: "Completed", value: "10" },
  ];