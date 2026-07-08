import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Download, FolderGit2, Send } from 'lucide-react';
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import { profile } from '../data/portfolio.js';

const floatingIcons = [
  { Icon: FaReact, className: 'left-[4%] top-[22%] text-cyan-400', delay: 0 },
  { Icon: FaAws, className: 'right-[6%] top-[18%] text-orange-400', delay: 1.2 },
  { Icon: SiJavascript, className: 'left-[10%] bottom-[18%] text-yellow-400', delay: 0.6 },
  { Icon: FaPython, className: 'right-[12%] bottom-[24%] text-blue-400', delay: 1.8 },
  { Icon: SiTailwindcss, className: 'left-[45%] top-[10%] text-sky-400', delay: 2.4 },
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      {/* Animated gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-24 h-96 w-96 animate-blob rounded-full bg-indigo-600/25 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] animate-blob-slow rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-blob rounded-full bg-blue-600/20 blur-3xl [animation-delay:4s]" />
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          className={`absolute hidden text-3xl opacity-40 md:block ${className}`}
          animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
        >
          <Icon />
        </motion.div>
      ))}

      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="mb-3 font-mono text-sm tracking-widest text-cyan-500 dark:text-cyan-400">
            Hello, I&apos;m
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-6xl">
            Divya <span className="gradient-text">Verma</span>
          </h1>

          <div className="mt-4 h-9 text-xl font-semibold text-slate-700 dark:text-slate-200 sm:text-2xl">
            <TypeAnimation
              sequence={profile.roles.flatMap((role) => [role, 2000])}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="gradient-text"
            />
          </div>

          <p className="mt-6 max-w-xl leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => scrollToId('projects')} className="btn-primary">
              <FolderGit2 size={16} /> View Projects
            </button>
            <a href={profile.resumeFile} download="Divya_Verma_Resume.pdf" className="btn-secondary">
              <Download size={16} /> Download Resume
            </a>
            <button onClick={() => scrollToId('contact')} className="btn-secondary">
              <Send size={16} /> Contact Me
            </button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {[
              { href: profile.github, label: 'GitHub', Icon: FaGithub },
              { href: profile.linkedin, label: 'LinkedIn', Icon: FaLinkedin },
            ].map(({ href, label, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -4, scale: 1.1 }}
                className="rounded-full border border-slate-200 p-3 text-slate-500 transition-colors hover:border-indigo-400 hover:text-indigo-500 dark:border-white/10 dark:text-slate-400 dark:hover:border-cyan-400/50 dark:hover:text-cyan-300"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
        >
          <div className="absolute inset-0 -z-10 animate-blob rounded-full bg-gradient-to-tr from-indigo-600/40 via-blue-600/25 to-cyan-500/40 blur-2xl" />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative mx-auto aspect-[3/4] w-full overflow-hidden rounded-3xl p-[3px]"
          >
            {/* Gradient frame */}
            <div className="absolute inset-0 animate-gradient-x rounded-3xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 bg-200%" />
            <img
              src="/divya.jpg"
              alt="Divya Verma"
              className="relative h-full w-full rounded-3xl object-cover object-top"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[3px] rounded-3xl bg-gradient-to-t from-night-950/60 via-transparent to-transparent"
            />
          </motion.div>

          {/* Floating badges around the card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            className="glass-card absolute -left-10 top-8 hidden items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 sm:flex dark:text-slate-200"
          >
            <FaReact className="text-cyan-400" /> React.js
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
            className="glass-card absolute -right-8 top-1/3 hidden items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 sm:flex dark:text-slate-200"
          >
            <FaAws className="text-orange-400" /> AWS Cloud
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
            className="glass-card absolute -bottom-6 left-10 hidden items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 sm:flex dark:text-slate-200"
          >
            <FaNodeJs className="text-green-400" /> Quality Engineering
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, delay: 2 }}
            className="glass-card absolute -bottom-4 right-4 hidden items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 sm:flex dark:text-slate-200"
          >
            <FaDocker className="text-blue-400" /> AI &amp; LLMs
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={() => scrollToId('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 transition-colors hover:text-indigo-500 dark:hover:text-cyan-300"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        aria-label="Scroll to about section"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
}
