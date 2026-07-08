import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { profile } from '../data/portfolio.js';

export default function Resume() {
  return (
    <section id="resume" className="relative py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Curriculum Vitae"
          title="My Resume"
          subtitle="Grab a copy of my resume or open it directly in your browser."
        />

        <Reveal direction="scale" className="mx-auto max-w-2xl">
          <motion.div
            whileHover={{ y: -6 }}
            className="glass-card relative overflow-hidden p-10 text-center transition-shadow hover:shadow-glow"
          >
            <div
              aria-hidden="true"
              className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 blur-3xl"
            />
            <span className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-glow">
              <FileText size={36} />
            </span>
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Divya Verma — Resume
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Software Engineer with experience in Quality Engineering, React Development, AI
              Applications and AWS Cloud.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={profile.resumeFile}
                download="Divya_Verma_Resume.pdf"
                className="btn-primary"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href={profile.resumeFile}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <ExternalLink size={16} /> Open in New Tab
              </a>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
