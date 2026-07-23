import React, { useEffect, useRef, useState, Suspense, useCallback, memo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import myPhoto from '../assets/Images/Karthik-2.png';
import { fadeUp, staggerContainer, heroTitle } from '../animations/variants';
import './Hero.css';

/* ─────────────────────────────────────────────────────────────
   WebGL support detection — runs once, never throws
───────────────────────────────────────────────────────────── */
function detectWebGL() {
  try {
    const canvas = document.createElement('canvas');
    const ctx =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl');
    if (!ctx) return false;
    const ext = ctx.getExtension('WEBGL_lose_context');
    if (ext) ext.loseContext(); // immediately release, don't hog GPU
    return true;
  } catch {
    return false;
  }
}

/* ─────────────────────────────────────────────────────────────
   Typewriter hook — memoised words array avoids re-creation
───────────────────────────────────────────────────────────── */
const ROLES = [
  'Software Developer',
  'Full Stack Developer',
  'MERN Stack Developer',
  'React Developer',
  'Frontend Developer',
];

function useTypewriter(words, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }
    setDisplay(current.substring(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ─────────────────────────────────────────────────────────────
   Lightweight 3-D scene
   – Only 3 objects (down from 6)
   – Sphere: 16 segments (down from 64)
   – Torus: 8 tube segments, 48 radial (down from 16×100)
   – Octahedron: single accent piece
   – All meshStandardMaterial — no shaders, no distort
   – 1 ambient + 1 directional light only
   – useFrame touches only Y rotation, no sin/cos math
   – frameloop="demand" + dpr=1 + antialias=false
───────────────────────────────────────────────────────────── */
function LightScene() {
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          color="#7c5cfc"
          metalness={0.6}
          roughness={0.3}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Orbit ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.8, 0.06, 8, 48]} />
        <meshStandardMaterial color="#00d4ff" transparent opacity={0.55} />
      </mesh>

      {/* Accent octahedron */}
      <mesh position={[2.1, 1.1, -0.4]}>
        <octahedronGeometry args={[0.32]} />
        <meshStandardMaterial color="#fc5c7d" metalness={0.7} roughness={0.2} />
      </mesh>
    </group>
  );
}

/* Memoised so it never re-mounts when Hero re-renders */
const ThreeScene = memo(function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
      dpr={1}
      frameloop="always"
    >
      {/* Simplified lighting: 1 ambient + 1 directional */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 4, 4]} intensity={1.2} color="#ffffff" />
      <Suspense fallback={null}>
        <LightScene />
      </Suspense>
    </Canvas>
  );
});

/* ─────────────────────────────────────────────────────────────
   CSS fallback — shown when WebGL is unavailable
   Pure CSS animated blobs — premium, zero GPU shader cost
───────────────────────────────────────────────────────────── */
function CSSFallbackVisual() {
  return (
    <div className="css-fallback-visual" aria-hidden="true">
      <div className="css-blob css-blob-1" />
      <div className="css-blob css-blob-2" />
      <div className="css-blob css-blob-3" />
      <div className="css-rings">
        <div className="css-ring css-ring-1" />
        <div className="css-ring css-ring-2" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Social links — defined outside component to avoid re-creation
───────────────────────────────────────────────────────────── */
const SOCIALS = [
  { icon: FiGithub,   href: 'https://github.com/skyadav227',                                label: 'GitHub'   },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sher-karthikeya-yadav-009193226/', label: 'LinkedIn' },
  { icon: FiMail,     href: 'mailto:karthikeyayadav547@gmail.com',                          label: 'Email'    },
];

/* ─────────────────────────────────────────────────────────────
   Hero component
───────────────────────────────────────────────────────────── */
export default function Hero() {
  const [webglSupported] = useState(() => detectWebGL());

  /* Mouse parallax — spring-smoothed, applied only to the
     visual panel to avoid animating layout properties       */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 50, damping: 18 });
  const springY = useSpring(rawY, { stiffness: 50, damping: 18 });
  const parallaxX = useTransform(springX, [-1, 1], [-10, 10]);
  const parallaxY = useTransform(springY, [-1, 1], [-6, 6]);

  useEffect(() => {
    const onMove = (e) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 2);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [rawX, rawY]);

  const role = useTypewriter(ROLES);

  const handleScrollDown = useCallback(() => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section id="hero" className="hero-section" aria-label="Hero">
      <div className="hero-bg-gradient" aria-hidden="true" />
      <div className="hero-grid-overlay" aria-hidden="true" />

      <div className="hero-container">

        {/* ── LEFT: text ── */}
        <motion.div
          className="hero-content"
          variants={staggerContainer(0.08, 0.15)}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={fadeUp}>
            <span className="badge-dot" />
            Available for work
          </motion.div>

          <div className="hero-headline-wrap">
            <motion.p className="hero-greeting" variants={fadeUp}>Hi, I'm</motion.p>
            <motion.h1 className="hero-name" variants={heroTitle}>Karthik</motion.h1>
          </div>

          <motion.div className="hero-role-wrap" variants={fadeUp}>
            <span className="hero-role">{role}</span>
            <span className="cursor" aria-hidden="true">|</span>
          </motion.div>

          <motion.p className="hero-tagline" variants={fadeUp}>
            I build modern web applications across the full stack — from pixel-perfect
            React UIs to scalable Node.js APIs and MongoDB databases. Turning ideas into
            production-ready software.
          </motion.p>

          <motion.div className="hero-cta" variants={fadeUp}>
            <motion.a
              href="#projects"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
            <motion.a
              href="/resume.pdf"
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div className="hero-socials" variants={fadeUp}>
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="social-icon"
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.92 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: visual panel ── */}
        <motion.div
          className="hero-visual"
          style={{ x: parallaxX, y: parallaxY }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* 3-D or CSS fallback */}
          <div className="hero-3d-canvas" aria-hidden="true">
            {webglSupported ? <ThreeScene /> : <CSSFallbackVisual />}
          </div>

          {/* Profile photo */}
          <div className="hero-photo-wrapper">
            <div className="photo-ring"      aria-hidden="true" />
            <div className="photo-ring photo-ring-2" aria-hidden="true" />
            <img
              src={myPhoto}
              alt="Karthik — Software Developer"
              className="hero-photo"
              loading="eager"
              width="240"
              height="240"
            />
            <div className="photo-status-badge">
              <span className="status-pulse" />
              Open to Opportunities
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        className="scroll-indicator"
        onClick={handleScrollDown}
        aria-label="Scroll to About section"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ display: 'flex' }}
        >
          <FiArrowDown size={20} />
        </motion.span>
      </motion.button>
    </section>
  );
}
