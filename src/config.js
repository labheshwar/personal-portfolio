export const portfolioData = [
  {
    name: 'Merchant Acquiring & QR/RTP Platform',
    description:
      'Ground-up merchant-acquiring and QR/RTP payment platform built for Axian, a fintech offering merchant-acquiring and QR payment solutions. Java/Spring Boot backend with a React frontend, deployed via Docker and Kubernetes on PostgreSQL.',
    techStack: [
      'Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL',
      'Docker', 'Kubernetes', 'RabbitMQ', 'JWT', 'REST APIs',
    ],
    githubLink: '#',
    demoLink: '#',
    isProfessional: true,
    isPrivate: true,
    impact: [
      'Leading the build from the tech side, owning architecture across backend and frontend',
      'Core modules end-to-end: KYC-driven merchant onboarding (single and bulk), terminal creation, QR and RTP payment flows, notifications, multi-institution support',
    ],
  },
  {
    name: 'TaskVare',
    description:
      'Modular SaaS productivity dashboard, solo-designed and delivered end-to-end in under three months. Dynamic drag-and-drop task views with per-user layout persistence and real-time SignalR chat that removed manual refreshes.',
    techStack: ['React', 'Redux', 'Material-UI', 'SignalR', 'g2Plot', 'Node.js'],
    githubLink: '#',
    demoLink: '#',
    isProfessional: true,
    isPrivate: true,
    impact: [
      'Reusable 8-component UI library and skeleton-loading states lifted perceived performance (LCP) by 40%',
      'Cut development time for new views by 30%',
    ],
  },
  {
    name: 'LedgerFlow',
    description:
      'Double-entry ledger and reconciliation microservice in Java 17/Spring Boot, modeling core fintech accounting patterns: idempotent transaction posting, automated reconciliation, and audit trails.',
    techStack: [
      'Java 17', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Redis',
      'RabbitMQ', 'Docker', 'JUnit', 'Mockito',
    ],
    githubLink: '#',
    demoLink: '#',
    impact: [
      'Redis caching for balance lookups and JWT-secured REST APIs',
      'RabbitMQ-based async processing for reconciliation jobs, covered with JUnit/Mockito',
    ],
  },
  {
    name: 'Students Guide',
    description:
      'Multi-university platform for onboarding and management, with role-based posts and announcements across admins, teachers and students. Adds Google Classroom-style classroom management plus a cross-institution job portal where HR teams list openings any university\u2019s students can apply to.',
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io', 'TailwindCSS', 'Material UI'],
    githubLink: 'https://github.com/labheshwar/students-guide',
    demoLink: 'https://students-guide.vercel.app',
  },
  {
    name: 'Reactive Express',
    description:
      'Full-stack e-commerce platform with authentication, cart, Stripe payment integration and order management.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Stripe'],
    githubLink: 'https://github.com/labheshwar/ReactiveExpress',
    demoLink: 'https://reactive-express.vercel.app/',
  },
];

export const experience = [
  {
    position: 'Software Engineer (Java, Spring Boot)',
    company: 'PaysysLabs',
    location: 'Karachi, PK',
    duration: 'Oct 2023 – Present',
    description: [
      'Leading (tech side) the ground-up build of a merchant-acquiring and QR/RTP payment platform for Axian, a fintech company offering merchant-acquiring and QR payment solutions — architecting a Java/Spring Boot backend and React frontend deployed via Docker and Kubernetes on PostgreSQL.',
      'Own core modules end-to-end: merchant onboarding (single and bulk, with dynamic KYC and document handling), terminal creation and payment handling, QR and RTP payment flows, notification management, and multi-institution support.',
      'Run day-to-day client meetings to gather requirements and translate them into technical solutions; use GitHub Copilot and other AI tooling to accelerate development.',
      'Adopted CodeRabbit for AI-driven code review, lowering PR iteration time by 2 days/week on average; integrated Snyk into CI/CD to scan 50+ dependencies, blocking 3 critical-severity issues pre-production.',
      'Automated SFTP file-transfer pipelines via Node.js cron jobs, eliminating manual processing errors.',
    ],
  },
  {
    position: 'Frontend Developer',
    company: 'Transviti',
    location: 'Karachi, PK',
    duration: 'Jul 2023 – Oct 2023',
    description: [
      'Solo-designed and delivered TaskVare, a modular SaaS productivity dashboard, end-to-end in under 3 months — dynamic drag-and-drop task views with per-user layout persistence and real-time SignalR chat that eliminated manual refreshes.',
      'Built a reusable 8-component UI library and skeleton-loading states (React, Redux, MUI, g2Plot), lifting perceived performance (LCP) by 40% and cutting development time for new views by 30%.',
    ],
  },
];

export const skills = {
  languages: ['Java', 'TypeScript', 'JavaScript'],
  backend: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'JWT', 'Microservices', 'RabbitMQ'],
  frontend: ['React.js', 'Next.js', 'Redux', 'Zustand', 'Tailwind CSS', 'MUI', 'AntD', 'Bootstrap'],
  databases: ['PostgreSQL', 'Oracle SQL', 'MongoDB', 'Redis'],
  devOpsTools: ['Docker', 'Kubernetes', 'Git', 'GitLab CI/CD', 'Bash', 'Postman', 'JIRA', 'SFTP', 'SignalR'],
  aiSecurity: ['GitHub Copilot', 'CodeRabbit', 'Snyk'],
  practices: ['Agile/Scrum', 'TDD', 'JUnit', 'Mockito', 'Jest', 'CI/CD', 'Secure SDLC'],
};

export const education = {
  degree: 'Bachelors in Computer Science',
  cgpa: '3.93/4.0',
  duration: '2020 – 2023',
  university: 'University of Sindh',
};

export const personalInfo = {
  name: 'LABHESHWAR',
  title: 'Full-Stack Software Engineer | Java & React',
  email: 'labheshwar.work@gmail.com',
  phone: '+923438370414',
  linkedin: 'https://www.linkedin.com/in/labheshwar',
  github: 'https://www.github.com/labheshwar',
  // Always-current copy. The bundled PDF stays the primary download because
  // it cannot 404 or sit behind a Drive permission prompt.
  resumeUrl: 'https://drive.google.com/file/d/1mR1974zNZRugXw8oePAQLbdF6DG5v3it/view?usp=sharing',
  bio: 'Full-stack engineer with 3+ years delivering fintech platforms across Java/Spring Boot backends and React frontends. Currently leading, from the tech side, the ground-up build of a merchant-acquiring and QR/RTP payment platform — covering KYC-driven onboarding, terminal and payment processing, and notification systems. Comfortable owning the full SDLC, containerized deployments (Docker/Kubernetes), and running client-facing requirement discussions.',
  tagline: 'Delivering scalable solutions under tight deadlines while maintaining clean architecture and high code quality.',
};
