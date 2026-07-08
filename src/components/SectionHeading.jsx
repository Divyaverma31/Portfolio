import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="mb-2 font-mono text-sm uppercase tracking-[0.25em] text-cyan-500 dark:text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">{subtitle}</p>
      )}
      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400" />
    </Reveal>
  );
}
