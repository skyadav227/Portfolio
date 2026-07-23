import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiLock, FiTrendingUp, FiCheckCircle, FiPackage, FiGitBranch } from 'react-icons/fi';
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from '../animations/variants';
import './CurrentlyLearning.css';

const learningTopics = [
  { id: 'learn-1',  name: 'Advanced React Patterns',            icon: FiCode,        color: '#61dafb' },
  { id: 'learn-2',  name: 'Node.js',                            icon: FiServer,      color: '#5fa04e' },
  { id: 'learn-3',  name: 'Express.js',                         icon: FiServer,      color: '#ffffff' },
  { id: 'learn-4',  name: 'MongoDB & Mongoose',                 icon: FiDatabase,    color: '#47a248' },
  { id: 'learn-5',  name: 'REST API Development',               icon: FiPackage,     color: '#00d4ff' },
  { id: 'learn-6',  name: 'Authentication & Authorization (JWT)', icon: FiLock,      color: '#fc5c7d' },
  { id: 'learn-7',  name: 'Backend Architecture',               icon: FiGitBranch,   color: '#7c5cfc' },
  { id: 'learn-8',  name: 'Performance Optimization',           icon: FiTrendingUp,  color: '#f7df1e' },
  { id: 'learn-9',  name: 'Clean Code & Best Practices',        icon: FiCheckCircle, color: '#22c55e' },
  { id: 'learn-10', name: 'Data Structures & Algorithms',       icon: FiCode,        color: '#ff6c37' },
  { id: 'learn-11', name: 'System Design Fundamentals',         icon: FiGitBranch,   color: '#7c5cfc' },
];

export default function CurrentlyLearning() {
  return (
    <section id="currently-learning" className="learning-section section" aria-label="Currently Learning">
      <div className="container">

        {/* Header */}
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="section-label">Continuous Growth</span>
          <h2 className="section-title">
            Currently <span className="gradient-text">Learning</span>
          </h2>
          <p className="learning-description">
            I believe great software engineers never stop learning. I'm continuously expanding
            my skills by building real-world projects and exploring modern technologies to
            become a better Full Stack Developer.
          </p>
        </motion.div>

        {/* Learning Grid */}
        <motion.div
          className="learning-grid"
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {learningTopics.map((topic, i) => (
            <motion.div
              key={topic.id}
              className="learning-card"
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.03 }}
              style={{ '--topic-color': topic.color }}
            >
              {/* Glow layer */}
              <div className="learning-glow" aria-hidden="true" />

              {/* Icon */}
              <div className="learning-icon-wrap">
                <topic.icon className="learning-icon" size={28} aria-hidden="true" />
              </div>

              {/* Text */}
              <h3 className="learning-name">{topic.name}</h3>

              {/* Progress indicator */}
              <div className="learning-progress-wrap">
                <div className="learning-progress-bar">
                  <motion.div
                    className="learning-progress-fill"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={viewportConfig}
                    transition={{ duration: 1, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
