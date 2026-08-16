"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import {
  siteConfig,
  skills,
  projects,
  experience,
  moreExperiments,
} from "@/data/portfolio";

/* ---------------------------------- */
/* shared pieces                       */
/* ---------------------------------- */

const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionHead = ({
  index,
  label,
  title,
  blurb,
}: {
  index: string;
  label: string;
  title: string;
  blurb?: string;
}) => (
  <Reveal className="mb-12 md:mb-16">
    <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
      {index} · {label}
    </p>
    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
      {title}
    </h2>
    {blurb && (
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-neutral-600">
        {blurb}
      </p>
    )}
  </Reveal>
);

const socials = [
  { href: siteConfig.github, icon: Github, label: "GitHub" },
  { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
];

const featuredProjects = new Set([1, 2]);

/* ---------------------------------- */
/* page                                */
/* ---------------------------------- */

export default function Portfolio() {
  return (
    <>
      {/* ============ NAV ============ */}
      <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-[#FAFAF9]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#top"
            className="font-mono text-sm font-semibold tracking-tight text-neutral-900"
          >
            rishikesh<span className="text-neutral-400">.mankar</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-neutral-600 md:flex">
            {[
              ["Work", "#work"],
              ["Experience", "#experience"],
              ["Toolkit", "#toolkit"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-neutral-900">
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main id="top" className="relative">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden">
          <div
            className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
            aria-hidden
          />
          <div
            className="absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-[#2563eb]/10 blur-3xl"
            aria-hidden
          />

          <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-16 md:grid-cols-[1.15fr_1fr] md:items-center md:pt-24">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  Open to new opportunities
                </span>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
                  Rishikesh Mankar
                </h1>
                <p className="mt-3 text-lg font-medium text-neutral-600">
                  Data Scientist &amp; AI Engineer · Pune, India
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-neutral-600">
                  I build machine learning systems that hold up outside the
                  notebook — computer vision pipelines, retrieval-augmented
                  LLM applications, and the APIs that serve them. Currently
                  a Jr. Data Scientist at Rotten Grape, working on NL2SQL
                  and conversational AI.
                </p>
              </Reveal>

              <Reveal delay={0.18} className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
                >
                  View selected work
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-400"
                >
                  Contact me
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="ml-1 flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 transition-colors hover:border-neutral-400 hover:text-neutral-900"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Reveal>
            </div>

            {/* profile card */}
            <Reveal delay={0.15}>
              <div className="rounded-xl border border-neutral-200 bg-white shadow-card">
                <div className="flex items-center gap-1.5 border-b border-neutral-100 px-5 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                  <span className="ml-2 font-mono text-xs text-neutral-400">profile.ts</span>
                </div>
                <div className="space-y-2.5 px-5 py-5 font-mono text-[13px] leading-relaxed">
                  <p>
                    <span className="text-neutral-400">role</span>{" "}
                    <span className="text-neutral-400">=</span>{" "}
                    <span className="text-accent-deep">&quot;Data Scientist &amp; AI Engineer&quot;</span>
                  </p>
                  <p>
                    <span className="text-neutral-400">currently</span>{" "}
                    <span className="text-neutral-400">=</span>{" "}
                    <span className="text-accent-deep">&quot;Jr. Data Scientist @ Rotten Grape&quot;</span>
                  </p>
                  <p>
                    <span className="text-neutral-400">focus</span>{" "}
                    <span className="text-neutral-400">=</span>{" "}
                    <span className="text-neutral-700">[&quot;CV&quot;, &quot;LLMs &amp; RAG&quot;, &quot;ML systems&quot;]</span>
                  </p>
                  <p>
                    <span className="text-neutral-400">education</span>{" "}
                    <span className="text-neutral-400">=</span>{" "}
                    <span className="text-accent-deep">&quot;M.Sc. Data Science&quot;</span>
                  </p>
                  <p>
                    <span className="text-neutral-400">location</span>{" "}
                    <span className="text-neutral-400">=</span>{" "}
                    <span className="text-accent-deep">&quot;Pune, IN · UTC+5:30&quot;</span>
                  </p>
                  <p>
                    <span className="text-neutral-400">status</span>{" "}
                    <span className="text-neutral-400">=</span>{" "}
                    <span className="text-green-600">&quot;open_to_work&quot;</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ SELECTED WORK ============ */}
        <section id="work" className="border-t border-neutral-200/70">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <SectionHead
              index="01"
              label="Selected work"
              title="Work that ships"
              blurb="Six end-to-end projects — from data collection and training to deployed interfaces. Every card links to readable source."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project, i) => (
                <Reveal key={project.title} delay={(i % 2) * 0.06}>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-card"
                  >
                    {featuredProjects.has(i) && (
                      <span className="absolute right-5 top-5 rounded-full bg-accent-wash px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-accent-deep">
                        Featured
                      </span>
                    )}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-neutral-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-semibold text-neutral-900 transition-colors group-hover:text-accent-deep">
                        {project.title}
                      </h3>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {project.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 font-mono text-[11px] text-neutral-500"
                        >
                          {chip}
                        </span>
                      ))}
                      <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] text-neutral-400 transition-colors group-hover:text-accent-deep">
                        <Github className="h-3.5 w-3.5" />
                        source
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-dashed border-neutral-200 pt-6">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                Also on GitHub
              </span>
              {moreExperiments.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 text-sm text-neutral-600 transition-colors hover:text-accent-deep"
                >
                  {item.title}
                  <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 transition-colors group-hover:text-accent-deep" />
                </a>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ============ EXPERIENCE ============ */}
        <section id="experience" className="border-t border-neutral-200/70">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <SectionHead
              index="02"
              label="Experience"
              title="Where I've worked"
              blurb="Four roles across analytics, computer vision and LLM engineering — plus the degrees underneath."
            />
            <div className="relative ml-1 border-l border-neutral-200">
              {experience.map((entry, i) => {
                const isEducation = i >= 4;
                const Icon = isEducation ? GraduationCap : Briefcase;
                return (
                  <Reveal key={`${entry.role}-${entry.company}`} className="relative pb-10 pl-8 last:pb-0">
                    <span className="absolute -left-3 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-400">
                      <Icon className="h-3 w-3" />
                    </span>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="text-base font-semibold text-neutral-900">
                        {entry.role}
                      </h3>
                      <span className="font-mono text-xs text-neutral-400">
                        {entry.dates}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-accent-deep">
                      {entry.company}
                    </p>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
                      {entry.description}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ TOOLKIT ============ */}
        <section id="toolkit" className="border-t border-neutral-200/70">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <SectionHead
              index="03"
              label="Toolkit"
              title="Tools of the trade"
              blurb="Grouped by what I use them for — not by logo count."
            />
            <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
              {skills.map((skill, i) => (
                <Reveal key={skill.category} delay={(i % 2) * 0.05}>
                  <div className="border-b border-neutral-200 pb-3">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-sm font-semibold text-neutral-900">
                        {skill.category}
                      </h3>
                      <span className="font-mono text-[10px] text-neutral-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-[13px] text-neutral-700 transition-colors hover:border-accent hover:text-accent-deep"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="border-t border-neutral-200/70 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24 text-center">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
                04 · Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                Let&apos;s build something reliable.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-neutral-600">
                I&apos;m open to data science and AI engineering roles,
                freelance builds, or a good conversation about messy data.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
              >
                Say hello
              </a>
              <span className="font-mono text-sm text-neutral-500">{siteConfig.email}</span>
            </Reveal>
            <Reveal delay={0.14} className="mt-8 flex justify-center gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 transition-colors hover:border-neutral-400 hover:text-neutral-900"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ============ FOOTER ============ */}
        <footer className="border-t border-neutral-200/70">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-neutral-500 sm:flex-row">
            <p>© 2026 {siteConfig.name}</p>
            <p className="font-mono text-xs">Pune, India · UTC+5:30</p>
            <div className="flex gap-4">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={`footer-${label}`}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="text-neutral-400 transition-colors hover:text-neutral-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
