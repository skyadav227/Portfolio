// ============================================================
// REUSABLE FRAMER MOTION ANIMATION VARIANTS
// Optimised for performance:
//  – Only opacity + transform (GPU-composited, no layout)
//  – Consistent 0.5s duration throughout
//  – Premium easing curve [0.22, 1, 0.36, 1]
//  – Reduced y/x travel to prevent jitter
//  – viewportConfig: once:true to avoid re-triggering
// ============================================================

const EASE = [0.22, 1, 0.36, 1];
const DUR  = 0.5;

/** Fade up — primary reveal */
export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: DUR, ease: EASE } },
};

/** Fade in — opacity only, zero layout cost */
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DUR, ease: 'easeOut' } },
};

/** Fade from right */
export const fadeLeft = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: DUR, ease: EASE } },
};

/** Fade from left */
export const fadeRight = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: DUR, ease: EASE } },
};

/** Scale up — subtle, no spring overshoot */
export const scaleUp = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: DUR, ease: EASE } },
};

/** Stagger container — pure orchestrator, no own animation */
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden:  {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Stagger child */
export const staggerItem = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: DUR, ease: EASE } },
};

/** Hero name — slight vertical slide, no skew (prevents text blur on low-DPR) */
export const heroTitle = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Timeline alternates */
export const timelineLeft = {
  hidden:  { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: DUR, ease: EASE } },
};

export const timelineRight = {
  hidden:  { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: DUR, ease: EASE } },
};

/**
 * Viewport defaults
 *  – once: true  → animation fires only once (no jitter on scroll back)
 *  – margin      → trigger slightly before element enters viewport
 */
export const viewportConfig = {
  once:   true,
  margin: '-60px',
};
