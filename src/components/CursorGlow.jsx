import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Soft glow that follows the cursor. Disabled on touch devices.
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 250, damping: 25 });
  const sy = useSpring(y, { stiffness: 250, damping: 25 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);
    const move = (e) => {
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[90] h-6 w-6 rounded-full border-2 border-cyan-400/70 mix-blend-screen"
        style={{ x: sx, y: sy }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none fixed z-[89] h-64 w-64 -translate-x-[45%] -translate-y-[45%] rounded-full bg-indigo-500/10 blur-3xl"
        style={{ x: sx, y: sy }}
        aria-hidden="true"
      />
    </>
  );
}
