export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  challenge: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: number;
  tags: string[];
}

export interface Skill {
  name: string;
  icon: string;
  category: 'backend' | 'frontend' | 'testing' | 'tooling';
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}