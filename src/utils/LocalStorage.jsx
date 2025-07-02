localStorage.clear();

const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    firstName: "Aarav",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Design Homepage",
        description: "Create a responsive design for the homepage.",
        taskData: "2024-10-01",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: true,
        title: "Fix Login Bug",
        description: "Resolve the login issue in the application.",
        taskData: "2024-09-15",
        category: "Bug Fix",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write API Documentation",
        description: "Document all API endpoints and responses.",
        taskData: "2024-10-10",
        category: "Documentation",
      }
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    firstName: "Isha",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize Database Queries",
        description: "Improve performance of existing database queries.",
        taskData: "2024-09-20",
        category: "Optimization",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Implement Dark Mode",
        description: "Add dark mode functionality to the UI.",
        taskData: "2024-10-12",
        category: "Feature Development",
      }
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    firstName: "Vihaan",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Conduct Usability Testing",
        description: "Plan and conduct a usability test for the new feature.",
        taskData: "2024-10-08",
        category: "Testing",
      }
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    firstName: "Anaya",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Data Visualization",
        description: "Develop a dashboard for data visualization.",
        taskData: "2024-10-06",
        category: "Data Analysis",
      }
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    firstName: "Dev",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        title: "Enhance Security Protocols",
        description: "Upgrade and test security protocols.",
        taskData: "2024-09-18",
        category: "Security",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Refactor Codebase",
        description: "Refactor code for improved readability.",
        taskData: "2024-10-03",
        category: "Code Maintenance",
      }
    ],
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
