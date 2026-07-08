import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-night-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: 'none' }}
      transition={{ delay: 1.1, duration: 0.4 }}
      aria-hidden="true"
    >
      <motion.div
        className="font-display text-4xl font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="gradient-text">DV</span>
      </motion.div>
      <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ repeat: Infinity, duration: 0.9, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}
