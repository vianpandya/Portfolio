// Portfolio Data for Vian Pandya

export const personalInfo = {
  name: "Vian Pandya",
  title: "Freelance Full-Stack Developer & UI Architect",
  email: "vianpandya66@gmail.com",
  linkedin: "https://www.linkedin.com/in/vian-pandya-b6b885424/",
  location: "Available Remote / Worldwide",
  status: "Available for Freelance Projects & Contracts",
  bio: "Freelance Full-Stack Developer specialized in delivering high-converting web apps, robust backend APIs, and custom frontend experiences with React, Angular, Node.js, .NET, SQL Server, PostgreSQL, SQL & MongoDB.",
  stats: [
    { label: "Years Experience", value: "2" },
    { label: "Core Technologies", value: "10+" },
    { label: "Client Satisfaction", value: "100%" },
    { label: "Uptime & Quality", value: "99.9%" }
  ]
};

export const skillsData = [
  {
    category: "Frontend Excellence",
    icon: "Layout",
    skills: [
      { name: "React", level: 95, tag: "Library", desc: "Hooks, Context, State Management, Vite, SPA Architecture" },
      { name: "Angular", level: 85, tag: "Framework", desc: "TypeScript, RxJS, Modules, Directives, Dependency Injection" },
      { name: "JavaScript (ES6+)", level: 95, tag: "Core Language", desc: "Async/Await, Closures, DOM, Fetch API, Performance" },
      { name: "HTML5", level: 98, tag: "Markup", desc: "Semantic Elements, Accessibility (a11y), SEO Best Practices" },
      { name: "CSS3", level: 95, tag: "Styling", desc: "Flexbox, Grid, Animations, Custom Variables, Glassmorphism" }
    ]
  },
  {
    category: "Backend & Systems",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 90, tag: "Runtime", desc: "RESTful APIs, Express, Middleware, Authentication, Async I/O" },
      { name: ".NET", level: 88, tag: "Framework", desc: "C#, ASP.NET Core, Web APIs, Entity Framework, Architecture" }
    ]
  },
  {
    category: "Database & Data Architecture",
    icon: "Database",
    skills: [
      { name: "SQL", level: 92, tag: "Query Language", desc: "Schema Design, Stored Procedures, Views, Data Modeling" },
      { name: "SQL Server", level: 88, tag: "Relational DB", desc: "T-SQL, Stored Procedures, Index Tuning, Enterprise DB Management" },
      { name: "PostgreSQL", level: 88, tag: "Relational DB", desc: "Complex Queries, Indexing, Joins, Triggers, Optimization" },
      { name: "MongoDB", level: 85, tag: "NoSQL DB", desc: "Document Collections, Aggregation Pipeline, Mongoose" }
    ]
  }
];

export const projectsData = [
  // Frontend Projects
  {
    id: "waveform",
    title: "WaveForm — The Audio Technology Conference",
    category: "Frontend",
    url: "https://waveform-technology-conference.netlify.app/",
    description: "Immersive high-energy conference landing page designed for an audio technology summit. Features interactive speaker grids, event schedules, venue maps, and ticket selection.",
    highlights: [
      "Dynamic interactive schedule breakdown",
      "Sleek audio-wave visuals & dark theme aesthetic",
      "Fully responsive for mobile, tablet, and desktop viewports"
    ],
    tech: ["React", "HTML5", "CSS3", "JavaScript", "Netlify"],
    featured: true
  },
  {
    id: "medicare-one",
    title: "Medicare-One — Premium Healthcare Hospital",
    category: "Frontend",
    url: "https://medicare-one.netlify.app/",
    description: "Modern, trust-building hospital portal showcasing specialized medical departments, online doctor appointment booking interface, patient reviews, and emergency info.",
    highlights: [
      "Interactive appointment scheduler form",
      "Medical department showcase cards",
      "Clean clinical aesthetic designed for high conversion"
    ],
    tech: ["React", "JavaScript", "CSS Variables", "Lucide Icons"],
    featured: true
  },
  {
    id: "aurum-estates",
    title: "Aurum Estates — Ultra-Luxury Real Estates",
    category: "Frontend",
    url: "https://aurum-real-estates.netlify.app/",
    description: "High-end real estate showcase web app tailored for ultra-luxury properties. Includes interactive property filter, virtual tour previews, architectural floorplans, and consultation booking.",
    highlights: [
      "Glassmorphism property gallery drawer",
      "Interactive price & amenity filter options",
      "Elegant typography and smooth entrance transitions"
    ],
    tech: ["React", "Modern CSS", "JavaScript", "Glassmorphism"],
    featured: true
  },
  {
    id: "growthwave",
    title: "GrowthWave — Digital Marketing Agency",
    category: "Frontend",
    url: "https://growth-wave.netlify.app/",
    description: "High-converting digital agency platform showcasing marketing services, ROI growth metrics, client case studies, and interactive strategy session calculator.",
    highlights: [
      "Animated ROI counter & client milestone metrics",
      "Interactive service card highlights",
      "Responsive layout optimized for performance"
    ],
    tech: ["React", "JavaScript", "CSS Animations", "Responsive UX"],
    featured: false
  },
  {
    id: "luxewear",
    title: "LUXEWEAR — Premium Wear E-Commerce",
    category: "Frontend",
    url: "https://luxe-wear.netlify.app/",
    description: "Next-gen luxury fashion store UI featuring dynamic product filtering, slide-over cart drawer, size selection matrix, and editorial lookbook layout.",
    highlights: [
      "Interactive shopping cart state management",
      "Product quick-view drawer & size filter",
      "High-fashion minimalist aesthetic"
    ],
    tech: ["React", "JavaScript", "State Management", "CSS Modules"],
    featured: false
  },
  {
    id: "aura-expeditions",
    title: "Aura-Expeditions — The Travel Agency",
    category: "Frontend",
    url: "https://aura-expeditions.netlify.app/",
    description: "Vibrant travel booking & tour expedition platform. Features destination discovery, interactive itinerary preview, package comparison, and booking modal.",
    highlights: [
      "Interactive destination search & category filter",
      "Day-by-day expedition timeline presentation",
      "Immersive hero background & destination cards"
    ],
    tech: ["React", "JavaScript", "Modern CSS", "Web APIs"],
    featured: false
  },

  // Full Stack Projects
  {
    id: "restaurant-mgmt",
    title: "Restaurant Management System",
    category: "Full-Stack",
    url: null,
    description: "Comprehensive POS & restaurant operation system. Enables real-time order processing from table interfaces directly to live kitchen displays, table reservations, inventory management, and revenue analytics.",
    highlights: [
      "Real-time kitchen order queue updates",
      "Interactive visual table layout booking system",
      "PostgreSQL database backend with Node.js REST API",
      "Sales reports & inventory alert engine"
    ],
    tech: ["React", "Node.js", "PostgreSQL", "SQL", "Express"],
    featured: true
  },
  {
    id: "bank-applicant",
    title: "Bank Applicant System",
    category: "Full-Stack",
    url: null,
    description: "Enterprise banking platform for managing loan and account applications. Features automated risk assessment scoring, document verification, multi-stage approval workflows, and audit logging.",
    highlights: [
      "Architected with .NET Core & C# backend services",
      "SQL Server database with stored procedures for financial transactions",
      "Role-based access control (Applicant, Loan Officer, Auditor)",
      "Secure document upload and credit rating pipeline"
    ],
    tech: [".NET", "SQL", "React", "C#", "Web API"],
    featured: true
  },
  {
    id: "recruitment-mgmt",
    title: "Recruitment Management Project",
    category: "Full-Stack",
    url: null,
    description: "End-to-end Applicant Tracking System (ATS) allowing hiring teams to post job vacancies, track candidate application stages, schedule interviews, and parse candidate resumes.",
    highlights: [
      "Built with Angular frontend & Node.js micro-backend",
      "Flexible MongoDB document storage for candidate profiles & resumes",
      "Kanban-style candidate pipeline management board",
      "Automated interview invitation email integration"
    ],
    tech: ["Angular", "Node.js", "MongoDB", "Express", "TypeScript"],
    featured: true
  }
];

export const experienceTimeline = [
  {
    role: "Full-Stack Software Engineer",
    company: "Core Technology Solutions",
    period: "2024 — Present",
    desc: "Designing and engineering scalable full-stack applications with React, Angular, Node.js, and .NET. Building optimized SQL & PostgreSQL database schemas and high-throughput REST APIs.",
    achievements: [
      "Developed high-performance web applications serving thousands of active users",
      "Created scalable database architectures with PostgreSQL and MongoDB",
      "Implemented responsive, component-driven UIs in React and Angular"
    ]
  },
  {
    role: "Frontend Developer & Web Specialist",
    company: "Digital Innovation Lab",
    period: "2023 — 2024",
    desc: "Spearheaded frontend web application development for client products spanning e-commerce, healthcare, luxury real estate, and travel.",
    achievements: [
      "Crafted 6+ bespoke web applications deployed on Netlify with 99.9% uptime",
      "Optimized page speed and Core Web Vitals to achieve sub-second load times",
      "Built custom design systems and glassmorphic UI interfaces"
    ]
  }
];

export const codeSnippets = {
  aboutMe: `// Vian Pandya - Freelance Engineer Profile
const developer = {
  name: 'Vian Pandya',
  contact: 'vianpandya66@gmail.com',
  location: 'Remote / Worldwide',
  role: 'Freelance Full-Stack & UI Architect',
  status: 'Open for Freelance Contracts',
  stack: [
    'React', 'Angular', 'Node.js', '.NET',
    'PostgreSQL', 'SQL', 'MongoDB'
  ],
  services: [
    'Full-Stack Web App Development',
    'Custom REST API Architecture',
    'Database & UI Performance Optimization'
  ],
  isAvailableForHire: true
};

console.log(\`Ready to build awesome software with \${developer.name}\`);`
};
