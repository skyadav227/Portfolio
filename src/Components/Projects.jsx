import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi';
import { projects, projectCategories } from '../data/projects';
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from '../animations/variants';
import './Projects.css';

function ProjectCard({ project, isFeatured = false }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 10;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.article
      className={`project-card ${isFeatured ? 'project-card--featured' : ''}`}
      variants={staggerItem}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 ? 'transform 0.5s ease' : 'transform 0.1s ease',
      }}
      aria-label={project.title}
    >
      {/* Image */}
      <div className="project-image-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="project-overlay" aria-hidden="true" />

        {/* Featured badge */}
        {isFeatured && (
          <div className="featured-badge">
            <FiStar size={12} aria-hidden="true" />
            Featured
          </div>
        )}

        {/* Hover links */}
        <div className="project-hover-links">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`View ${project.title} live demo`}
          >
            <FiExternalLink size={16} aria-hidden="true" />
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn project-link-btn--ghost"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`View ${project.title} on GitHub`}
          >
            <FiGithub size={16} aria-hidden="true" />
            Code
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="project-body">
        <div className="project-header-row">
          <div>
            <p className="project-tagline">{project.tagline}</p>
            <h3 className="project-title">{project.title}</h3>
          </div>
          <div className="project-icon-links">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${project.title}`}
            >
              <FiExternalLink size={18} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <FiGithub size={18} />
            </a>
          </div>
        </div>

        <p className="project-description">{project.description}</p>

        {/* Key features */}
        {isFeatured && project.features && (
          <ul className="project-features">
            {project.features.map((f) => (
              <li key={f.id}>
                <span aria-hidden="true">→</span>
                {f.text}
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack */}
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t.id} className="tech-pill">{t.name}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

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
            A curated showcase of projects demonstrating frontend engineering, UI design, and problem solving.
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
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
          >
            {/* Featured project — full width */}
            {featured && (
              <div className="projects-featured">
                <ProjectCard project={featured} isFeatured />
              </div>
            )}

            {/* Rest — grid */}
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
