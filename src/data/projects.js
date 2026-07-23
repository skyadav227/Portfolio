import shopsphere from '../assets/Project-images/Shopsphere.jpeg';
import cortex     from '../assets/Project-images/cortex.png';

export const projectCategories = ['All', 'Full Stack', 'Frontend'];

export const projects = [
  /* ─────────────────────────────────────────────────────────
     CORTEX — Flagship / Featured (always first)
  ───────────────────────────────────────────────────────── */
  {
    id: 'proj-cortex',
    title: 'Cortex',
    tagline: 'AI Powered MERN Chat Application',
    description:
      'Cortex is a production-ready AI-powered full stack chat application built using the MERN Stack. It demonstrates complete web application development — frontend, backend APIs, authentication, database integration, state management, responsive UI, and modern software architecture.',
    image: cortex,
    category: 'Full Stack',
    featured: true,
    flagship: true,
    techStrip: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API', 'AI'],
    techGroups: [
      {
        id: 'cortex-tg-1',
        label: 'Frontend',
        items: [
          { id: 'cortex-t-1',  name: 'React.js' },
          { id: 'cortex-t-2',  name: 'JavaScript' },
          { id: 'cortex-t-3',  name: 'HTML5' },
          { id: 'cortex-t-4',  name: 'CSS3' },
          { id: 'cortex-t-5',  name: 'Vite' },
        ],
      },
      {
        id: 'cortex-tg-2',
        label: 'Backend',
        items: [
          { id: 'cortex-t-6',  name: 'Node.js' },
          { id: 'cortex-t-7',  name: 'Express.js' },
        ],
      },
      {
        id: 'cortex-tg-3',
        label: 'Database',
        items: [
          { id: 'cortex-t-8',  name: 'MongoDB' },
          { id: 'cortex-t-9',  name: 'Mongoose' },
        ],
      },
      {
        id: 'cortex-tg-4',
        label: 'Auth',
        items: [
          { id: 'cortex-t-10', name: 'JWT' },
        ],
      },
      {
        id: 'cortex-tg-5',
        label: 'Tools',
        items: [
          { id: 'cortex-t-11', name: 'Git' },
          { id: 'cortex-t-12', name: 'GitHub' },
          { id: 'cortex-t-13', name: 'VS Code' },
          { id: 'cortex-t-14', name: 'Postman' },
          { id: 'cortex-t-15', name: 'Vercel' },
          { id: 'cortex-t-16', name: 'npm' },
        ],
      },
    ],
    // flat tech array for non-featured card fallback
    tech: [
      { id: 'cortex-ft-1', name: 'React.js' },
      { id: 'cortex-ft-2', name: 'Node.js' },
      { id: 'cortex-ft-3', name: 'Express.js' },
      { id: 'cortex-ft-4', name: 'MongoDB' },
      { id: 'cortex-ft-5', name: 'JWT' },
      { id: 'cortex-ft-6', name: 'REST API' },
    ],
    features: [
      { id: 'cortex-f-1',  text: '🤖 AI Powered Chat' },
      { id: 'cortex-f-2',  text: '🔐 Secure JWT Authentication' },
      { id: 'cortex-f-3',  text: '💬 Persistent Chat History' },
      { id: 'cortex-f-4',  text: '⚡ Fast & Smooth User Experience' },
      { id: 'cortex-f-5',  text: '🌐 REST API Integration' },
      { id: 'cortex-f-6',  text: '🍃 MongoDB Database' },
      { id: 'cortex-f-7',  text: '📱 Fully Responsive Design' },
      { id: 'cortex-f-8',  text: '🎨 Modern User Interface' },
      { id: 'cortex-f-9',  text: '🚀 Production Ready MERN Architecture' },
      { id: 'cortex-f-10', text: '🔒 Secure Authentication System' },
    ],
    liveUrl:    'https://cortex-22tk.vercel.app/',
    githubUrl:  'https://github.com/skyadav227/Cortex',
    accentColor: '#00d4ff',
  },

  /* ─────────────────────────────────────────────────────────
     SHOPSPHERE — Second project
  ───────────────────────────────────────────────────────── */
  {
    id: 'proj-shopsphere',
    title: 'ShopSphere',
    tagline: 'Modern E-Commerce Experience',
    description:
      'A full-featured React e-commerce application with shopping cart management, user authentication, product browsing, and persistent state. Built with Redux Toolkit for scalable state management and a seamless, responsive user experience.',
    image: shopsphere,
    category: 'Frontend',
    featured: false,
    flagship: false,
    techGroups: null,
    tech: [
      { id: 'proj-s-tech-1', name: 'React' },
      { id: 'proj-s-tech-2', name: 'Redux Toolkit' },
      { id: 'proj-s-tech-3', name: 'React Router' },
      { id: 'proj-s-tech-4', name: 'Bootstrap' },
      { id: 'proj-s-tech-5', name: 'Local Storage' },
    ],
    features: [
      { id: 'proj-s-f-1', text: 'Shopping cart management' },
      { id: 'proj-s-f-2', text: 'User authentication flow' },
      { id: 'proj-s-f-3', text: 'Responsive design' },
      { id: 'proj-s-f-4', text: 'Local storage persistence' },
    ],
    liveUrl:   'https://shopsphere-nine-nu.vercel.app/Home',
    githubUrl: 'https://github.com/skyadav227/ShopSphere',
    accentColor: '#7c5cfc',
  },
];
