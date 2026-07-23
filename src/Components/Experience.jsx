import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiBookOpen, FiGithub } from 'react-icons/fi';
import { experiences } from '../data/experience';
import { fadeUp, viewportConfig } from '../animations/variants';
import './Experience.css';

const iconMap = {
  education: FiBookOpen,
  code:       FiCode,
  github:     FiGithub,
};

export default function Experience() {
  return (
    <section id="experience" className="experience-section section" aria-label="Experience">
      <div className="container">

        {/* Header */}
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="section-label">Background</span>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            A timeline of my education, projects, and contributions that shaped my skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="exp-timeline" role="list">
          {/* Central line */}
          <div className="exp-timeline-line" aria-hidden="true" />

          {experiences.map((exp, i) => {
            const Icon = iconMap[exp.icon] ?? FiCode;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                className={`exp-row ${isLeft ? 'exp-row--left' : 'exp-row--right'}`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                role="listitem"
              >
                {/* Card */}
                <motion.div
                  className="exp-card"
                  whileHover={{ y: -4, boxShadow: `0 20px 50px rgba(0,0,0,0.4), 0 0 30px ${exp.accentColor}20` }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Top row */}
                  <div className="exp-card-header">
                    <div
                      className="exp-icon"
                      style={{ background: `${exp.accentColor}18`, color: exp.accentColor, boxShadow: `0 0 20px ${exp.accentColor}30` }}
                      aria-hidden="true"
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <span
                        className="exp-type-badge"
                        style={{ color: exp.accentColor, background: `${exp.accentColor}15`, borderColor: `${exp.accentColor}30` }}
                      >
                        {exp.type}
                      </span>
                      <p className="exp-period">{exp.period}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                  <p className="exp-desc">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="exp-highlights" aria-label="Key highlights">
                    {exp.highlights.map((h) => (
                      <li key={h.id}>
                        <span
                          className="exp-bullet"
                          style={{ background: exp.accentColor }}
                          aria-hidden="true"
                        />
                        {h.text}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Center dot */}
                <div
                  className="exp-dot"
                  style={{ background: exp.accentColor, boxShadow: `0 0 16px ${exp.accentColor}80` }}
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
