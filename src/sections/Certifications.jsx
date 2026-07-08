import { motion } from 'framer-motion';
import { BadgeCheck, ExternalLink, ShieldCheck } from 'lucide-react';
import { FaAws } from 'react-icons/fa';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { certifications } from '../data/portfolio.js';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Credentials" title="Certifications" />

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.15} direction={i % 2 === 0 ? 'left' : 'right'}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-card relative h-full overflow-hidden p-7 transition-shadow hover:shadow-glow"
              >
                {/* Certificate ribbon */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400"
                />
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-lg">
                    <FaAws size={26} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-cyan-300">
                      <BadgeCheck size={14} /> {cert.issuer}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {cert.description}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Verify ${cert.title} credential`}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-600 transition-all hover:scale-105 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/20"
                >
                  <ShieldCheck size={13} /> Verify Credential <ExternalLink size={11} />
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
