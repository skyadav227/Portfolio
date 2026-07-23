import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiTarget, FiZap, FiBookOpen } from 'react-icons/fi';
import myPhoto from '../assets/Images/Karthik-2.png';
import {
  fadeUp, fadeRight, fadeLeft,
  staggerContainer, staggerItem, viewportConfig,
} from '../animations/variants';
import './About.css';

const stats = [
  { id: 'stat-years',    value: '3+',  label: 'Years Learning', icon: FiBookOpen },
  { id: 'stat-projects', value: '5+',  label: 'Projects Built',  icon: FiCode    },
  { id: 'stat-tech',     value: '15+', label: 'Technologies',   icon: FiZap     },
  { id: 'stat-curious',  value: '∞',   label: 'Curiosity',       icon: FiTarget  },
];

const journey = [
  {
    id: 'journey-1',
    year: '2022',
    title: 'Programming Fundamentals',
    desc: 'Started B.Tech CSE. Built a strong foundation in programming fundamentals, data structures, algorithms, and core computer science concepts.',
    color: '#7c5cfc',
  },
  {
    id: 'journey-2',
    year: '2022',
    title: 'HTML, CSS & JavaScript',
    desc: 'Learned the fundamentals of web development — semantic HTML, modern CSS, and core JavaScript (ES6+). Built first static websites.',
    color: '#00d4ff',
  },
  {
    id: 'journey-3',
    year: '2023',
    title: 'Responsive Web Applications',
    desc: 'Built fully responsive, mobile-first web applications. Mastered CSS Flexbox, Grid, and modern layout techniques for production-ready UIs.',
    color: '#fc5c7d',
  },
  {
    id: 'journey-4',
    year: '2023',
    title: 'Mastered React Development',
    desc: 'Deep-dived into React — hooks, context, Redux Toolkit, React Router. Shipped ShopSphere, a full e-commerce app with modern architecture.',
    color: '#7c5cfc',
  },
  {
    id: 'journey-5',
    year: '2024',
    title: 'Node.js & Express.js',
    desc: 'Learned server-side JavaScript. Built RESTful APIs with Express.js, handled routing, middleware, and authentication flows.',
    color: '#00d4ff',
  },
  {
    id: 'journey-6',
    year: '2024',
    title: 'MongoDB & Mongoose',
    desc: 'Learned NoSQL database design with MongoDB and Mongoose ODM. Built data models, performed CRUD operations, and connected databases to APIs.',
    color: '#fc5c7d',
  },
  {
    id: 'journey-7',
    year: '2025',
    title: 'Complete MERN Applications',
    desc: 'Started building complete full-stack MERN applications — React frontend + Node/Express backend + MongoDB — deployed on Vercel.',
    color: '#7c5cfc',
  },
  {
    id: 'journey-8',
    year: '2025',
    title: 'Continuously Improving',
    desc: 'Exploring advanced patterns: JWT auth, REST API design, system design, DSA, performance optimization. Never stopping.',
    color: '#00d4ff',
  },
];

export default function About() {
  const [activeYear, setActiveYear] = useState(null);

  return (
    <section id="about" className="about-section section" aria-label="About">
      <div className="container">

        {/* Section header */}
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">
            Building <span className="gradient-text">Software</span> That Matters
          </h2>
        </motion.div>

        {/* Main two-col layout */}
        <div className="about-grid">

          {/* Left — Image + stats */}
          <motion.div
            className="about-left"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="about-photo-wrap">
              <div className="about-photo-bg" aria-hidden="true" />
              <img
                src={myPhoto}
                alt="Karthik — Software Developer"
                className="about-photo"
                loading="lazy"
              />
              {/* Floating accent */}
              <motion.div
                className="about-photo-accent"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
              >
                <FiCode size={20} />
                <span>Software Dev</span>
              </motion.div>
            </div>

            {/* Stats grid */}
            <motion.div
              className="stats-grid"
              variants={staggerContainer(0.08, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {stats.map(({ id, value, label, icon: Icon }) => (
                <motion.div key={id} className="stat-card" variants={staggerItem}>
                  <Icon className="stat-icon" aria-hidden="true" />
                  <span className="stat-value">{value}</span>
                  <span className="stat-label">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Story + Timeline */}
          <motion.div
            className="about-right"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Story */}
            <div className="about-story">
              <p className="about-text">
                I'm a <strong>B.Tech Computer Science graduate</strong> (2022–2026) and a passionate
                <strong> Software Developer</strong> with strong expertise in React and growing
                full-stack MERN capabilities. I enjoy building modern web applications that
                solve real-world problems — from intuitive frontends to scalable APIs.
              </p>
              <p className="about-text">
                My stack centres on <strong>MongoDB, Express.js, React, and Node.js</strong>.
                I care deeply about writing clean, maintainable code, learning emerging
                technologies, and continuously improving through hands-on projects.
              </p>
              <p className="about-text">
                When I'm not coding, I'm studying system design, exploring new tools,
                or solving algorithmic challenges. My <strong>goal</strong> is to join a
                world-class engineering team and build software that makes a real impact.
              </p>
            </div>

            {/* Interactive Timeline */}
            <div className="timeline-section">
              <h3 className="timeline-heading">My Journey</h3>
              <div className="timeline">
                {journey.map((item, i) => (
                  <motion.div
                    key={item.id}
                    className={`timeline-item ${activeYear === i ? 'expanded' : ''}`}
                    onClick={() => setActiveYear(activeYear === i ? null : i)}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportConfig}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 4 }}
                    role="button"
                    aria-expanded={activeYear === i}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setActiveYear(activeYear === i ? null : i)}
                  >
                    <div className="timeline-dot" style={{ background: item.color, boxShadow: `0 0 12px ${item.color}60` }} />
                    <div className="timeline-content">
                      <div className="timeline-meta">
                        <span className="timeline-year" style={{ color: item.color }}>{item.year}</span>
                        <span className="timeline-title">{item.title}</span>
                      </div>
                      <motion.p
                        className="timeline-desc"
                        initial={false}
                        animate={{ height: activeYear === i ? 'auto' : 0, opacity: activeYear === i ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        {item.desc}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Current focus chips */}
            <div className="about-chips">
              <span className="chip-label">Currently:</span>
              {['MERN Stack', 'REST APIs', 'System Design', 'Open to Work 🚀'].map((c) => (
                <span key={c} className="focus-chip">{c}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
