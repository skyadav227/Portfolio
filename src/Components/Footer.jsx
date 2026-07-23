import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { fadeUp, viewportConfig } from '../animations/variants';
import './Footer.css';

const socials = [
  { icon: FiGithub,   href: 'https://github.com/skyadav227',                                 label: 'GitHub'   },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sher-karthikeya-yadav-009193226/', label: 'LinkedIn' },
  { icon: FiMail,     href: 'mailto:karthikeyayadav547@gmail.com',                           label: 'Email'    },
];

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Footer() {
  const year = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-top-border" aria-hidden="true" />

      <div className="footer-container">
        <motion.div
          className="footer-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="footer-brand">
            <a
              href="#hero"
              className="footer-logo"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              aria-label="Back to top"
            >
              Karthik<span className="footer-logo-dot">.</span>
            </a>
            <p className="footer-tagline">
              Building full-stack software, one commit at a time.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="footer-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="footer-socials" role="list">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="footer-social-icon"
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                role="listitem"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={18} aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <p className="footer-copyright">
            © {year} Karthik. All rights reserved.
          </p>
          <p className="footer-made-with">
            Crafted with React &amp; Framer Motion
          </p>
        </motion.div>
      </div>

      {/* Fixed back to top button with scroll listener */}
      <motion.button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          pointerEvents: showBackToTop ? 'all' : 'none',
        }}
        transition={{ duration: 0.3 }}
      >
        <FiArrowUp size={20} aria-hidden="true" />
      </motion.button>
    </footer>
  );
}
