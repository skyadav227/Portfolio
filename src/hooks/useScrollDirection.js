import { useState, useEffect, useRef } from 'react';

/**
 * Returns 'up' or 'down' based on scroll direction.
 * Also returns whether the page is at the top.
 */
export default function useScrollDirection(threshold = 10) {
  const [direction, setDirection] = useState('up');
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          setIsAtTop(currentScrollY < 20);

          if (Math.abs(currentScrollY - lastScrollY.current) >= threshold) {
            setDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
            lastScrollY.current = currentScrollY;
          }

          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { direction, isAtTop };
}
