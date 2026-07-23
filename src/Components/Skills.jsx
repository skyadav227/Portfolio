import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, skillCategories } from '../data/skills';
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from '../animations/variants';
import './Skills.css';

const levelColors = {
  Advanced:     '#22c55e',
  Intermediate: '#00d4ff',
  Beginner:     '#fc5c7d',
};

export default function Skills() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? skills
    : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="skills-section section" aria-label="Skills">
      <div className="container">

        {/* Header */}
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="section-label">What I Know</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies I work with to build modern, performant web experiences.
          </p>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          className="skills-filters"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          role="tablist"
          aria-label="Filter skills by category"
        >
          {skillCategories.map((cat) => (
            <motion.button
              key={cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              role="tab"
              aria-selected={active === cat}
            >
              {cat}
              {active === cat && (
                <motion.span
                  className="filter-pill-bg"
                  layoutId="filterPill"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="skills-grid"
            variants={staggerContainer(0.07, 0)}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
            role="tabpanel"
          >
            {filtered.map((skill) => (
              <motion.div
                key={skill.id}
                className="skill-card"
                variants={staggerItem}
                whileHover="hover"
                style={{ '--skill-color': skill.color, '--skill-glow': skill.glow }}
                aria-label={`${skill.name} — ${skill.level}`}
              >
                {/* Glow layer */}
                <div className="skill-glow-bg" aria-hidden="true" />

                {/* Logo */}
                <div className="skill-logo-wrap">
                  {skill.logo ? (
                    <motion.img
                      src={skill.logo}
                      alt={skill.name}
                      className="skill-logo"
                      variants={{ hover: { scale: 1.15, rotate: 5 } }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    />
                  ) : skill.icon ? (
                    <motion.div
                      className="skill-icon-wrap"
                      variants={{ hover: { scale: 1.15, rotate: 5 } }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                      <skill.icon size={42} />
                    </motion.div>
                  ) : null}
                </div>

                {/* Info */}
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span
                    className="skill-level"
                    style={{ color: levelColors[skill.level] ?? '#888' }}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Category tag */}
                <span className="skill-category-tag">{skill.category}</span>

                {/* Bottom border accent */}
                <motion.div
                  className="skill-border-accent"
                  variants={{ hover: { scaleX: 1 } }}
                  initial={{ scaleX: 0 }}
                  style={{ background: skill.color }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
