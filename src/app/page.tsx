"use client"
import { Github, Linkedin, ArrowUpRight, Mail, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteConfig, skills, projects, moreExperiments, experience } from '@/data/portfolio';

// Import your new components
import MagneticButton from '@/components/MagneticButton';
import SpotlightCard from '@/components/SpotlightCard';

const categoryAccent: Record<string, { dot: string; text: string }> = {
  'Machine Learning': { dot: 'bg-[var(--teal)]', text: 'text-[var(--teal)]' },
  'Computer Vision': { dot: 'bg-[var(--amber)]', text: 'text-[#9c6a26]' },
  'LLMs & GenAI': { dot: 'bg-[var(--rose)]', text: 'text-[#a1503f]' },
  'NLP': { dot: 'bg-[var(--teal-soft)]', text: 'text-[var(--teal)]' },
  'Engineering & Deployment': { dot: 'bg-[var(--ink-faint)]', text: 'text-[var(--ink-soft)]' },
};

const focusAreas = [
  {
    label: 'Computer Vision',
    copy: 'Detection, tracking, and gesture recognition — models that have to work on real, messy video, not a clean benchmark set.',
  },
  {
    label: 'LLM & RAG Systems',
    copy: 'Retrieval pipelines and prompt-engineered apps that answer with sources, not just fluent guesses.',
  },
  {
    label: 'Backend & Deployment',
    copy: 'FastAPI services, Docker, and the unglamorous plumbing that turns a notebook result into something a user can actually hit.',
  },
];

// Reusable scroll animation settings for sections
const sectionReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
};

export default function Home() {
  const internshipCount = experience.filter((e) =>
    e.role.toLowerCase().includes('intern')
  ).length;
  const [featured, ...restProjects] = projects;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* ============ NAV ============ */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--paper)]/85 backdrop-blur-md border-b border-transparent">
        <div className="max-w-5xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
          <Link href="#top" className="font-display italic text-lg text-[var(--ink)]">
            {siteConfig.name.split(' ')[0]}
          </Link>
          <div className="flex items-center gap-8 text-[13px] text-[var(--ink-soft)]">
            <Link href="#about" className="hidden sm:inline hover:text-[var(--ink)] transition-colors">About</Link>
            <Link href="#work" className="hidden sm:inline hover:text-[var(--ink)] transition-colors">Work</Link>
            <Link href="#experience" className="hidden sm:inline hover:text-[var(--ink)] transition-colors">Experience</Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="px-4 py-2 rounded-full bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--teal)] transition-colors"
            >
              Say hello
            </a>
          </div>
        </div>
      </nav>

      <main id="top" className="px-6 md:px-8 max-w-5xl mx-auto">

        {/* ============ HERO ============ */}
        <section className="relative pt-36 md:pt-40 pb-24 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="grade-wash w-[420px] h-[420px] -top-20 -right-24 md:right-0" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <p className="text-[13px] tracking-wide text-[var(--ink-faint)] mb-6 uppercase">
              {siteConfig.location} · {siteConfig.currentRole}
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-display text-[clamp(2.4rem,5.5vw,3.8rem)] leading-[1.06] text-[var(--ink)] mb-8 text-balance"
            >
              I turn <span className="italic text-[var(--teal)]">messy data</span> into
              systems people can actually use.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-[17px] text-[var(--ink-soft)] leading-relaxed max-w-md mb-8"
            >
              {siteConfig.name} — {siteConfig.role.toLowerCase()}. Comfortable
              anywhere between a training loop and a production API, with a soft
              spot for computer vision and retrieval-augmented LLM apps.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="flex items-center gap-6 mb-10 text-[13px] text-[var(--ink-faint)]"
            >
              <span>{projects.length} shipped projects</span>
              <span className="w-1 h-1 rounded-full bg-[var(--ink-faint)]" />
              <span>{internshipCount} internships</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <MagneticButton
                href="#work"
                className="group px-6 py-3 rounded-full bg-[var(--ink)] text-[var(--paper)] text-sm font-medium hover:bg-[var(--teal)] transition-colors inline-flex items-center gap-2"
              >
                See the work
                <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </MagneticButton>
              <MagneticButton
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--ink-soft)] hover:text-[var(--ink)] hover:border-[var(--ink-faint)] transition-colors"
              >
                <Github size={17} />
              </MagneticButton>
              <MagneticButton
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--ink-soft)] hover:text-[var(--ink)] hover:border-[var(--ink-faint)] transition-colors"
              >
                <Linkedin size={17} />
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative hidden md:block"
          >
            <SpotlightCard className="card-wash rounded-[28px] rotate-[2deg] shadow-[var(--shadow-lg)]">
              <div className="p-8 relative z-20">
                <p className="text-[12px] uppercase tracking-wide text-[var(--ink-faint)] mb-4">Currently</p>
                <p className="font-display italic text-xl text-[var(--ink)] leading-snug mb-6">
                  Building an NL2SQL pipeline with GIS routing for a conversational AI platform.
                </p>
                <div className="h-px bg-[var(--line)] mb-6" />
                <p className="text-[13px] text-[var(--ink-soft)]">{siteConfig.education}</p>
              </div>
            </SpotlightCard>
          </motion.div>
        </section>

        {/* ============ ABOUT ============ */}
        <motion.section
          id="about"
          {...sectionReveal}
          className="relative py-20 scroll-mt-24 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-12 items-center"
        >
          <div className="relative">
            <div className="grade-wash w-[320px] h-[320px] -top-10 -left-16 opacity-35" />
            <div className="relative rotate-[-2deg] rounded-[28px] overflow-hidden shadow-[var(--shadow-lg)] max-w-sm mx-auto md:mx-0">
              <Image
                src="/profile.jpg"
                alt={siteConfig.name}
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <p className="text-[13px] tracking-wide text-[var(--ink-faint)] mb-4 uppercase">About</p>
            <h2 className="font-display text-3xl md:text-[2.2rem] leading-[1.18] text-[var(--ink)] mb-6 text-balance">
              I like building things that <span className="italic text-[var(--teal)]">work in production</span>,
              not just in a notebook.
            </h2>
            <p className="text-[16px] text-[var(--ink-soft)] leading-relaxed max-w-lg mb-6">
              My path started with computer vision — teaching models to see — and
              grew into shipping full systems: APIs, RAG pipelines, and the
              unglamorous plumbing that makes AI features actually reliable for
              real users.
            </p>

            <dl className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-lg pt-2 border-t border-[var(--line)]">
              <div>
                <dt className="text-[12px] uppercase tracking-wide text-[var(--ink-faint)] mb-1">Based in</dt>
                <dd className="text-[14px] text-[var(--ink)]">{siteConfig.location}</dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-wide text-[var(--ink-faint)] mb-1">Currently</dt>
                <dd className="text-[14px] text-[var(--ink)]">{siteConfig.currentRole}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-[12px] uppercase tracking-wide text-[var(--ink-faint)] mb-1">Education</dt>
                <dd className="text-[14px] text-[var(--ink)]">{siteConfig.education}</dd>
              </div>
            </dl>
          </div>
        </motion.section>

        {/* ============ FOCUS ============ */}
        <motion.section {...sectionReveal} className="py-20">
          <p className="text-[13px] tracking-wide text-[var(--ink-faint)] mb-4 uppercase">What I focus on</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--line)] rounded-2xl overflow-hidden border border-[var(--line)]">
            {focusAreas.map((f, i) => (
              <div key={i} className="bg-[var(--card)] p-7">
                <span className="font-display italic text-sm text-[var(--amber)] block mb-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[15px] font-medium text-[var(--ink)] mb-2">{f.label}</h3>
                <p className="text-[13.5px] text-[var(--ink-soft)] leading-relaxed">{f.copy}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ============ SKILLS ============ */}
        <motion.section {...sectionReveal} className="py-16">
          <p className="text-[13px] tracking-wide text-[var(--ink-faint)] mb-10 uppercase">Stack</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((group, gi) => {
              const accent = categoryAccent[group.category] ?? categoryAccent['Engineering & Deployment'];
              return (
                <div key={gi}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                    <h3 className={`text-[13.5px] font-medium ${accent.text}`}>{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, ii) => (
                      <span key={ii} className="chip">{item}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* ============ WORK ============ */}
        <motion.section id="work" {...sectionReveal} className="py-16 scroll-mt-24">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display italic text-4xl text-[var(--ink)]">Selected work</h2>
            <span className="text-[13px] text-[var(--ink-faint)] hidden md:block">{projects.length} projects</span>
          </div>

          <a href={featured.repoUrl} target="_blank" rel="noreferrer" className="block mb-6 group">
            <SpotlightCard className="card-wash rounded-[28px] shadow-[var(--shadow-md)] transition-shadow group-hover:shadow-[var(--shadow-lg)]">
              <div className="p-8 md:p-10 relative z-20">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--amber)]" />
                  <span className="text-[12px] uppercase tracking-wide text-[var(--ink-faint)]">Featured</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-[var(--ink)] mb-4 group-hover:text-[var(--teal)] transition-colors">
                  {featured.title}
                </h3>
                <p className="text-[15.5px] text-[var(--ink-soft)] leading-relaxed max-w-2xl mb-6">
                  {featured.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {featured.chips.map((chip, j) => (
                      <span key={j} className="chip">{chip}</span>
                    ))}
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="text-[var(--ink-faint)] group-hover:text-[var(--ink)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 ml-4"
                  />
                </div>
              </div>
            </SpotlightCard>
          </a>

          <div className="divide-y divide-[var(--line)]">
            {restProjects.map((project, i) => (
              <a
                key={i}
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-1 md:grid-cols-[64px_1fr_auto] gap-4 md:gap-8 items-center py-8 hover:bg-[var(--card)] rounded-2xl px-4 -mx-4 transition-colors"
              >
                <span className="font-display italic text-2xl text-[var(--ink-faint)] group-hover:text-[var(--amber)] transition-colors">
                  {String(i + 2).padStart(2, '0')}
                </span>

                <div>
                  <h3 className="font-display text-lg md:text-xl text-[var(--ink)] mb-2 group-hover:text-[var(--teal)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[14.5px] text-[var(--ink-soft)] leading-relaxed max-w-xl mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.chips.map((chip, j) => (
                      <span key={j} className="text-[12px] text-[var(--ink-faint)]">
                        {chip}{j < project.chips.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-[var(--ink-faint)] group-hover:text-[var(--ink)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all justify-self-end"
                />
              </a>
            ))}
          </div>
        </motion.section>

        {/* ============ ARCHIVE ============ */}
        <motion.section {...sectionReveal} className="py-16">
          <h2 className="font-display italic text-2xl text-[var(--ink)] mb-8">A few smaller experiments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {moreExperiments.map((e, i) => (
              <a
                key={i}
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className="card-wash rounded-2xl p-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow"
              >
                <h4 className="text-[15px] font-medium text-[var(--ink)] mb-2">{e.title}</h4>
                <p className="text-[13px] text-[var(--ink-soft)] leading-relaxed">{e.description}</p>
              </a>
            ))}
          </div>
        </motion.section>

        {/* ============ EXPERIENCE ============ */}
        <motion.section id="experience" {...sectionReveal} className="py-16 scroll-mt-24">
          <h2 className="font-display italic text-4xl text-[var(--ink)] mb-14">Experience</h2>
          <div className="relative pl-8 md:pl-10">
            <div className="absolute left-[3px] top-2 bottom-2 w-px bg-[var(--line)]" />
            <div className="space-y-12">
              {experience.map((exp, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-8 md:-left-10 top-1.5 w-[7px] h-[7px] rounded-full bg-[var(--amber)]" />
                  <p className="text-[13px] text-[var(--ink-faint)] mb-1">{exp.dates}</p>
                  <h3 className="font-display text-xl text-[var(--ink)] mb-1">{exp.role}</h3>
                  <p className="text-[14px] text-[var(--teal)] mb-3">{exp.company}</p>
                  <p className="text-[15px] text-[var(--ink-soft)] leading-relaxed max-w-2xl">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ============ CLOSING CTA ============ */}
        <motion.section {...sectionReveal} className="py-24 text-center relative">
          <div className="grade-wash w-[500px] h-[300px] top-0 left-1/2 -translate-x-1/2 opacity-30" />
          <div className="relative">
            <p className="text-[13px] tracking-wide text-[var(--ink-faint)] mb-4 uppercase">Get in touch</p>
            <h2 className="font-display text-3xl md:text-[2.6rem] leading-[1.15] text-[var(--ink)] mb-8 max-w-2xl mx-auto text-balance">
              Have something worth <span className="italic text-[var(--teal)]">building</span>? I&apos;d like to hear about it.
            </h2>
            <MagneticButton
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--ink)] text-[var(--paper)] text-sm font-medium hover:bg-[var(--teal)] transition-colors"
            >
              <Mail size={16} />
              {siteConfig.email}
            </MagneticButton>
          </div>
        </motion.section>

      </main>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-[var(--line)]">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-[13px] text-[var(--ink-faint)]">
            © {new Date().getFullYear()} {siteConfig.name} — made with care in {siteConfig.location}
          </p>
          <div className="flex items-center gap-5">
            <MagneticButton href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors">
              <Github size={17} />
            </MagneticButton>
            <MagneticButton href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors">
              <Linkedin size={17} />
            </MagneticButton>
            <MagneticButton href={`mailto:${siteConfig.email}`} aria-label="Email" className="text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors">
              <Mail size={17} />
            </MagneticButton>
          </div>
        </div>
      </footer>
    </div>
  )
}