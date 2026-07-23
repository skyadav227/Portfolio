import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects, projectCategories } from '../data/projects';
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from '../animations/variants';
import './Projects.css';

/* ─────────────────────────────────────────────────────────────
   Cortex hero visual — CSS-only premium placeholder
   (replace the inner <div> with an <img> once a screenshot
    is available: image={project.image} )
───────────────────────────────────────────────────────────── */
function CortexVisual({ image, title }) {
  if (image) {
    return (
      <img src={image} alt={title} className="project-image" loading="lazy" />
    );
  }
  return (
    <div className="cortex-visual" aria-hidden="true">
      <div className="cortex-visual-bg" />
      <div className="cortex-visual-grid" />
      {/* Floating shapes */}
      <div className="cv-orb cv-orb-1" />
      <div className="cv-orb cv-orb-2" />
      <div className="cv-orb cv-orb-3" />
      {/* Centre brand mark */}
      <div className="cv-brand">
        <span className="cv-brand-name">Cortex</span>
        <span className="cv-brand-sub">AI · MERN · Full Stack</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Flagship (Cortex) full-width card
───────────────────────────────────────────────────────────── */
function FlagshipCard({ project }) {
  return (
    <motion.article
      className="flagship-card"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      aria-label={project.title}
    >
      {/* Soft accent glow border */}
      <div className="flagship-glow" aria-hidden="true" />

      <div className="flagship-inner">
        {/* ── Left: visual ── */}
        <div className="flagship-visual-wrap">
          <div className="flagship-image-wrap">
            <CortexVisual image={project.image} title={project.title} />
            <div className="flagship-image-overlay" aria-hidden="true" />
          </div>
        </div>

        {/* ── Right: content ── */}
        <div className="flagship-content">
          {/* Badges row */}
          <div className="flagship-badges">
            <span className="flagship-badge flagship-badge--featured">
              ★ Featured Project
            </span>
            <span className="flagship-badge flagship-badge--mern">
              MERN Stack
            </span>
          </div>

          {/* Title */}
          <div className="flagship-title-wrap">
            <p className="project-tagline">{project.tagline}</p>
            <h3 className="flagship-title">{project.title}</h3>
          </div>

          {/* Tech strip */}
          <div className="flagship-tech-strip">
            {project.techStrip.map((t) => (
              <span key={t} className="tech-strip-item">{t}</span>
            ))}
          </div>

          {/* Description */}
          <p className="flagship-description">{project.description}</p>

          {/* Key features */}
          <div className="flagship-features">
            {project.features.map((f) => (
              <span key={f.id} className="feature-chip">{f.text}</span>
            ))}
          </div>

          {/* Grouped tech stack */}
          <div className="flagship-tech-groups">
            {project.techGroups.map((group) => (
              <div key={group.id} className="tech-group">
                <span className="tech-group-label">{group.label}</span>
                <div className="tech-group-pills">
                  {group.items.map((item) => (
                    <span key={item.id} className="tech-pill">{item.name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flagship-actions">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flagship-btn flagship-btn--primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              aria-label={`Live demo of ${project.title}`}
            >
              <FiExternalLink size={16} aria-hidden="true" />
              Live Demo
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flagship-btn flagship-btn--outline"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              aria-label={`GitHub repository for ${project.title}`}
            >
              <FiGithub size={16} aria-hidden="true" />
              GitHub Repository
            </motion.a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────────────────────
   Standard project card (ShopSphere + future projects)
───────────────────────────────────────────────────────────── */
function ProjectCard({ project }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top)  / rect.height - 0.5) * 8;
    const y = -((e.clientX - rect.left) / rect.width  - 0.5) * 8;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.article
      className="project-card"
      variants={staggerItem}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 ? 'transform 0.5s ease' : 'transform 0.12s ease',
      }}
      aria-label={project.title}
    >
      {/* Image */}
      <div className="project-image-wrap">
        {project.image ? (
          <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
        ) : (
          <div className="project-image-placeholder">
            <span>{project.title}</span>
          </div>
        )}
        <div className="project-overlay" aria-hidden="true" />

        {/* Hover overlay with links */}
        <div className="project-hover-links">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`View ${project.title} live demo`}
          >
            <FiExternalLink size={15} aria-hidden="true" />
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn project-link-btn--ghost"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`GitHub for ${project.title}`}
          >
            <FiGithub size={15} aria-hidden="true" />
            Code
          </motion.a>
        </div>
      </div>

      {/* Body */}
      <div className="project-body">
        <div className="project-header-row">
          <div>
            <p className="project-tagline">{project.tagline}</p>
            <h3 className="project-title">{project.title}</h3>
          </div>
          <div className="project-icon-links">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${project.title}`}>
              <FiExternalLink size={17} />
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`GitHub for ${project.title}`}>
              <FiGithub size={17} />
            </a>
          </div>
        </div>

        <p className="project-description">{project.description}</p>

        {/* Key features */}
        {project.features && (
          <ul className="project-features">
            {project.features.map((f) => (
              <li key={f.id}>
                <span aria-hidden="true">→</span>
                {f.text}
              </li>
            ))}
          </ul>
        )}

        {/* Tech pills */}
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t.id} className="tech-pill">{t.name}</span>
          ))}
        </div>

        {/* Bottom action buttons */}
        <div className="project-card-actions">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-action-btn card-action-btn--primary"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            aria-label={`Live demo of ${project.title}`}
          >
            <FiExternalLink size={14} aria-hidden="true" />
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-action-btn card-action-btn--outline"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            aria-label={`GitHub for ${project.title}`}
          >
            <FiGithub size={14} aria-hidden="true" />
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────────── */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const flagship = filtered.find((p) => p.flagship);
  const rest     = filtered.filter((p) => !p.flagship);

  return (
    <section id="projects" className="projects-section section" aria-label="Projects">
      <div className="container">

        {/* Header */}
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="section-label">What I've Built</span>
          <h2 className="section-title">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Full-stack and frontend projects demonstrating MERN development, clean architecture, and polished UI.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="project-filters"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          role="tablist"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((cat) => (
            <motion.button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              role="tab"
              aria-selected={activeFilter === cat}
            >
              {cat}
              {activeFilter === cat && (
                <motion.span
                  className="filter-pill-bg"
                  layoutId="projectFilterPill"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer(0.08, 0)}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 8, transition: { duration: 0.18 } }}
          >
            {/* Flagship card — Cortex */}
            {flagship && (
              <div className="projects-flagship">
                <FlagshipCard project={flagship} />
              </div>
            )}

            {/* Remaining cards grid */}
            {rest.length > 0 && (
              <div className="projects-grid">
                {rest.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}

            {filtered.length === 0 && (
              <motion.p
                className="projects-empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                No projects in this category yet — check back soon.
              </motion.p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
