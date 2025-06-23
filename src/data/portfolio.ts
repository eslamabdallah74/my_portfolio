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
  },
  {
    id: 'ibright-schools',
    title: 'Ibright Schools Management System',
    description: 'Full Stack Developer, Ibright, Saudi Arabia\n• Developed a schools management system.\n• Added a Student Absence System feature.\n• Implemented two new roles: Undersecretary for Student Affairs and Undersecretary for Teachers Affairs.\n• Conducted design fixes and cleaned up the codebase.',
    technologies: ['Full Stack'],
    challenge: 'Implemented new features and roles while improving code quality and design.',
    liveUrl: 'https://dwam.app/',
    image: 'src/assets/ibraight.png',
    // githubUrl: '', // Add if available
  },
  {
    id: 'gte-fullstack',
    title: 'General Telecom & Electric (GTE)',
    description: 'Full Stack Developer, General Telecom & Electric (GTE), Egypt\n• Contributed expertise in Laravel for backend development and Vue.js for frontend implementation.\n• Engineered and deployed Laravel backend systems, enhancing data management capabilities.\n• Utilized Vue.js to create responsive and user-friendly frontend interfaces.\n• Collaborated with cross-functional teams to troubleshoot issues and optimize code performance.\n• Led redesigns for existing code components to improve scalability and maintainability.',
    technologies: ['Laravel', 'Vue.js', 'Full Stack'],
    challenge: 'Redesigned and optimized code components for scalability and maintainability while ensuring seamless collaboration across teams.',
    liveUrl: 'https://www.linkedin.com/company/generaltelecom/mycompany/',
    // githubUrl: '', // Add if available
    // image: '', // Add if available
  },
  {
    id: 'granit-backend',
    title: 'Granit Company Backend API',
    description: 'Backend Developer, Granit Company\n• Developed a robust RESTful API tailored for a granite company, providing comprehensive tools for efficient management of their workforce dedicated to serving clients.\n• Streamlined the entire job process, from initial client engagement to collecting payments, calculating expenses, and tracking income, working hours, and shifts.',
    technologies: ['RESTful API', 'Backend'],
    challenge: 'Automated and streamlined the full workflow for workforce and client management in the granite industry.',
    // liveUrl: '', // Add if available
    // githubUrl: '', // Add if available
    // image: '', // Add if available
  },
  {
    id: 'razi-campaign',
    title: 'Frontend - Campaign Website (Razi)',
    description: `Frontend Developer\nDesigned the UI/UX for all campaign pages, ensuring a modern, accessible, and engaging user experience. Implemented responsive layouts and interactive features using HTML, CSS, JavaScript, and TypeScript. Collaborated closely with the campaign team to translate their vision into a functional and visually appealing website that supports first aid awareness across Egypt.`,
    technologies: ['Frontend', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
    challenge: 'Built a responsive, accessible, and engaging website to support a national awareness campaign.',
    liveUrl: 'https://eslamabdallah74.github.io/razi/',
    image: 'src/assets/razi.png',
  },
  {
    id: 'du-gateau-cake',
    title: 'Frontend - Du Gateau Cake E-commerce Website',
    description: `Frontend Developer\nDesigned and implemented a modern, responsive e-commerce website for selling cakes. Focused on creating an engaging UI/UX, product catalog, and smooth shopping experience using Vue 3, TypeScript, and SCSS. Developed interactive product pages, shopping cart functionality, and ensured mobile-friendly layouts for all users.`,
    technologies: ['Frontend', 'Vue 3', 'TypeScript', 'SCSS'],
    challenge: 'Built a visually appealing and user-friendly e-commerce platform for cake sales, optimizing for performance and accessibility.',
    liveUrl: 'https://du-gateau.vercel.app/',
    githubUrl: 'https://github.com/eslamabdallah74/du-gateau',
    image: 'src/assets/du-gateau.png',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'laravel-viewmode',
    title: 'Laravel ViewMode: A Smarter Way to Handle View Data',
    excerpt: 'Discover how to use ViewModel in Laravel to structure and deliver view-related data efficiently, with practical examples and best practices.',
    content: '',
    date: '2024-09-12',
    readTime: 6,
    tags: ['Laravel', 'ViewModel', 'Best Practices'],
    externalUrl: 'https://www.linkedin.com/pulse/laravel-viewmode-eslam-abdallah-lw3if/?trackingId=6fHmaMTHR6mhP7vELYjHLA%3D%3D'
  },
  {
    id: 'restful-api-dynamic',
    title: 'Restful API (Dynamic) in Laravel: Simplifying Large-Scale API Development',
    excerpt: 'Learn how to use dynamic controllers in Laravel to reduce repetitive code, improve scalability, and simplify maintenance when building RESTful APIs for many models.',
    content: '',
    date: '2023-10-02',
    readTime: 7,
    tags: ['Laravel', 'RESTful API', 'Backend'],
    externalUrl: 'https://www.linkedin.com/pulse/restful-api-dynamic-eslam-abdallah/?trackingId=6fHmaMTHR6mhP7vELYjHLA%3D%3D'
  },
  {
    id: 'laravel-view-composers',
    title: 'Laravel View Composers: Sharing Data Across Blade Views Efficiently',
    excerpt: 'Explore how Laravel View Composers can inject shared data into Blade views, keeping controllers slim and avoiding repetitive queries.',
    content: '',
    date: '2023-08-16',
    readTime: 5,
    tags: ['Laravel', 'Blade', 'View Composer', 'MVC'],
    externalUrl: 'https://www.linkedin.com/pulse/laravel-view-composers-eslam-abdallah/?trackingId=J7hKiAiuThWQBeqKUF84eg%3D%3D'
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
  { name: 'GitHub', url: 'https://github.com/eslamabdallah74', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/feed/#?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BpqOD9m2bTBONTZtCmJRUBg%3D%3D', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:eslamabdallaho301@gmail.com', icon: 'envelope' },
  { name: 'Phone', url: 'tel:+201026236633', icon: 'phone' }
];

export const personalInfo = {
  name: 'Eslam Abass',
  title: 'Full-Stack Developer',
  email: 'eslamabdallaho301@gmail.com',
  location: 'Egypt, Suez',
  phone: '+201026236633',
  bio: 'I build scalable web applications using Laravel and Vue 3, with a focus on real-time systems, AI integrations, and multi-tenant architectures. I believe in writing clean, maintainable code that stands the test of time.',
  tagline: 'Building Scalable Web Apps with Laravel & Vue',
  description: 'Passionate about creating high-performance applications that solve real business problems. I specialize in modern PHP and JavaScript frameworks, with expertise in real-time systems and AI-powered features.'
};