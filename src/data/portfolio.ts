import type { Project, BlogPost, Skill, SocialLink } from '@/types';

export const projects: Project[] = [
  {
    id: 'elkheta-elearning',
    title: 'Elkheta E-Learning System',
    description: 'Full Stack Developer, Elkheta, Egypt\n• Responsible for designing the website based on Figma designs and utilizing GraphQL API for dynamic backend integration.\n• Created and maintained new features in the backend, including student lists and student reports.\n• Refactored the attendee system to improve efficiency and usability.\n• Wrote documentation for various project components, including pages overflow and API explanations.',
    technologies: ['GraphQL', 'Figma', 'Full Stack'],
    challenge: 'Integrated dynamic backend with GraphQL and improved attendee system efficiency.',
    liveUrl: 'https://elkheta.com',
    image: 'src/assets/elkheta.png',
    // githubUrl: '', // Add if available
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'laravel-reverb-websockets',
    title: 'Building Real-time Apps with Laravel Reverb',
    excerpt: 'Learn how to implement WebSockets in Laravel applications using the new Laravel Reverb package for seamless real-time communication.',
    content: '',
    date: '2024-01-15',
    readTime: 8,
    tags: ['Laravel', 'WebSockets', 'Real-time']
  },
  {
    id: 'vue3-composition-api',
    title: 'Vue 3 Composition API Best Practices',
    excerpt: 'Discover advanced patterns and best practices for building scalable Vue 3 applications using the Composition API and TypeScript.',
    content: '',
    date: '2024-01-10',
    readTime: 12,
    tags: ['Vue 3', 'TypeScript', 'Architecture']
  },
  {
    id: 'graphql-performance',
    title: 'Optimizing GraphQL Performance in Laravel',
    excerpt: 'Techniques for optimizing GraphQL queries, handling N+1 problems, and implementing efficient caching strategies in Laravel applications.',
    content: '',
    date: '2024-01-05',
    readTime: 10,
    tags: ['GraphQL', 'Laravel', 'Performance']
  }
];

export const skills: Skill[] = [
  { name: 'Laravel', icon: '🚀', category: 'backend' },
  { name: 'PHP', icon: '🐘', category: 'backend' },
  { name: 'GraphQL', icon: '📊', category: 'backend' },
  { name: 'Laravel Reverb', icon: '🔄', category: 'backend' },
  { name: 'Redis', icon: '⚡', category: 'backend' },
  
  { name: 'Vue 3', icon: '💚', category: 'frontend' },
  { name: 'TypeScript', icon: '📘', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'frontend' },
  { name: 'Vite', icon: '⚡', category: 'frontend' },
  
  { name: 'Pest PHP', icon: '🧪', category: 'testing' },
  { name: 'Laravel Dusk', icon: '🕷️', category: 'testing' },
  { name: 'PHPUnit', icon: '✅', category: 'testing' },
  
  { name: 'Docker', icon: '🐳', category: 'tooling' },
  { name: 'Git', icon: '📚', category: 'tooling' },
  { name: 'CI/CD', icon: '🔄', category: 'tooling' }
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/username', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/username', icon: 'twitter' },
  { name: 'Email', url: 'mailto:hello@example.com', icon: 'email' }
];

export const personalInfo = {
  name: 'Eslam Abass',
  title: 'Full-Stack Developer',
  email: 'hello@example.com',
  location: 'Your Location',
  bio: 'I build scalable web applications using Laravel and Vue 3, with a focus on real-time systems, AI integrations, and multi-tenant architectures. I believe in writing clean, maintainable code that stands the test of time.',
  tagline: 'Building Scalable Web Apps with Laravel & Vue',
  description: 'Passionate about creating high-performance applications that solve real business problems. I specialize in modern PHP and JavaScript frameworks, with expertise in real-time systems and AI-powered features.'
};