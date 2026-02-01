export const portfolioData = [
  {
    name: 'Acquiring Suite',
    description:
      'Enterprise-grade international acquiring and payment processing platform with Back Office for merchant management and Merchant Portal for transaction dashboards. Features multi-step onboarding, bulk QR generation, role-based permissions, and real-time analytics.',
    techStack: [
      'TypeScript',
      'Next.js',
      'React',
      'Redux',
      'Zustand',
      'Zod',
      'React Query',
      'Ant Design',
      'Tailwind CSS',
      'Node.js',
      'SQL',
      'Oracle',
      'Jest',
    ],
    githubLink: '#',
    demoLink: '#',
    isProfessional: true,
  },
  {
    name: 'TaskVare',
    description:
      'Modular, customizable dashboard with drag-and-drop layout functionality using React DnD. Features real-time messaging with SignalR integration and interactive data visualization using g2Plots for project analytics.',
    techStack: ['React', 'Redux', 'Material-UI', 'SignalR', 'g2Plots', 'Node.js'],
    githubLink: '#',
    demoLink: '#',
    isProfessional: true,
  },
  {
    name: 'Students Guide',
    description:
      'University FYP enhancing education through classroom tools, job searches, and course suggestions. Multi-role platform supporting Students, Teachers, Admins, and Superadmins with real-time features.',
    techStack: [
      'Next.js',
      'TailwindCSS',
      'Material UI',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'AWS S3',
    ],
    githubLink: 'https://github.com/labheshwar/students-guide',
    demoLink: 'https://students-guide.vercel.app',
  },
  {
    name: 'Reactive Express',
    description:
      'Full-stack E-Commerce platform with complete user authentication, shopping cart functionality, Stripe payment integration, and order management system.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Stripe'],
    githubLink: 'https://github.com/labheshwar/ReactiveExpress',
    demoLink: 'https://reactive-express.vercel.app/',
  },
];

export const experience = [
  {
    position: 'Software Engineer',
    company: 'PaysysLabs',
    location: 'Karachi (Onsite)',
    duration: 'Oct 2023 – Present',
    description: [
      'Led end-to-end development of international acquiring suite, scaling local platform to international market demands within 2.5 months.',
      'Delivered Back Office (merchant management) and Merchant Portal (transaction dashboard) through weekly sprint cycles.',
      'Architected reusable Base API class with error handling, authentication, and response transformation.',
      'Implemented Container/Presentation pattern for improved testability and code reusability.',
      'Applied Adapter pattern to standardize third-party payment gateway integrations.',
      'Built dynamic multi-step Merchant Onboarding with conditional fields, validations, and role-based access.',
      'Created responsive Merchant Portal with transaction monitoring, transfers, withdrawals, and dashboards.',
      'Integrated React Query for efficient state management and reduced API calls.',
      'Built TOTP two-factor authentication using Node.js, Express, and Speakeasy.',
      'Automated SFTP processes with Node.js cron jobs, eliminating manual work.',
      'Integrated Spring Boot REST APIs for payment processing and data services.',
    ],
  },
  {
    position: 'Frontend Developer',
    company: 'Transviti',
    location: 'Karachi (Hybrid)',
    duration: 'July 2023 – Sept 2023',
    description: [
      'Built TaskVare dashboard with drag-and-drop functionality using React DnD, allowing users to customize layouts.',
      'Implemented end-to-end real-time messaging system using SignalR with skeleton loaders for enhanced UX.',
      'Developed responsive, modern UI components using Material-UI, Redux for state management, and g2Plots for data visualization.',
      'Optimized component rendering and implemented code-splitting strategies for improved application performance.',
    ],
  },
];

export const skills = {
  languages: ['JavaScript', 'TypeScript', 'Java'],
  frameworks: ['React', 'Next.js', 'Node.js', 'Express.js', 'Redux', 'Zod', 'Zustand'],
  webServices: ['REST API', 'SignalR', 'Socket.io', 'Axios', 'React Query'],
  uiLibraries: ['Tailwind CSS', 'Material UI', 'Ant Design', 'React Bootstrap', 'Shad CN'],
  tools: ['VSCode', 'GitHub', 'Git', 'Bitbucket', 'Remix'],
  others: ['Prisma', 'MongoDB Atlas', 'Ether.js', 'OOP', 'Jest'],
};

export const education = {
  degree: 'Bachelors in Computer Science',
  cgpa: '3.93/4.0',
  university: 'University of Sindh',
};

export const personalInfo = {
  name: 'LABHESHWAR',
  title: 'Software Engineer',
  email: 'labheshwar.work@gmail.com',
  phone: '+923438370414',
  linkedin: 'https://www.linkedin.com/in/labheshwar',
  github: 'https://www.github.com/labheshwar',
  bio: 'Full-stack Software Engineer with around 3 years of experience in designing and building enterprise-grade applications using React, Next.js, and TypeScript. Successfully led end-to-end development of an international acquiring and payment processing platform for PaysysLabs.',
  tagline: 'Delivering scalable solutions under tight deadlines while maintaining clean architecture and high code quality.',
};
