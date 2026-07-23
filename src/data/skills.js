import { 
  SiHtml5, SiNodedotjs, SiExpress, SiMongodb,
  SiVscodium, SiPostman, SiVercel, SiNpm
} from 'react-icons/si';

import htmlLogo     from '../assets/skills/Html-logo.png';
import cssLogo      from '../assets/skills/Css-logo.png';
import jsLogo       from '../assets/skills/Javascript-logo.png';
import reactLogo    from '../assets/skills/React-logo.png';
import gitLogo      from '../assets/skills/Git-logo.png';
import githubLogo   from '../assets/skills/Github-logo.png';
import pythonLogo   from '../assets/skills/Python-logo.png';

export const skillCategories = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'Languages',
  'Tools & Platforms',
];

export const skills = [
  /* ── Frontend ─────────────────────────────────────────── */
  {
    id: 'skill-html5',
    name: 'HTML5',
    logo: htmlLogo,
    icon: null,
    category: 'Frontend',
    color: '#e34f26',
    glow: 'rgba(227, 79, 38, 0.4)',
    level: 'Advanced',
  },
  {
    id: 'skill-css3',
    name: 'CSS3',
    logo: cssLogo,
    icon: null,
    category: 'Frontend',
    color: '#264de4',
    glow: 'rgba(38, 77, 228, 0.4)',
    level: 'Advanced',
  },
  {
    id: 'skill-javascript-es6',
    name: 'JavaScript (ES6+)',
    logo: jsLogo,
    icon: null,
    category: 'Frontend',
    color: '#f7df1e',
    glow: 'rgba(247, 223, 30, 0.35)',
    level: 'Intermediate',
  },
  {
    id: 'skill-reactjs',
    name: 'React.js',
    logo: reactLogo,
    icon: null,
    category: 'Frontend',
    color: '#61dafb',
    glow: 'rgba(97, 218, 251, 0.4)',
    level: 'Intermediate',
  },
  {
    id: 'skill-responsive-design',
    name: 'Responsive Design',
    logo: null,
    icon: SiHtml5,
    category: 'Frontend',
    color: '#e34f26',
    glow: 'rgba(227, 79, 38, 0.3)',
    level: 'Advanced',
  },

  /* ── Backend ───────────────────────────────────────────── */
  {
    id: 'skill-nodejs',
    name: 'Node.js',
    logo: null,
    icon: SiNodedotjs,
    category: 'Backend',
    color: '#5fa04e',
    glow: 'rgba(95, 160, 78, 0.4)',
    level: 'Learning',
  },
  {
    id: 'skill-expressjs',
    name: 'Express.js',
    logo: null,
    icon: SiExpress,
    category: 'Backend',
    color: '#ffffff',
    glow: 'rgba(255, 255, 255, 0.2)',
    level: 'Learning',
  },

  /* ── Database ──────────────────────────────────────────── */
  {
    id: 'skill-mongodb',
    name: 'MongoDB',
    logo: null,
    icon: SiMongodb,
    category: 'Database',
    color: '#47a248',
    glow: 'rgba(71, 162, 72, 0.4)',
    level: 'Learning',
  },
  {
    id: 'skill-mongoose',
    name: 'Mongoose',
    logo: null,
    icon: SiMongodb,
    category: 'Database',
    color: '#800000',
    glow: 'rgba(128, 0, 0, 0.35)',
    level: 'Learning',
  },

  /* ── Programming Languages ─────────────────────────────── */
  {
    id: 'skill-javascript-lang',
    name: 'JavaScript',
    logo: jsLogo,
    icon: null,
    category: 'Languages',
    color: '#f7df1e',
    glow: 'rgba(247, 223, 30, 0.35)',
    level: 'Intermediate',
  },
  {
    id: 'skill-python',
    name: 'Python',
    logo: pythonLogo,
    icon: null,
    category: 'Languages',
    color: '#3776ab',
    glow: 'rgba(55, 118, 171, 0.4)',
    level: 'Intermediate',
  },

  /* ── Tools & Platforms ─────────────────────────────────── */
  {
    id: 'skill-git',
    name: 'Git',
    logo: gitLogo,
    icon: null,
    category: 'Tools & Platforms',
    color: '#f05032',
    glow: 'rgba(240, 80, 50, 0.4)',
    level: 'Intermediate',
  },
  {
    id: 'skill-github',
    name: 'GitHub',
    logo: githubLogo,
    icon: null,
    category: 'Tools & Platforms',
    color: '#ffffff',
    glow: 'rgba(255, 255, 255, 0.2)',
    level: 'Intermediate',
  },
  {
    id: 'skill-vscode',
    name: 'VS Code',
    logo: null,
    icon: SiVscodium,
    category: 'Tools & Platforms',
    color: '#007acc',
    glow: 'rgba(0, 122, 204, 0.4)',
    level: 'Advanced',
  },
  {
    id: 'skill-postman',
    name: 'Postman',
    logo: null,
    icon: SiPostman,
    category: 'Tools & Platforms',
    color: '#ff6c37',
    glow: 'rgba(255, 108, 55, 0.4)',
    level: 'Intermediate',
  },
  {
    id: 'skill-mongodb-compass',
    name: 'MongoDB Compass',
    logo: null,
    icon: SiMongodb,
    category: 'Tools & Platforms',
    color: '#47a248',
    glow: 'rgba(71, 162, 72, 0.35)',
    level: 'Learning',
  },
  {
    id: 'skill-vercel',
    name: 'Vercel',
    logo: null,
    icon: SiVercel,
    category: 'Tools & Platforms',
    color: '#ffffff',
    glow: 'rgba(255, 255, 255, 0.2)',
    level: 'Intermediate',
  },
  {
    id: 'skill-npm',
    name: 'npm',
    logo: null,
    icon: SiNpm,
    category: 'Tools & Platforms',
    color: '#cb3837',
    glow: 'rgba(203, 56, 55, 0.4)',
    level: 'Intermediate',
  },
];
