export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  tech: string[];
  category: 'Full Stack' | 'AI / ML' | 'Data Visualization' | 'NLP';
  githubUrl?: string;
  demoUrl?: string;
  accentColor: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  tech: string[];
  logoText: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  iconName: string;
}

export interface Certification {
  title: string;
  issuer: string;
  detail?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  coursework: string[];
}
