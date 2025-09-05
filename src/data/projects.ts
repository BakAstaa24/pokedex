export const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
    image: "/assets/react.svg",
    technologies: [
      { name: "React", type: "water" as const },
      { name: "Node.js", type: "grass" as const },
      { name: "MongoDB", type: "electric" as const },
      { name: "Stripe", type: "fire" as const },
    ],
    liveUrl: "https://demo-store.example.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    id: "001",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard built with React and D3.js. Provides real-time data visualization and business intelligence insights.",
    image: "/assets/react.svg",
    technologies: [
      { name: "React", type: "water" as const },
      { name: "D3.js", type: "electric" as const },
      { name: "TypeScript", type: "fire" as const },
      { name: "PostgreSQL", type: "grass" as const },
    ],
    liveUrl: "https://analytics-demo.example.com",
    githubUrl: "https://github.com/yourusername/dashboard",
    id: "002",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/assets/react.svg",
    technologies: [
      { name: "Vue.js", type: "grass" as const },
      { name: "Socket.io", type: "electric" as const },
      { name: "Express", type: "fire" as const },
      { name: "Redis", type: "water" as const },
    ],
    liveUrl: "https://tasks-demo.example.com",
    githubUrl: "https://github.com/yourusername/task-manager",
    id: "003",
  },
];
