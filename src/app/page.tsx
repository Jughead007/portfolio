import { Github, Linkedin, ArrowUpRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { siteConfig, skills, projects, moreExperiments, experience } from '@/data/portfolio';

const tagPalette = [
  { bg: 'bg-[var(--teal)]/10', text: 'text-[var(--teal)]' },
  { bg: 'bg-[var(--amber)]/15', text: 'text-[#9c6a26]' },
  { bg: 'bg-[var(--rose)]/12', text: 'text-[#a1503f]' },
];

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* ============ NAV ============ */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--paper)]/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
          <Link href="#top" className="font-display italic text-lg text-[var(--ink)]">
            Rishikesh
          </Link>
          <div className="flex items-center gap-8 text-[13px] text-[var(--ink-soft)]">
            <Link href="#work" className="hover:text-[var(--ink)] transition-colors">Work</Link>
            <Link href="#experience" className="hover:text-[var(--ink)] transition-colors">Experience</Link>
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
        <section className="relative pt-40 pb-28 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="grade-wash w-[420px] h-[420px] -top-20 -right-24 md:right-0" />

          <div className="relative soft-rise">
            <p className="text-[13px] tracking-wide text-[var(--ink-faint)] mb-6 uppercase">
              {siteConfig.location} · {siteConfig.currentRole}
            </p>
            <h1 className="font-display text-[2.6rem] md:text-[3.6rem] leading-[1.08] text-[var(--ink)] mb-8">
              I turn <span className="italic text-[var(--teal)]">messy data</span> into
              systems people can actually use.
            </h1>
            <p className="text-[17px] text-[var(--ink-soft)] leading-relaxed max-w-md mb-10">
              {siteConfig.name} — {siteConfig.role.toLowerCase()}. Comfortable
              anywhere between a training loop and a production API, with a soft
              spot for computer vision and retrieval-augmented LLM apps.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#work"
                className="px-6 py-3 rounded-full bg-[var(--ink)] text-[var(--paper)] text-sm font-medium hover:bg-[var(--teal)] transition-colors"
              >
                See the work
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--ink-soft)] hover:text-[var(--ink)] hover:border-[var(--ink-faint)] transition-colors"
              >
                <Github size={17} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--ink-soft)] hover:text-[var(--ink)] hover:border-[var(--ink-faint)] transition-colors"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          {/* Floating "currently" card — the one photographic-feeling object on the page */}
          <div className="relative hidden md:block soft-rise" style={{ animationDelay: '0.15s' }}>
            <div className="card-wash rounded-[28px] p-8 shadow-[0_30px_60px_-25px_rgba(43,38,32,0.25)] rotate-[2deg]">
              <p className="text-[12px] uppercase tracking-wide text-[var(--ink-faint)] mb-4">Currently</p>
              <p className="font-display italic text-xl text-[var(--ink)] leading-snug mb-6">
                Building an NL2SQL pipeline with GIS routing for a conversational AI platform.
              </p>
              <div className="h-px bg-[var(--line)] mb-6" />
              <p className="text-[13px] text-[var(--ink-soft)]">{siteConfig.education}</p>
            </div>
          </div>
        </section>

        {/* ============ SKILLS ============ */}
        <section className="py-20">
          <div className="flex flex-wrap gap-3">
            {skills.flatMap((group, gi) =>
              group.items.map((item, ii) => {
                const palette = tagPalette[gi % tagPalette.length];
                return (
                  <span
                    key={`${gi}-${ii}`}
                    className={`px-4 py-2 rounded-full text-[13px] ${palette.bg} ${palette.text}`}
                  >
                    {item}
                  </span>
                );
              })
            )}
          </div>
        </section>

        {/* ============ WORK ============ */}
        <section id="work" className="py-16">
          <div className="flex items-end justify-between mb-14">
            <h2 className="font-display italic text-4xl text-[var(--ink)]">Selected work</h2>
            <span className="text-[13px] text-[var(--ink-faint)] hidden md:block">{projects.length} projects</span>
          </div>

          <div className="divide-y divide-[var(--line)]">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-1 md:grid-cols-[64px_1fr_auto] gap-4 md:gap-8 items-center py-9 hover:bg-[var(--card)] rounded-2xl px-4 -mx-4 transition-colors"
              >
                <span className="font-display italic text-3xl text-[var(--ink-faint)] group-hover:text-[var(--amber)] transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div>
                  <h3 className="font-display text-xl md:text-2xl text-[var(--ink)] mb-2 group-hover:text-[var(--teal)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[15px] text-[var(--ink-soft)] leading-relaxed max-w-xl mb-4">
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
                  size={22}
                  className="text-[var(--ink-faint)] group-hover:text-[var(--ink)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all justify-self-end"
                />
              </a>
            ))}
          </div>
        </section>

        {/* ============ ARCHIVE ============ */}
        <section className="py-16">
          <h2 className="font-display italic text-2xl text-[var(--ink)] mb-8">A few smaller experiments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {moreExperiments.map((e, i) => (
              <a
                key={i}
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className="card-wash rounded-2xl p-6 hover:shadow-[0_20px_40px_-30px_rgba(43,38,32,0.3)] transition-shadow"
              >
                <h4 className="text-[15px] font-medium text-[var(--ink)] mb-2">{e.title}</h4>
                <p className="text-[13px] text-[var(--ink-soft)] leading-relaxed">{e.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* ============ EXPERIENCE ============ */}
        <section id="experience" className="py-16">
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
        </section>

      </main>

      {/* ============ FOOTER ============ */}
      <footer className="mt-20 border-t border-[var(--line)]">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-[13px] text-[var(--ink-faint)]">
            © {new Date().getFullYear()} {siteConfig.name} — made with care in {siteConfig.location}
          </p>
          <div className="flex items-center gap-5">
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors">
              <Github size={17} />
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors">
              <Linkedin size={17} />
            </a>
            <a href={`mailto:${siteConfig.email}`} className="text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors">
              <Mail size={17} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}