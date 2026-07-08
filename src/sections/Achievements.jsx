import { motion } from 'framer-motion';
import { Medal, Rocket, ShieldCheck, Target, Trophy } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { achievements } from '../data/portfolio.js';

const icons = { trophy: Trophy, shield: ShieldCheck, rocket: Rocket, target: Target, medal: Medal };

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Recognition" title="Achievements" />

        <div className="grid gap-6 sm:grid-cols-2">
          {achievements.map((item, i) => {
            const Icon = icons[item.icon];
            const isLoneLastCard = achievements.length % 2 === 1 && i === achievements.length - 1;
            return (
              <Reveal
                key={item.title}
                delay={i * 0.12}
                direction="scale"
                className={isLoneLastCard ? 'sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-xl' : ''}
              >
                <motion.div
                  whileHover={{ y: -6, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
                  className="glass-card relative h-full overflow-hidden p-7 text-center transition-shadow hover:shadow-glow"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 blur-2xl"
                  />
                  <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-glow">
                    <Icon size={24} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
