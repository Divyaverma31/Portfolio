import { motion } from 'framer-motion';
import { BrainCircuit, Cloud, Code2, LayoutTemplate, ShieldCheck, Wrench } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { skillGroups } from '../data/portfolio.js';

const icons = {
  code: Code2,
  layout: LayoutTemplate,
  brain: BrainCircuit,
  shield: ShieldCheck,
  cloud: Cloud,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Expertise"
          title="Skills & Technologies"
          subtitle="A toolkit spanning quality engineering, frontend development, AI applications and cloud infrastructure."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon];
            return (
              <Reveal key={group.title} delay={(i % 3) * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass-card h-full p-6 transition-shadow hover:shadow-glow dark:hover:border-indigo-400/40"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 p-2.5 text-white shadow-glow">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                      {group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="chip hover:scale-105">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
