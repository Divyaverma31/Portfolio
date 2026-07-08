import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Loader2, Mail, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { profile } from '../data/portfolio.js';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactCards = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: profile.phoneHref,
    Icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: 'divya-verma-730b70261',
    href: profile.linkedin,
    Icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    value: 'Divyaverma31',
    href: profile.github,
    Icon: FaGithub,
  },
];

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none backdrop-blur transition-colors placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200';

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error('Contact form is not configured yet. Please email me directly!');
      return;
    }

    try {
      setSending(true);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      toast.success("Message sent successfully! I'll get back to you soon.");
      formRef.current.reset();
    } catch {
      toast.error('Something went wrong while sending. Please try again or email me directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Connect"
          subtitle="I'm actively looking for Software Engineering, AI, QA, Frontend Development, and Cloud opportunities. Feel free to connect for internships, full-time roles, collaborations, or technical discussions."
        />

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact cards */}
          <div className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contactCards.map(({ label, value, href, Icon }, i) => (
              <Reveal key={label} delay={i * 0.08} direction="left">
                <motion.a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  whileHover={{ x: 6 }}
                  className="glass-card glass-card-hover flex items-center gap-4 p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-glow">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {label}
                    </p>
                    <p className="truncate text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {value}
                    </p>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>

          {/* EmailJS form */}
          <Reveal direction="right">
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card space-y-5 p-7 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="title"
                  type="text"
                  required
                  placeholder="What would you like to discuss?"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Write your message here…"
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button type="submit" disabled={sending} className="btn-primary w-full justify-center disabled:opacity-60">
                {sending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
