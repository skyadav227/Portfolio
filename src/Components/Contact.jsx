import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewportConfig } from '../animations/variants';
import './Contact.css';

const socials = [
  {
    icon:  FiGithub,
    label: 'GitHub',
    href:  'https://github.com/skyadav227',
    value: 'skyadav227',
  },
  {
    icon:  FiLinkedin,
    label: 'LinkedIn',
    href:  'https://www.linkedin.com/in/sher-karthikeya-yadav-009193226/',
    value: 'sher-karthikeya-yadav',
  },
  {
    icon:  FiMail,
    label: 'Email',
    href:  'mailto:karthikeyayadav547@gmail.com',
    value: 'karthikeyayadav547@gmail.com',
  },
];

const details = [
  { icon: FiMapPin,  label: 'Location', value: 'Hyderabad, Telangana' },
  { icon: FiPhone,  label: 'Phone',    value: '+91 8977696987'         },
];

/* ── Animated Input ── */
function FormField({ label, id, type = 'text', value, onChange, required, multiline }) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;
  const Tag = multiline ? 'textarea' : 'input';

  return (
    <div className={`form-field ${isActive ? 'active' : ''} ${focused ? 'focused' : ''}`}>
      <label className="form-label" htmlFor={id}>
        {label} {required && <span className="required-star" aria-hidden="true">*</span>}
      </label>
      <Tag
        id={id}
        name={id}
        type={multiline ? undefined : type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="form-input"
        rows={multiline ? 5 : undefined}
        required={required}
        aria-required={required}
      />
      <motion.div
        className="form-underline"
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export default function Contact() {
  const formRef = useRef(null);
  const [fields, setFields] = useState({ user_name: '', user_email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',    // ← Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',   // ← Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY'     // ← Replace with your EmailJS public key
      );
      setStatus('success');
      setFields({ user_name: '', user_email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="contact-section section" aria-label="Contact">
      <div className="container">

        {/* Header */}
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle">
            Open to frontend roles, internships, freelance projects, and interesting collaborations.
          </p>
        </motion.div>

        <div className="contact-grid">

          {/* Left — Info */}
          <motion.div
            className="contact-info"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Availability badge */}
            <div className="availability-card">
              <div className="avail-indicator">
                <span className="avail-pulse" />
                <span className="avail-text">Available for Work</span>
              </div>
              <p className="avail-desc">
                Currently seeking software developer and full-stack opportunities.
              </p>
            </div>

            {/* Contact details */}
            <div className="contact-details">
              {details.map(({ icon: Icon, label, value }) => (
                <div key={label} className="contact-detail-row">
                  <div className="contact-detail-icon" aria-hidden="true">
                    <Icon size={16} />
                  </div>
                  <div>
                    <span className="detail-label">{label}</span>
                    <span className="detail-value">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              className="contact-socials"
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <p className="socials-heading">Find me on</p>
              {socials.map(({ icon: Icon, label, href, value }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="contact-social-link"
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  variants={staggerItem}
                  whileHover={{ x: 6 }}
                  aria-label={`${label}: ${value}`}
                >
                  <div className="social-link-icon" aria-hidden="true">
                    <Icon size={18} />
                  </div>
                  <div className="social-link-text">
                    <span className="social-link-label">{label}</span>
                    <span className="social-link-value">{value}</span>
                  </div>
                  <svg className="social-link-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="contact-form-wrap glass-card"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h3 className="form-title">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} noValidate className="contact-form" aria-label="Contact form">
              <div className="form-row">
                <FormField
                  label="Your Name"
                  id="user_name"
                  value={fields.user_name}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="Email Address"
                  id="user_email"
                  type="email"
                  value={fields.user_email}
                  onChange={handleChange}
                  required
                />
              </div>
              <FormField
                label="Subject"
                id="subject"
                value={fields.subject}
                onChange={handleChange}
                required
              />
              <FormField
                label="Message"
                id="message"
                value={fields.message}
                onChange={handleChange}
                multiline
                required
              />

              {/* Submit button */}
              <motion.button
                type="submit"
                className="submit-btn"
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'idle' ? 1.02 : 1, y: status === 'idle' ? -2 : 0 }}
                whileTap={{ scale: 0.97 }}
              >
                <AnimatePresence mode="wait">
                  {status === 'idle' && (
                    <motion.span
                      key="idle"
                      className="submit-btn-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <FiSend size={16} aria-hidden="true" />
                      Send Message
                    </motion.span>
                  )}
                  {status === 'sending' && (
                    <motion.span
                      key="sending"
                      className="submit-btn-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="spinner" aria-hidden="true" />
                      Sending…
                    </motion.span>
                  )}
                  {status === 'success' && (
                    <motion.span
                      key="success"
                      className="submit-btn-content success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <FiCheck size={16} aria-hidden="true" />
                      Message Sent!
                    </motion.span>
                  )}
                  {status === 'error' && (
                    <motion.span
                      key="error"
                      className="submit-btn-content error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <FiAlertCircle size={16} aria-hidden="true" />
                      Try Again
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
