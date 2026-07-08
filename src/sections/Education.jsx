import { CalendarDays, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { education } from '../data/portfolio.js';

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Academics" title="Education" />

        <Reveal direction="scale" className="mx-auto max-w-3xl">
          <div className="glass-card glass-card-hover relative overflow-hidden p-8">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 blur-3xl"
            />
            <div className="flex flex-col items-start gap-6 sm:flex-row">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-glow">
                <GraduationCap size={28} />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  {education.institute}
                </h3>
                <p className="mt-1 font-medium text-indigo-600 dark:text-cyan-300">
                  {education.degree} — {education.field}
                </p>
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={14} /> Graduated {education.graduation}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} /> {education.location}
                  </span>
                </div>
                <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600/10 to-cyan-500/10 px-4 py-2.5 dark:from-indigo-500/15 dark:to-cyan-400/15">
                  <Sparkles size={16} className="text-cyan-500" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    CGPA:&nbsp;
                    <span className="font-display text-lg font-bold gradient-text">8.4</span>
                    &nbsp;/ 10
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
