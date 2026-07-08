import { motion } from 'framer-motion';
import { CheckCircle2, ExternalLink, Sparkles, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { projects } from '../data/portfolio.js';

function ProjectBanner({ project, large = false }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient} ${
        large ? 'min-h-[220px] lg:min-h-full' : 'h-40'
      }`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_30%,white_1px,transparent_1px)] [background-size:24px_24px]" />
      <span className="px-6 text-center font-display text-2xl font-bold tracking-tight text-white drop-shadow-lg">
        {project.title}
      </span>
    </div>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="mt-5 flex gap-3">
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="btn-secondary !px-4 !py-2 text-xs"
        aria-label={`View ${project.title} source on GitHub`}
      >
        <FaGithub size={14} /> GitHub
      </a>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="btn-primary !px-4 !py-2 text-xs"
          aria-label={`Open live demo of ${project.title}`}
        >
          <ExternalLink size={14} /> Live Demo
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="A selection of production-grade projects across AI, full-stack development and cloud."
        />

        {/* Hero project */}
        {featured && (
          <Reveal className="mb-10">
            <motion.article
              whileHover={{ y: -4 }}
              className="glass-card grid overflow-hidden p-0 shadow-glow lg:grid-cols-[0.9fr_1.1fr]"
            >
              <ProjectBanner project={featured} large />
              <div className="p-7 sm:p-8">
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-3 py-1 text-xs font-semibold text-white">
                  <Star size={12} /> Featured Project
                </span>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  {featured.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                  {featured.description}
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {featured.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                <ProjectLinks project={featured} />
              </div>
            </motion.article>
          </Reveal>
        )}

        {/* Remaining projects */}
        <div className="grid gap-7 sm:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.12}>
              <motion.article
                whileHover={{ y: -6 }}
                className="glass-card group h-full overflow-hidden p-0 transition-shadow hover:shadow-glow"
              >
                <ProjectBanner project={project} />
                <div className="p-6">
                  <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-slate-900 dark:text-white">
                    <Sparkles size={16} className="text-indigo-500 dark:text-cyan-400" />
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ProjectLinks project={project} />
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
