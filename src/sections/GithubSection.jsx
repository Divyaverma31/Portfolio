import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { profile } from '../data/portfolio.js';

export default function GithubSection() {
  return (
    <section id="github" className="relative py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Open Source"
          title="GitHub"
          subtitle="Explore my projects, contributions and code on GitHub."
        />

        <Reveal direction="scale" className="mx-auto max-w-2xl">
          <motion.div
            whileHover={{ y: -6 }}
            className="glass-card relative overflow-hidden p-10 text-center transition-shadow hover:shadow-glow"
          >
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 blur-3xl"
            />
            <span className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-glow">
              <FaGithub size={40} />
            </span>
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              @{profile.githubUsername}
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              From AI-powered recommendation systems to cloud infrastructure projects — check out
              what I&apos;m building and contributing to.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-7"
              aria-label="Visit my GitHub profile"
            >
              <FaGithub size={16} /> Visit My GitHub <ExternalLink size={14} />
            </a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
