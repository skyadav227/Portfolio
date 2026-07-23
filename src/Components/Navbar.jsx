import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollDirection from '../hooks/useScrollDirection';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { direction, isAtTop } = useScrollDirection();
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navVisible = direction === 'up' || isAtTop || menuOpen;

  return (
    <motion.header
      className={`navbar-wrapper ${!isAtTop ? 'scrolled' : ''}`}
      animate={{ y: navVisible ? 0 : -100, opacity: navVisible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar-inner">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="nav-logo"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Karthik<span className="logo-dot">.</span>
        </motion.a>

        {/* Desktop links */}
        <nav className="nav-links-desktop" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <motion.span
                  className="nav-active-dot"
                  layoutId="activeNavDot"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Resume CTA */}
        <motion.a
          href="/resume.pdf"
          className="nav-resume-btn"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          Resume
        </motion.a>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((p) => !p)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="nav-mobile-menu"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`nav-mobile-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              className="nav-mobile-resume"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.06, duration: 0.3 }}
            >
              Resume ↗
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
