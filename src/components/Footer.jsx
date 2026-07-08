import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, Phone } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200/60 py-10 dark:border-white/5">
      <div className="section-shell flex flex-col items-center gap-5 text-center">
        <p className="font-display text-2xl font-bold text-slate-900 dark:text-white">
          {profile.name}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">Software Engineer</p>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition-all hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-500 dark:border-white/10 dark:text-slate-400 dark:hover:text-cyan-300"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition-all hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-500 dark:border-white/10 dark:text-slate-400 dark:hover:text-cyan-300"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send email"
            className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition-all hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-500 dark:border-white/10 dark:text-slate-400 dark:hover:text-cyan-300"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.phoneHref}
            aria-label="Call phone"
            className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition-all hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-500 dark:border-white/10 dark:text-slate-400 dark:hover:text-cyan-300"
          >
            <Phone size={16} />
          </a>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-500">
          Built using React.js, Tailwind CSS and Framer Motion.
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-600">
          © 2026 Divya Verma. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
