import { Project, Experience, SkillCategory, Certification, EducationItem } from './types';

export const personalInfo = {
  name: "Swapna Sri Kamireddy",
  title: "AI Engineer & Full-Stack Developer",
  email: "swapnasri_kamireddy@srmap.edu.in",
  phone: "+91 9347668607",
  github: "https://github.com/swapnasrikamireddy",
  linkedin: "https://www.linkedin.com/in/swapna-kamireddy-a6a28633b",
  location: "Amaravati, India",
  summary: "Computer Science undergraduate with a 9.4 CGPA, specializing in AI/ML, MERN stack development, and algorithmic optimization. Proven experience engineering intelligent recommendation platforms, predictive healthcare models, and data intelligence frameworks.",
  gpa: "9.4"
};

export const projectsData: Project[] = [
  {
    id: "ai-internship",
    title: "AI Internship Recommendation System",
    subtitle: "MERN Stack, Python & Machine Learning",
    description: [
      "Engineered an end-to-end intelligent platform that matches students with optimal internship roles based on profile and resume data.",
      "Integrated AI-driven resume parsing, semantic skill gap identification, and personalized course recommendations to maximize candidate hiring readiness.",
      "Implemented responsive dashboards for students and recruiters with low-latency candidate matching algorithms."
    ],
    tech: ["MERN Stack", "Python", "Machine Learning", "NLP", "Resume Parsing", "REST APIs"],
    category: "Full Stack",
    githubUrl: "https://github.com/swapnasrikamireddy/internship-recommendation-frontend",
    accentColor: "from-purple-500 to-pink-500"
  },
  {
    id: "codesentinel",
    title: "CodeSentinel AI Training Ground",
    subtitle: "Intelligent Source Code Analysis & Debugging",
    description: [
      "Developed an AI-powered code inspection system designed to analyze source code and detect syntax, logical, and runtime errors.",
      "Employs automated pattern extraction and machine learning heuristics to generate actionable feedback and bug solutions.",
      "Assists student developers with automated code quality scoring and real-time guidance."
    ],
    tech: ["Python", "Machine Learning", "Static Code Analysis", "AST", "AI Debugging"],
    category: "AI / ML",
    githubUrl: "https://github.com/swapnasrikamireddy/SCALAR",
    accentColor: "from-emerald-500 to-teal-400"
  },
  {
    id: "review-analysis",
    title: "BI Framework for Customer Review Analysis",
    subtitle: "Python, N-Gram Analytics & Tableau Dashboards",
    description: [
      "Built a robust customer sentiment intelligence system extracting consumer insights from textual feedback using Python and N-gram text analytics.",
      "Engineered interactive Tableau executive dashboards to visualize sentiment trends, NPS drivers, and product ratings.",
      "Delivered strategic business recommendations and data-driven intelligence for consumer satisfaction improvement."
    ],
    tech: ["Python", "N-gram Analytics", "Tableau", "Excel", "Data Visualization", "NLP"],
    category: "Data Visualization",
    accentColor: "from-amber-500 to-orange-500"
  },
  {
    id: "smartfare",
    title: "SmartFare – Travel Cost Optimization",
    subtitle: "Graph Theory, Dynamic Programming & Greedy Algorithms",
    description: [
      "Architected a minimum-cost multimodal transit routing engine utilizing Greedy and Dynamic Programming graph algorithms.",
      "Solves complex shortest-path and price-optimization constraints to identify the most cost-effective and time-efficient itineraries.",
      "Engineered an interactive frontend with intuitive route mapping and fare comparison calculations."
    ],
    tech: ["JavaScript", "Graph Algorithms", "Dynamic Programming", "Greedy Algorithms", "Web UI"],
    category: "Full Stack",
    githubUrl: "https://github.com/swapnasrikamireddy/-SmartFare",
    accentColor: "from-blue-500 to-cyan-400"
  }
];

export const experienceData: Experience[] = [
  {
    id: "ccc-digital",
    role: "Intern (Product Engineering with AI)",
    company: "CCC Digital India Private Limited",
    location: "Vijayawada, India",
    period: "May 2026 - July 2026",
    points: [
      "Developed an AI-powered internship recommendation platform utilizing the MERN stack and Python, delivering accurate matches.",
      "Integrated AI-based resume parsing, semantic internship matching, skill gap analysis, and personalized course recommendations to enhance student career readiness.",
      "Designed secure REST APIs and structured MongoDB schemas for seamless candidate profile and opportunity synchronization."
    ],
    tech: ["MERN Stack", "Python", "NLP / AI", "Resume Parsing", "Semantic Matching", "REST APIs"],
    logoText: "CCC"
  },
  {
    id: "srm-research",
    role: "Research Intern",
    company: "SRM University, AP",
    location: "Amaravati, India",
    period: "May 2026 - July 2026",
    points: [
      "Researched and developed an intelligent diabetes prediction system using Python and machine learning algorithms based on patient health records.",
      "Implemented comprehensive data preprocessing pipelines, feature engineering, and predictive models to support early healthcare diagnosis.",
      "Evaluated model performance metrics to minimize false negatives and improve clinical predictive confidence."
    ],
    tech: ["Python", "Machine Learning", "Scikit-Learn", "Data Preprocessing", "Healthcare AI"],
    logoText: "SRM"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
    iconName: "Code2"
  },
  {
    title: "Frontend Technologies",
    skills: ["HTML", "CSS", "Bootstrap", "React.js"],
    iconName: "Globe"
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "PHP", "REST APIs"],
    iconName: "Wrench"
  },
  {
    title: "Databases & Storage",
    skills: ["MongoDB", "SQL", "Database Design"],
    iconName: "Cpu"
  },
  {
    title: "Core CS Concepts",
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Machine Learning"],
    iconName: "Code2"
  },
  {
    title: "Developer Tools & BI",
    skills: ["Git", "GitHub", "Power BI", "Tableau", "Excel"],
    iconName: "Wrench"
  }
];

export const softSkills = [
  "Communication",
  "Problem Solving",
  "Team Collaboration",
  "Critical Thinking",
  "Algorithmic Thinking",
  "Agile Adaptability"
];

export const educationData: EducationItem[] = [
  {
    institution: "SRM Institute of Science and Technology",
    degree: "B.Tech in Computer Science and Engineering",
    period: "August 2024 - May 2028",
    location: "Amaravati, India",
    gpa: "9.4",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Machine Learning"
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    title: "National Semi-Finalist — Flipkart GRiD 8.0 (2026)",
    issuer: "Flipkart",
    detail: "Competed nationally in Flipkart's flagship engineering competition demonstrating high-performance algorithmic problem solving."
  },
  {
    title: "MongoDB Certification",
    issuer: "MongoDB",
    detail: "Earned MongoDB certification, validating practical skills in NoSQL database management, document indexing, and aggregation pipelines."
  },
  {
    title: "MCP Workshop & AI Automation Project Certification",
    issuer: "NxtWave",
    detail: "Completed intensive workshop on Model-Context-Protocol workflows, AI automation, and interactive project presentation."
  },
  {
    title: "TCS iON Career Edge — Young Professional & YUVA AI",
    issuer: "TCS iON & YUVA AI",
    detail: "Earned certifications in professional business competencies, YUVA AI For All, and AI Foundation principles."
  },
  {
    title: "Technology Consulting & Data Analytics Simulations",
    issuer: "Accenture Australia & Deloitte (Forage)",
    detail: "Completed Accenture Australia Technology Consulting Virtual Experience and Deloitte Data Analytics Job Simulation programs."
  }
];
