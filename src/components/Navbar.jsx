import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/portfolio.js';

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/60 bg-white/75 shadow-sm backdrop-blur-xl dark:border-white/5 dark:bg-night-950/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
        <button
          onClick={() => goTo('home')}
          className="group flex items-center gap-2.5"
          aria-label="Go to home section"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 font-display text-sm font-bold text-white shadow-glow transition-transform group-hover:scale-105">
            DV
          </span>
          <span className="hidden flex-col items-start leading-tight sm:flex">
            <span className="font-display text-base font-bold tracking-tight text-slate-900 dark:text-white">
              Divya Verma
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Software Engineer
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => goTo(id)}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === id
                    ? 'text-indigo-600 dark:text-cyan-300'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
                aria-current={active === id ? 'true' : undefined}
              >
                {label}
                {active === id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg border border-slate-200 p-2 text-slate-600 dark:border-white/10 dark:text-slate-300 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-slate-200/60 bg-white/95 backdrop-blur-xl dark:border-white/5 dark:bg-night-950/95 lg:hidden"
          >
            <ul className="grid grid-cols-2 gap-1 px-5 py-4">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => goTo(id)}
                    className={`w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                      active === id
                        ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-cyan-300'
                        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
