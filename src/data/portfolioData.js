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
  },
  {
    category: "Cloud & Hosting Platforms",
    icon: "Cloud",
    skills: [
      { name: "Hostinger", level: 90, tag: "Web Hosting", desc: "Shared & VPS Hosting, Domain & DNS Setup, hPanel Administration, SSL Configuration" },
      { name: "Netlify", level: 95, tag: "PaaS / Jamstack", desc: "Continuous Deployment, Serverless Functions, Custom Domains, Build Automation" },
      { name: "Vercel", level: 92, tag: "Frontend Cloud", desc: "React & Next.js Deployment, Edge Network, Zero-Config CI/CD, Serverless APIs" },
      { name: "Render", level: 70, tag: "Cloud Services", desc: "Full-Stack Web Services, Git Build Triggers, PostgreSQL & Redis Hosting" }
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
    description: "High-performance Single Page Application (SPA) built with Vanilla JavaScript and HTML5/CSS3. Features a live event countdown, procedural audio waveform visualizer engine, interactive multi-track schedule filter, speaker detail modals, and an interactive ticket calculator.",
    highlights: [
      "Interactive Schedule & Track Filters: Multi-track agenda explorer with Day 1/2/3 tabs, category filters (Keynote, Workshop, Panel), and real-time live search across session titles and speakers.",
      "Procedural Equalizer Visual Engine: Custom JavaScript equalizer bars (seededBars) and pure CSS keyframes generating dynamic audio bar visualizers without external raster assets.",
      "Speaker Profiles & Ticket Calculator: 12 speaker cards with detail modals, tier pass selector (Standard, All-Access, Team), workshop add-on toggles, promo code verification (EARLYBIRD), and toast notifications.",
      "SPA Routing & Countdown Clock: Client-side view transitions between Home, Schedule, Speakers, and Register sections with a live event countdown timer leading up to conference launch day."
    ],
    tech: ["Vanilla JS", "HTML5", "CSS3", "SVG Graphics", "Netlify", "Responsive UX"],
    featured: true
  },
  {
    id: "medicare-one",
    title: "Medicare-One — Premium Healthcare Hospital",
    category: "Frontend",
    url: "https://medicare-one.netlify.app/",
    description: "Single-page medical portal built with React, TypeScript, and Vite. Features a pulse-animated loader, real-time doctor search & filtering, a 3-step appointment booking wizard, preventive health plans, and 24/7 emergency care.",
    highlights: [
      "Interactive Loader & Hero Section: Full-screen pulse-animated portal loader with smooth entrance transitions, accredited doctor highlights, and instant consultation shortcuts.",
      "Find Specialist & Doctor Search: Real-time doctor search by name or specialty, clickable department filter chips (Cardiology, Neurology, Orthopedics, etc.), rating cards, and live status indicators.",
      "3-Step Appointment Booking Wizard: Structured reservation flow covering patient info (In-Person vs. Video), department/doctor selection with symptom notes, date/time slot picker, and reference ID confirmation.",
      "Health Packages & Emergency Hub: Comparative preventive care plans (Essential, Premium, Total Wellness) with parameter lists alongside high-impact 24/7 trauma & ambulance emergency support info."
    ],
    tech: ["React", "TypeScript", "Vite", "JavaScript", "CSS Variables", "Netlify"],
    featured: true
  },
  {
    id: "aurum-estates",
    title: "Aurum Estates — Ultra-Luxury Real Estates",
    category: "Frontend",
    url: "https://aurum-real-estates.netlify.app/",
    description: "Ultra-luxury real estate web application built with Angular 18, TypeScript, and Tailwind CSS v4. Features Cormorant Garamond serif aesthetics, multi-tab property filtering, interactive mortgage calculator, and property detail modals.",
    highlights: [
      "Exclusive Property Directory & Modals: Luxury listing cards (Villas, Penthouses, Estates) with status badges, specifications, favorite toggle, and image preview modals.",
      "Interactive Mortgage Calculator: Real-time loan calculator with dynamic sliders for property price, down payment, loan term, and interest rate calculating monthly repayments.",
      "Agent Directory & Scroll Animations: Professional advisor profile cards, animated client trust metrics, expandable FAQ panels, and Intersection Observer scroll reveals.",
      "Multi-Tab Search & Filter System: Advanced property filter (Buy, Rent, Off-Market) with real-time dropdown selectors for location, property type, budget, and bedrooms."
    ],
    tech: ["Angular 18", "TypeScript", "Tailwind CSS v4", "Lucide Angular", "Reactive Forms", "Netlify"],
    featured: true
  },
  {
    id: "growthwave",
    title: "GrowthWave — Digital Marketing Agency",
    category: "Frontend",
    url: "https://growth-wave.netlify.app/",
    description: "Interactive digital marketing agency web app built with Angular 18, TypeScript, and Tailwind CSS. Features live interactive analytics dashboards (Chart.js), animated CountUp metrics, Swiper carousels, and multi-package pricing tiers.",
    highlights: [
      "Interactive Analytics Dashboard: Live Chart.js analytics preview displaying organic traffic, social engagement, revenue, and SEO performance metrics across interactive tabs.",
      "Animated Metrics & Social Proof: CountUp.js animated agency statistics, continuous client logo marquee, and interactive service highlight cards.",
      "Portfolio & Testimonials Carousels: Swiper Angular powered case-study slider with category filtering, customer review carousel, and expandable FAQ accordion.",
      "Work Methodology & Pricing Plans: Step-by-step agency process pipeline, 3-tier service packages (Startup, Growth, Enterprise), and contact form with custom validation states."
    ],
    tech: ["Angular 18", "TypeScript", "Tailwind CSS", "Chart.js", "Swiper", "Netlify"],
    featured: true
  },
  {
    id: "luxewear",
    title: "LUXEWEAR — Premium E-Commerce Showcase",
    category: "Frontend",
    url: "https://luxe-wear.netlify.app/",
    description: "Luxury fashion e-commerce storefront built with React 19, Vite, and Tailwind CSS v4. Features Framer Motion physics animations, interactive preloader, product double-image hover swaps, and Swiper v14 product carousels.",
    highlights: [
      "Framer Motion Preloader & Glass Navbar: Full-screen luxury loading curtain with dynamic progress, paired with a scroll-responsive blur glassmorphism navigation header.",
      "Interactive Product Cards: Dual-image hover swap (product vs. model view), quick-view overlays, slide-up add-to-cart CTAs, color swatches, and discount badges.",
      "Swiper Carousels & Masonry Gallery: Touch-enabled Swiper v14 sliders for new arrivals and curated collections alongside a photography masonry lookbook layout.",
      "Animated Metrics & Trust Guarantees: React-CountUp animated shopper metrics, expandable FAQ accordions, customer reviews, and promotional newsletter subscription."
    ],
    tech: ["React 19", "Vite", "Tailwind CSS v4", "Framer Motion", "Swiper v14", "Netlify"],
    featured: true
  },
  {
    id: "aura-expeditions",
    title: "Aura-Expeditions — Premium Travel & Tour Agency",
    category: "Frontend",
    url: "https://aura-expeditions.netlify.app/",
    description: "Premium travel booking & expedition platform built with React 19 and Vite 8. Features real-time destination search, a multi-step custom trip builder, climate guides, and universal consultation booking.",
    highlights: [
      "Smart Search & Category Filter: Real-time text search and category filtering (Tropical, Mountain, Cultural, Luxury, Adventure) for top global destination cards.",
      "Multi-Step Custom Trip Builder: Interactive 4-step vacation budget estimator based on destination, travel style, duration, guest count, and premium VIP add-ons.",
      "Seasonal Climate & Weather Guide: Interactive climate tool helping travelers choose the optimal month to visit based on average temperatures and weather insights.",
      "Destination Modals & Consultation: Detailed modal popups with itineraries, seasonal highlights, client review cards, and universal trip booking popup flow."
    ],
    tech: ["React 19", "Vite 8", "JavaScript", "Glassmorphism", "CSS Variables", "Netlify"],
    featured: true
  },

  // Full Stack Projects
  {
    id: "restaurant-mgmt",
    title: "Restaurant Management System",
    category: "Full-Stack",
    url: null,
    description: "Role-based Restaurant Management System built with ASP.NET MVC (.NET), C#, and PostgreSQL. Streamlines end-to-end restaurant operations including customer registration, table allocation with an optimized table-merging algorithm, order processing, kitchen workflows (KOT), and administrative management.",
    highlights: [
      "Admin Module: User, Role & Permission Management (RBAC), menu item management, table & section configuration, customer order history, inventory tracking, and dynamic tax management.",
      "Account Manager (Receptionist) Module: Customer check-in with party size, waiting list queue management, intelligent seating allocation with an optimized table-merging algorithm to seat larger groups efficiently, real-time table & order status tracking (Ordered, Served, Cancelled, Completed), and order duration metrics.",
      "Kitchen Order Ticket (KOT) Module: Dedicated chef dashboard, automatic real-time ticket generation upon order placement, elapsed prep time display, item-level preparation tracking (Mark as Prepared/Unprepared), and kitchen completion workflows.",
      "Technical Highlights: ASP.NET Authentication with dynamic Role-Based Access Control (RBAC), Entity Framework & LINQ database queries, custom table-merging algorithm, RESTful APIs, dynamic tax calculation & billing engine, and modular role-tailored dashboards."
    ],
    tech: ["ASP.NET MVC", "C#", ".NET", "PostgreSQL", "JavaScript", "Bootstrap", "Entity Framework", "LINQ", "RBAC"],
    featured: true
  },
  {
    id: "event-mgmt",
    title: "Event Management System",
    category: "Full-Stack",
    url: null,
    description: "Enterprise Event Management System built with Angular 21, TypeScript, Kendo UI, ASP.NET Web API (.NET), and SQL Server. Streamlines the complete event planning lifecycle from client onboarding and inquiry conversion to sub-event management, tree-structured rate cards, and warehouse product allocations.",
    highlights: [
      "Client & Contact Module: Manages client profiles and multiple contact persons with high-performance server-side pagination, filtering, searching, sorting, and grouping using reusable Angular components.",
      "Event & Opportunity Engine: Manages Main Events and Sub-Events with location, duration, and hierarchical relationships; converts event inquiries into business opportunities upon client approval.",
      "Hierarchical Rate Card Module: Configures event and sub-event rate cards supporting labor charges, service costs, client-specific discounts, and tree-structured pricing models.",
      "Quotation & Inventory Workflow: Generates dynamic quotations with warehouse inventory allocation, quotation summary previews, and lifecycle status tracking (Saved, Active, Cancelled with reactivation support).",
      "Architecture & Cloud Highlights: Built RESTful APIs with CQRS and Domain-Driven Design (DDD) architecture, Entity Framework Core with LINQ, Azure Blob Storage for secure cloud file management, and Unit/Integration testing."
    ],
    tech: ["Angular 21", "TypeScript", ".NET", "ASP.NET Web API", "SQL Server", "C#", "Kendo UI", "CQRS / DDD", "Azure Storage"],
    featured: true
  },
  {
    id: "project-mgmt",
    title: "Project Management System",
    category: "Full-Stack",
    url: null,
    description: "Enterprise-grade Project Management Platform built on the PERN stack (PostgreSQL, Express, React, Node.js). Enables cross-functional agile teams to collaborate on project planning, task management, sprint tracking, resource allocation, real-time activity feeds, and project analytics.",
    highlights: [
      "Agile Task & Sprint Board Module: Interactive Kanban and Scrum task management boards with drag-and-drop workflow statuses (To Do, In Progress, Review, Completed), sprint planning, task estimation, priority tags, and sub-task checklists.",
      "Project & Milestone Tracker Module: Multi-project management dashboard featuring milestone tracking, team member assignment, role-based project access permissions (Admin, Project Manager, Developer, Client Observer), and deadline notifications.",
      "Real-Time Collaboration Engine: WebSocket-powered live activity feeds, task comments with file attachments, real-time status updates, and team member mention alerts.",
      "Resource & Analytics Dashboard: Workload distribution graphs, project progress charts, time tracking logs, sprint velocity metrics, and automated project summary report exports.",
      "Technical Highlights: Architected with Node.js & Express RESTful APIs, PostgreSQL relational database schema with complex JOINs & indexed queries, React state management, JWT authentication with Role-Based Access Control (RBAC), and modular component design."
    ],
    tech: ["PERN Stack", "PostgreSQL", "Express.js", "React", "Node.js", "Redux", "WebSockets", "JWT", "RBAC"],
    featured: true
  },
  {
    id: "dynamic-report-mgmt",
    title: "Dynamic Report Generation System",
    category: "Full-Stack",
    url: null,
    description: "Multi-tenant Dynamic Report Generation System built with ASP.NET Web API (.NET), C#, Dapper, and Kendo UI. Enables non-technical enterprise users to visually build, customize, execute, and export complex database reports across multiple database engines without writing SQL queries.",
    highlights: [
      "Dynamic Report Builder Module: Visual no-code report builder featuring table selection, custom join configuration (Inner, Left, Right), drag-and-drop column reordering, custom filters, and data aggregations.",
      "Report Execution & Export Engine: Generates reports dynamically based on user-defined configurations, presents data in interactive Kendo UI data grids, exports results to Excel, and enables saving/reusing report templates.",
      "Multi-Tenant & Multi-DB Architecture: Multi-tenant architecture supporting onboarding of multiple organizations; retrieves database metadata dynamically at runtime across SQL Server, PostgreSQL, and Oracle database providers.",
      "User & Permission Security (RBAC): Role-Based Access Control with tenant-isolated permissions, multi-tenant access switching, and admin control over accessible database tables, views, and columns.",
      "Technical Highlights: Metadata-driven reporting engine using Dapper and Stored Procedures for high-performance dynamic SQL query generation, database-agnostic schema discovery, and RESTful ASP.NET Web API services."
    ],
    tech: ["ASP.NET Web API", "C#", ".NET", "Dapper", "SQL Server", "PostgreSQL", "Oracle", "Kendo UI", "jQuery / AJAX", "Multi-Tenant"],
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
