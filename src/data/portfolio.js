// Single source of truth for all portfolio content.

export const profile = {
  name: 'Divya Verma',
  roles: [
    'Software Engineer',
    'Quality Analyst',
    'React Developer',
    'AI Enthusiast',
    'AWS Cloud Practitioner',
  ],
  summary:
    'I build reliable software, modern web applications and AI-powered solutions while ensuring exceptional product quality through structured testing, automation and cloud technologies.',
  email: 'pv6666324@gmail.com',
  phone: '+91 8381893831',
  phoneHref: 'tel:+918381893831',
  github: 'https://github.com/Divyaverma31',
  githubUsername: 'Divyaverma31',
  linkedin: 'https://www.linkedin.com/in/divya-verma-730b70261',
  resumeFile: '/resume.pdf',
};

export const about = {
  paragraphs: [
    'I am a Computer Science Engineering graduate with hands-on experience in Quality Assurance, Frontend Development, AI Applications, Cloud Computing, and Software Engineering.',
    'I worked as a Quality Analyst at Paytm where I contributed to testing fintech applications, ensuring software quality, release stability, and seamless user experiences.',
    'I enjoy building AI-powered applications, modern web interfaces, cloud solutions, and continuously learning emerging technologies.',
  ],
  highlights: [
    'Quality Assurance',
    'Frontend Development',
    'AI & LLM Applications',
    'AWS Cloud',
    'Agile Development',
    'Problem Solving',
    'Team Collaboration',
  ],
  stats: [
    { label: 'Projects Built', value: 10, suffix: '+' },
    { label: 'Technologies', value: 25, suffix: '+' },
    { label: 'Certifications', value: 2, suffix: '' },
    { label: 'Hackathon Finalist', value: 1, suffix: 'x' },
  ],
};

export const experience = [
  {
    role: 'Quality Analyst',
    company: 'Paytm (One97 Communications Ltd.)',
    location: 'Noida, India',
    period: 'January 2026 – June 2026',
    points: [
      'Executed manual and automated testing for fintech web applications.',
      'Improved software quality and release stability.',
      'Performed Regression, Smoke, Sanity and End-to-End Testing.',
      'Designed and executed Test Cases.',
      'Reported and tracked defects using Jira.',
      'Collaborated closely with Developers and Product Teams.',
      'Used Jenkins for automated execution.',
      'Validated onboarding, investment, portfolio and transaction workflows.',
      'Worked in Agile methodology.',
      'Gained exposure to CI/CD pipelines and release processes.',
    ],
  },
  {
    role: 'AWS APAC Solutions Architecture Virtual Experience',
    company: 'Forage',
    location: 'Remote',
    period: 'September 2025',
    points: [
      'Designed scalable cloud architecture using AWS Elastic Beanstalk.',
      'Proposed optimized hosting architecture and cost model.',
    ],
  },
];

export const skillGroups = [
  {
    title: 'Programming',
    icon: 'code',
    skills: ['JavaScript', 'C', 'C++', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: 'layout',
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript ES6+', 'Responsive Design'],
  },
  {
    title: 'AI & Software Engineering',
    icon: 'brain',
    skills: [
      'Prompt Engineering',
      'Large Language Models',
      'AI Agents',
      'FastAPI',
      'REST APIs',
      'Retrieval-Augmented Generation (RAG)',
    ],
  },
  {
    title: 'Quality Engineering',
    icon: 'shield',
    skills: [
      'Manual Testing',
      'Regression Testing',
      'Smoke Testing',
      'Sanity Testing',
      'End-to-End Testing',
      'Test Case Design',
      'Jira',
      'Postman',
      'Agile',
    ],
  },
  {
    title: 'Cloud',
    icon: 'cloud',
    skills: [
      'AWS EC2',
      'AWS S3',
      'CloudFormation',
      'IAM',
      'Lambda',
      'Linux',
      'Git',
      'GitHub',
      'CI/CD Pipelines',
    ],
  },
  {
    title: 'Tools',
    icon: 'wrench',
    skills: ['VS Code', 'Chrome DevTools', 'Dialogflow', 'JWT'],
  },
];

export const projects = [
  {
    featured: true,
    title: 'SHL Assessment Recommender',
    tech: ['Python', 'FastAPI', 'LLM', 'BM25', 'Pydantic', 'BeautifulSoup', 'Render', 'REST APIs'],
    description:
      'An AI-powered conversational recommendation system that recommends relevant SHL assessments through natural language conversations.',
    features: [
      'BM25 retrieval over 377 assessments',
      'Single-call LLM architecture',
      'Prompt injection protection',
      'Strict API validation using Pydantic',
      'Evaluation framework measuring Recall@10 across conversation traces',
      'Deployed on Render with production-ready health monitoring',
    ],
    github: 'https://github.com/Divyaverma31/shl-recommender',
    demo: '',
    gradient: 'from-indigo-600 via-blue-600 to-cyan-500',
  },
  {
    title: 'AI Agent Evaluation Suite',
    tech: ['Python', 'JavaScript', 'Rust', 'Terraform', 'Docker'],
    description:
      'A structured benchmarking framework to evaluate AI coding agents across software engineering workflows.',
    features: [
      'Repository analysis and debugging benchmarks',
      'API mapping and architecture understanding tasks',
      'Performance profiling workflows',
      'Evidence-based reporting with citations',
    ],
    github: 'https://github.com/Divyaverma31/AI_Learning',
    demo: '',
    gradient: 'from-violet-600 to-indigo-500',
  },
  {
    title: 'LegalQuestor',
    tech: ['React', 'Node.js', 'MongoDB', 'Dialogflow', 'JWT'],
    description:
      'A legal assistance platform helping crime victims through AI-powered legal guidance and support.',
    features: [
      'Multilingual chatbot support via Dialogflow',
      'Document preparation assistance',
      'Nearby legal resource discovery',
      'JWT-secured REST APIs',
    ],
    github: 'https://github.com/Divyaverma31/LegalQuestor',
    demo: '',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'Multi-Tenant SaaS Notes App',
    tech: ['Node.js', 'Express.js', 'JWT', 'MongoDB', 'Vercel'],
    description:
      'A secure multi-tenant SaaS application with complete tenant isolation and role-based access.',
    features: [
      'Tenant isolation and JWT authentication',
      'Role-based authorization',
      'Subscription management',
      'REST APIs with automated endpoint testing',
    ],
    github: 'https://github.com/Divyaverma31/saas-notes-app',
    demo: '',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'Cloud Resume Website',
    tech: ['AWS', 'S3', 'CloudFront', 'IAM', 'Route53'],
    description:
      'A personal resume website deployed on secure, low-latency AWS cloud infrastructure.',
    features: [
      'Static hosting on AWS S3',
      'CloudFront CDN for global delivery',
      'Custom domain via Route 53',
      'IAM-secured cloud infrastructure',
    ],
    github: 'https://github.com/Divyaverma31',
    demo: '',
    gradient: 'from-orange-500 to-amber-500',
  },
];

export const achievements = [
  {
    title: 'Smart India Hackathon 2025 Finalist',
    description:
      'Selected among national finalists. Contributed to an automation-driven DevOps solution covering deployment automation, workflow optimization and implementation.',
    icon: 'trophy',
  },
  {
    title: 'Fintech Quality at Scale — Paytm',
    description:
      'Strengthened release stability for high-traffic fintech applications by building Selenium automation suites executed through Jenkins CI/CD, cutting manual testing effort across regression cycles.',
    icon: 'shield',
  },
  {
    title: 'Production AI System Deployed',
    description:
      'Shipped an AI-powered SHL assessment recommender to production on Render — BM25 retrieval over 377 assessments, prompt injection protection and Recall@10 evaluation framework.',
    icon: 'rocket',
  },
  {
    title: '24-Task AI Agent Benchmark',
    description:
      'Designed and executed a structured 24-task evaluation suite benchmarking AI coding agents across codebase analysis, greenfield development and DevOps workflows.',
    icon: 'target',
  },
  {
    title: '1st Place — Project Innovation',
    description:
      'Secured first position in the Project Innovation event at the department level in college, competing against peer teams with an original engineering project.',
    icon: 'medal',
  },
];

export const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    description: 'Foundational certification covering AWS Cloud concepts, security and architecture.',
    link: '/aws-cloud-practitioner-certificate.pdf',
  },
  {
    title: 'AWS Academy Cloud Architecting',
    issuer: 'AWS Academy',
    description: 'Graduate credential for architecting solutions on AWS following best practices.',
    link: 'https://www.credly.com/badges/cef3cae3-53da-43ce-b3cf-31000731893f/print',
  },
];

export const education = {
  institute: 'KIET Group of Institutions',
  degree: 'Bachelor of Technology',
  field: 'Computer Science & Engineering',
  cgpa: '8.4',
  graduation: '2026',
  location: 'Ghaziabad, Uttar Pradesh',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];
