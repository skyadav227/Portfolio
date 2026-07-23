import { useState, useEffect } from 'react';

/**
 * Tracks mouse position normalized to [-1, 1] relative to window center.
 * Perfect for parallax effects.
 */
export default function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [normalized, setNormalized] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setNormalized({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { position, normalized };
}
