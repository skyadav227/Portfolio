import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiTrendingUp, FiUsers, FiMonitor, FiTarget, FiCode } from 'react-icons/fi';
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from '../animations/variants';
import './CoreStrengths.css';

const strengths = [
  {
    id: 'strength-1',
    name: 'Problem Solving',
    icon: FiZap,
    description: 'Breaking down complex problems into elegant, efficient solutions.',
    color: '#f7df1e',
  },
  {
    id: 'strength-2',
    name: 'Fast Learner',
    icon: FiTrendingUp,
    description: 'Quickly adapting to new technologies, frameworks, and best practices.',
    color: '#00d4ff',
  },
  {
    id: 'strength-3',
    name: 'Team Collaboration',
    icon: FiUsers,
    description: 'Working effectively in teams, communicating clearly, and sharing knowledge.',
    color: '#fc5c7d',
  },
  {
    id: 'strength-4',
    name: 'Responsive Design',
    icon: FiMonitor,
    description: 'Building pixel-perfect, mobile-first interfaces that work everywhere.',
    color: '#7c5cfc',
  },
  {
    id: 'strength-5',
    name: 'Performance Focus',
    icon: FiTarget,
    description: 'Writing optimized code that loads fast and scales efficiently.',
    color: '#22c55e',
  },
  {
    id: 'strength-6',
    name: 'Clean & Maintainable Code',
    icon: FiCode,
    description: 'Following best practices, writing readable code, and keeping it DRY.',
    color: '#ff6c37',
  },
];

export default function CoreStrengths() {
  return (
    <section id="core-strengths" className="strengths-section section" aria-label="Core Strengths">
      <div className="container">

        {/* Header */}
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="section-label">What I Bring</span>
          <h2 className="section-title">
            Core <span className="gradient-text">Strengths</span>
          </h2>
        </motion.div>

        {/* Strengths Grid */}
        <motion.div
          className="strengths-grid"
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {strengths.map((strength) => (
            <motion.div
              key={strength.id}
              className="strength-card"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{ '--strength-color': strength.color }}
            >
              {/* Glow layer */}
              <div className="strength-glow" aria-hidden="true" />

              {/* Icon */}
              <div className="strength-icon-wrap">
                <strength.icon className="strength-icon" size={32} aria-hidden="true" />
              </div>

              {/* Content */}
              <div className="strength-content">
                <h3 className="strength-name">{strength.name}</h3>
                <p className="strength-description">{strength.description}</p>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="strength-accent-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewportConfig}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
