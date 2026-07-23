import shopsphere from '../assets/Project-images/Shopsphere.jpeg';

export const projectCategories = ['All', 'Frontend', 'Full Stack'];

export const projects = [
  {
    id: 'proj-1',
    title: 'ShopSphere',
    tagline: 'Modern E-Commerce Experience',
    description:
      'A full-featured e-commerce application with shopping cart, authentication, and product management. Built with React and Redux Toolkit for predictable state management and a seamless user experience.',
    image: shopsphere,
    category: 'Frontend',
    featured: true,
    tech: [
      { id: 'proj-1-tech-1', name: 'React' },
      { id: 'proj-1-tech-2', name: 'Redux Toolkit' },
      { id: 'proj-1-tech-3', name: 'React Router' },
      { id: 'proj-1-tech-4', name: 'Bootstrap' },
      { id: 'proj-1-tech-5', name: 'Local Storage' },
    ],
    challenges: [
      { id: 'proj-1-ch-1', text: 'Implementing persistent cart state across sessions' },
      { id: 'proj-1-ch-2', text: 'Building a scalable component architecture' },
      { id: 'proj-1-ch-3', text: 'Optimizing re-renders with Redux selectors' },
    ],
    features: [
      { id: 'proj-1-f-1', text: 'Shopping cart management' },
      { id: 'proj-1-f-2', text: 'User authentication flow' },
      { id: 'proj-1-f-3', text: 'Responsive design' },
      { id: 'proj-1-f-4', text: 'Local storage persistence' },
    ],
    liveUrl: 'https://shopsphere-nine-nu.vercel.app/Home',
    githubUrl: 'https://github.com/skyadav227/ShopSphere',
    accentColor: '#7c5cfc',
  },
];
