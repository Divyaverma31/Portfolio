import { Briefcase, CalendarDays, MapPin } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { experience } from '../data/portfolio.js';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Career" title="Experience" />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline rail */}
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-indigo-500 via-blue-500 to-transparent sm:left-6"
          />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.role} delay={i * 0.15} className="relative pl-14 sm:pl-20">
                <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-glow sm:left-2 sm:h-9 sm:w-9">
                  <Briefcase size={15} />
                </span>

                <div className="glass-card glass-card-hover p-6 sm:p-7">
                  <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                    {job.role}
                  </h3>
                  <p className="mt-1 font-medium text-indigo-600 dark:text-cyan-300">{job.company}</p>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={13} /> {job.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} /> {job.location}
                    </span>
                  </div>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
