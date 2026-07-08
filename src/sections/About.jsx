import { CheckCircle2, User } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Counter from '../components/Counter.jsx';
import { about } from '../data/portfolio.js';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Introduction" title="About Me" />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal direction="left" className="space-y-5">
            {about.paragraphs.map((text, i) => (
              <p key={i} className="leading-relaxed text-slate-600 dark:text-slate-400">
                {text}
              </p>
            ))}

            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              {about.stats.map(({ label, value, suffix }) => (
                <div key={label} className="glass-card glass-card-hover p-4 text-center">
                  <Counter
                    value={value}
                    suffix={suffix}
                    className="font-display text-3xl font-bold gradient-text"
                  />
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="glass-card glass-card-hover p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 p-2.5 text-white">
                  <User size={18} />
                </span>
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                  Professional Highlights
                </h3>
              </div>
              <ul className="space-y-3.5">
                {about.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={16} className="shrink-0 text-cyan-500 dark:text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
