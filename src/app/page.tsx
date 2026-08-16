"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Coffee,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowDown,
  Clock,
} from "lucide-react";
import {
  siteConfig,
  skills,
  projects,
  experience,
  moreExperiments,
} from "@/data/portfolio";
import MagneticButton from "@/components/MagneticButton";

type Project = (typeof projects)[number];

/* ---------------------------------- */
/* building blocks                     */
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
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Flourish = ({
  className = "",
  align = "center",
}: {
  className?: string;
  align?: "center" | "left";
}) => (
  <div
    className={`flex items-center gap-3 ${
      align === "center" ? "justify-center" : "justify-start"
    } ${className}`}
    aria-hidden
  >
    <span className="h-px w-14 bg-line" />
    <Coffee className="h-3.5 w-3.5 text-caramel" />
    <span className="h-px w-14 bg-line" />
  </div>
);

const SectionHeading = ({
  page,
  eyebrow,
  title,
  note,
}: {
  page: string;
  eyebrow: string;
  title: string;
  note?: string;
}) => (
  <Reveal className="text-center">
    <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-faded">
      {page}
    </p>
    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.35em] text-caramel">
      {eyebrow}
    </p>
    <h2 className="mt-4 font-serif text-4xl text-espresso md:text-5xl">
      {title}
    </h2>
    {note && (
      <p className="mt-3 -rotate-1 font-hand text-2xl text-cocoa md:text-[1.7rem]">
        {note}
      </p>
    )}
    <Flourish className="mt-6" />
  </Reveal>
);

/* line-art coffee cup with animated steam */
const CoffeeCup = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 140 112" fill="none" className={className} aria-hidden>
    <g
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path className="steam steam-1" d="M52 27c-5-6 5-11 0-18" />
      <path className="steam steam-2" d="M70 24c-5-7 5-12 0-20" />
      <path className="steam steam-3" d="M88 27c-5-6 5-11 0-18" />
      <path d="M34 44h68v12a34 25 0 0 1-68 0z" />
      <path d="M102 48h6a11 11 0 0 1 0 22h-9" />
      <path d="M22 92h96" />
      <path d="M44 100h52" opacity="0.45" />
    </g>
  </svg>
);

/* rotating circular stamp */
const StampBadge = () => (
  <div className="relative h-full w-full" aria-hidden>
    <svg viewBox="0 0 200 200" className="stamp-rotate h-full w-full text-caramel">
      <defs>
        <path
          id="stamp-circle"
          d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
          fill="none"
        />
      </defs>
      <circle
        cx="100"
        cy="100"
        r="98"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <circle
        cx="100"
        cy="100"
        r="60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 5"
        opacity="0.6"
      />
      <text
        fill="currentColor"
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: "12px",
          letterSpacing: "2px",
        }}
      >
        <textPath
          href="#stamp-circle"
          textLength="486"
          lengthAdjust="spacingAndGlyphs"
        >
          FRESHLY TRAINED ✦ SMALL BATCH ✦ SERVED WITH CONTEXT ✦
        </textPath>
      </text>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <Coffee className="h-8 w-8 text-caramel" />
    </div>
  </div>
);

/* subtle coffee ring stain */
const CoffeeStain = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    className={`pointer-events-none ${className}`}
    aria-hidden
  >
    <circle cx="100" cy="100" r="86" stroke="currentColor" strokeWidth="10" opacity="0.08" />
    <circle cx="96" cy="104" r="70" stroke="currentColor" strokeWidth="3" opacity="0.1" />
    <path
      d="M100 30a70 70 0 0 1 55 26"
      stroke="currentColor"
      strokeWidth="14"
      opacity="0.06"
      strokeLinecap="round"
    />
  </svg>
);

const Barcode = () => {
  const bars = [3, 1, 2, 1, 1, 4, 2, 1, 3, 1, 2, 2, 1, 1, 4, 1, 3, 1, 2, 1, 2, 3, 1, 2, 1, 1];
  let x = 0;
  const rects = bars.map((w, i) => {
    const r = { key: i, x, w };
    x += w + 2;
    return r;
  });
  return (
    <svg
      viewBox={`0 0 ${x} 34`}
      className="mx-auto mt-4 h-9 w-44 text-espresso"
      aria-hidden
    >
      {rects.map((r) => (
        <rect key={r.key} x={r.x} y={0} width={r.w} height={34} fill="currentColor" />
      ))}
    </svg>
  );
};

/* ---------------------------------- */
/* data flourishes                     */
/* ---------------------------------- */

const skillNotes: Record<string, string> = {
  "Machine Learning": "ground fresh, every single day",
  "Computer Vision": "we keep our eyes on the roast",
  "LLMs & GenAI": "ask the counter anything",
  NLP: "fluent in human, conversational in machine",
  "Engineering & Deployment": "from the counter to your table",
};

const marqueeItems = [
  "Freshly trained models",
  "Small-batch datasets",
  "Served with context",
  "No syrupy jargon",
  "Brewed in Pune",
  "Refills unlimited",
];

/* ---------------------------------- */
/* section pieces                      */
/* ---------------------------------- */

const MenuCategory = ({
  category,
  note,
  items,
  index,
  wide = false,
}: {
  category: string;
  note?: string;
  items: string[];
  index: number;
  wide?: boolean;
}) => (
  <div>
    <div className="flex items-baseline justify-between border-b-2 border-espresso pb-3">
      <h3 className="font-serif text-[1.35rem] text-espresso">{category}</h3>
      <span className="font-mono text-[9px] tracking-[0.3em] text-faded">
        NO.{String(index + 1).padStart(2, "0")}
      </span>
    </div>
    {note && (
      <p className="mt-2.5 -rotate-[0.5deg] font-hand text-xl text-caramel">
        {note}
      </p>
    )}
    <ul className={wide ? "grid gap-x-10 sm:grid-cols-2" : ""}>
      {items.map((item) => (
        <li
          key={item}
          className="group/item flex items-baseline gap-3 border-b border-dotted border-line py-2.5"
        >
          <span className="font-serif text-[1.05rem] text-espresso transition-colors group-hover/item:text-caramel">
            {item}
          </span>
          <span
            className="min-w-4 flex-1 -translate-y-1 border-b-[3px] border-dotted border-line"
            aria-hidden
          />
          <Coffee className="h-3 w-3 shrink-0 self-center text-line transition-colors group-hover/item:text-caramel" />
        </li>
      ))}
    </ul>
  </div>
);

const SpecialItem = ({ project, index }: { project: Project; index: number }) => (
  <Reveal>
    <a
      href={project.repoUrl}
      target="_blank"
      rel="noreferrer"
      className="group block py-8"
    >
      <div className="flex items-baseline gap-3 md:gap-5">
        <span className="font-mono text-[10px] tracking-[0.3em] text-faded">
          NO.{String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-serif text-2xl leading-snug text-espresso transition-colors group-hover:text-caramel md:text-[1.7rem]">
          {project.title}
        </h3>
        <span
          className="min-w-[2rem] flex-1 -translate-y-1 border-b-[3px] border-dotted border-line"
          aria-hidden
        />
        <ArrowUpRight className="h-5 w-5 shrink-0 self-center text-faded transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-terracotta" />
      </div>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-cocoa">
        {project.description}
      </p>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {project.chips.map((chip) => (
          <span
            key={chip}
            className="border border-line bg-cream-card px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-caramel-deep"
          >
            {chip}
          </span>
        ))}
      </div>
    </a>
  </Reveal>
);

/* ---------------------------------- */
/* the menu itself                     */
/* ---------------------------------- */

export default function CafeMenuPortfolio() {
  const facts = [
    { label: "Currently pouring at", value: "Rotten Grape Pvt Ltd." },
    {
      label: "The training",
      value: siteConfig.education.replace(/\s*\([^)]*\)/, ""),
    },
    { label: "Find me in", value: siteConfig.location },
  ];

  const socials = [
    { href: siteConfig.github, icon: Github, label: "GitHub" },
    { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
  ];

  return (
    <main className="relative">
      {/* top strip */}
      <header className="absolute inset-x-0 top-0 z-40 flex items-center justify-between px-8 py-6 font-mono text-[10px] uppercase tracking-[0.3em] md:px-12">
        <a href="#top" className="text-espresso transition-colors hover:text-caramel">
          Est. 2020 ✦ Pune
        </a>
        <nav className="hidden gap-8 text-cocoa md:flex">
          {[
            ["Menu", "#menu"],
            ["Specials", "#specials"],
            ["Order", "#order"],
            ["Visit", "#visit"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="transition-colors hover:text-caramel">
              {label}
            </a>
          ))}
        </nav>
      </header>

      {/* ============ PAGE ONE — COVER ============ */}
      <section
        id="top"
        className="relative flex flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-32 text-center md:pb-24 md:pt-40"
      >
        <CoffeeStain className="drift absolute -right-16 top-24 h-72 w-72 text-caramel" />
        <CoffeeStain className="absolute -left-20 bottom-10 h-56 w-56 -scale-x-100 text-caramel" />

        <Reveal>
          <CoffeeCup className="mx-auto w-28 text-espresso md:w-32" />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.45em] text-caramel">
            Data Scientist &amp; AI Engineer
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <h1 className="mt-4 font-serif text-[clamp(2.8rem,10vw,7.5rem)] font-semibold leading-[0.95] tracking-tight text-espresso">
            Rishikesh
            <br />
            Mankar
          </h1>
        </Reveal>

        <Reveal delay={0.24}>
          <Flourish className="mt-7" />
          <p className="mt-5 -rotate-1 font-hand text-2xl text-cocoa md:text-3xl">
            serving fresh models &amp; honest systems since 2020
          </p>
        </Reveal>

        <Reveal
          delay={0.32}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="#menu"
            className="bg-espresso px-7 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-cream-card transition-colors hover:bg-caramel-deep"
          >
            View the menu
          </MagneticButton>
          <MagneticButton
            href={`mailto:${siteConfig.email}`}
            className="border border-espresso px-7 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-espresso transition-colors hover:border-caramel hover:text-caramel"
          >
            Say hello
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-14 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em] text-faded">
            <ArrowDown className="h-3 w-3 animate-bounce" />
            Scroll for today&apos;s specials
          </p>
        </Reveal>
      </section>

      {/* marquee divider */}
      <div className="marquee select-none border-y border-line bg-cream-card py-3.5" aria-hidden>
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-10 pr-10">
              {marqueeItems.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center gap-10 whitespace-nowrap">
                  <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-cocoa">
                    {item}
                  </span>
                  <Coffee className="h-3 w-3 text-caramel" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ============ PAGE TWO — THE MENU ============ */}
      <section id="menu" className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            page="Page two"
            eyebrow="The menu"
            title="Skills &amp; Crafts"
            note="everything on this card is made in-house"
          />
          <div className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-2">
            {skills.map((skill, i) => (
              <Reveal
                key={skill.category}
                delay={(i % 2) * 0.08}
                className={skill.items.length > 6 ? "md:col-span-2" : ""}
              >
                <MenuCategory
                  category={skill.category}
                  note={skillNotes[skill.category]}
                  items={skill.items}
                  index={i}
                  wide={skill.items.length > 6}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTERLUDE — THE BARISTA ============ */}
      <section id="barista" className="border-y border-line bg-cream-deep px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-16 md:grid-cols-[minmax(0,20rem)_1fr]">
          <Reveal className="relative">
            <div className="relative w-72 rotate-2 border border-line bg-cream-card p-3 pb-16 shadow-menu">
              <div
                className="absolute -top-2.5 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[-3deg] bg-[#e4d3a7]/70 shadow-sm"
                aria-hidden
              />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt={`Portrait of ${siteConfig.name}`}
                  fill
                  className="sepia-[0.25] object-cover"
                  sizes="(min-width: 768px) 288px, 70vw"
                />
              </div>
              <p className="absolute inset-x-0 bottom-4 text-center font-hand text-2xl text-espresso">
                the barista himself
              </p>
            </div>
            <div className="absolute -right-14 -top-12 hidden h-32 w-32 text-caramel sm:block">
              <StampBadge />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-caramel">
              Page two · interlude
            </p>
            <h2 className="mt-3 font-serif text-4xl text-espresso md:text-5xl">
              Meet the barista
            </h2>
            <Flourish align="left" className="mt-5" />
            <p className="mt-7 max-w-xl text-[16px] leading-relaxed text-cocoa">
              Hello — I&apos;m Rishikesh, a data scientist in Pune who likes his
              models the way he likes his coffee: fresh, grounded, and actually
              served. These days I&apos;m pouring at Rotten Grape, building
              NL2SQL pipelines and the backend of an AI chatbot platform.
              Before that: three internships, two degrees, and one healthy
              obsession with making research live on a server.
            </p>

            <div className="mt-8 max-w-xl">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline gap-3 border-b border-dotted border-line py-3"
                >
                  <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.25em] text-faded">
                    {fact.label}
                  </span>
                  <span
                    className="flex-1 -translate-y-1 border-b-[3px] border-dotted border-line"
                    aria-hidden
                  />
                  <span className="text-right font-serif text-espresso">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-line bg-cream-card px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-espresso transition-colors hover:border-caramel hover:text-caramel"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PAGE THREE — SPECIALS ============ */}
      <section id="specials" className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            page="Page three"
            eyebrow="Today's specials"
            title="Fresh from the kitchen"
            note="six dishes, all cooked from scratch"
          />
          <div className="mt-6 divide-y divide-dotted divide-line">
            {projects.map((project, i) => (
              <SpecialItem key={project.title} project={project} index={i} />
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-caramel">
              Sides &amp; extras
            </p>
            <p className="mt-2 font-hand text-2xl text-cocoa">
              small plates, still tasty
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {moreExperiments.map((item) => (
              <Reveal key={item.title}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-full border border-line bg-cream-card p-5 transition-colors hover:border-caramel"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-serif text-lg leading-snug text-espresso transition-colors group-hover:text-caramel">
                      {item.title}
                    </h4>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-faded transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-terracotta" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa">
                    {item.description}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PAGE FOUR — THE ORDER ============ */}
      <section id="order" className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="mx-auto max-w-xl">
          <SectionHeading
            page="Page four"
            eyebrow="For the record"
            title="Your order so far"
            note="a receipt of every table I have waited"
          />
          <Reveal className="relative mt-14">
            <div
              className="absolute inset-0 rotate-[-1.4deg] rounded-sm bg-cream-deep shadow-menu"
              aria-hidden
            />
            <div className="relative rotate-[0.6deg] bg-cream-card px-7 py-9 font-mono text-[12.5px] leading-relaxed text-espresso shadow-menu">
              <div className="absolute -top-5 right-4 rotate-12 rounded border-2 border-terracotta bg-cream-card px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-terracotta opacity-90 md:-right-6">
                Paid in experience
              </div>

              <div className="text-center">
                <p className="font-bold tracking-[0.3em]">✦ THE ORDER HISTORY ✦</p>
                <p className="mt-1 text-[10px] tracking-[0.25em] text-faded">
                  SERVED BY {siteConfig.name.toUpperCase()} · EST. 2020
                </p>
              </div>

              <div className="mt-6 border-t border-dashed border-line" />

              {experience.map((entry) => (
                <div key={`${entry.role}-${entry.company}`} className="border-b border-dashed border-line py-3.5">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-bold">{entry.role.toUpperCase()}</span>
                    <span className="whitespace-nowrap text-faded">
                      {entry.dates.replace(" - ", " — ")}
                    </span>
                  </div>
                  <p className="text-caramel">{entry.company}</p>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-cocoa">
                    {entry.description}
                  </p>
                </div>
              ))}

              <div className="space-y-1.5 py-4">
                {[
                  ["Subtotal", "6 entries"],
                  ["Steamed milk", "complimentary"],
                  ["Total", "1 curious data scientist"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline gap-2 uppercase">
                    <span className="text-cocoa">{k}</span>
                    <span
                      className="flex-1 -translate-y-0.5 border-b border-dotted border-line"
                      aria-hidden
                    />
                    <span className={k === "Total" ? "font-bold text-espresso" : "text-faded"}>
                      {v}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-center text-[10px] tracking-[0.3em]">
                — THANK YOU, PLEASE COME AGAIN —
              </p>
              <Barcode />
              <p className="mt-1 text-center text-[9px] tracking-[0.35em] text-faded">
                ORDER NO. 2026-0816
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PAGE FIVE — VISIT ============ */}
      <section id="visit" className="px-4 pb-6 pt-4 md:px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border-[10px] border-[#6a5138] shadow-menu">
          <div className="relative bg-chalk-board px-6 py-16 text-center text-chalk md:p-20">
            <CoffeeStain className="absolute -left-10 top-8 h-44 w-44 text-chalk" />

            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-chalk-soft">
                Page five · find us
              </p>
              <h2 className="mt-4 font-hand text-5xl text-chalk md:text-6xl">
                Come say hello
              </h2>
              <p className="mx-auto mt-5 max-w-md font-serif text-[15px] leading-relaxed text-chalk-soft">
                The counter is open — I&apos;m currently taking new tables:
                roles, collaborations, and interesting problems.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-9 inline-block break-all font-serif text-2xl text-chalk underline decoration-[3px] decoration-chalk-line underline-offset-[10px] transition-colors hover:decoration-caramel md:text-4xl"
              >
                {siteConfig.email}
              </a>
            </Reveal>

            <Reveal delay={0.16} className="mt-10 flex items-center justify-center gap-4">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-chalk-line text-chalk-soft transition-colors hover:bg-chalk hover:text-chalk-board"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </Reveal>

            <Reveal delay={0.22} className="mt-12 grid gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-chalk-soft sm:grid-cols-3">
              <span className="flex items-center justify-center gap-2">
                <MapPin className="h-3.5 w-3.5" /> Pune, MH
              </span>
              <span className="flex items-center justify-center gap-2">
                <Clock className="h-3.5 w-3.5" /> Mon–Fri · 09–18 IST
              </span>
              <span className="flex items-center justify-center gap-2">
                <Coffee className="h-3.5 w-3.5" /> Open for opportunities
              </span>
            </Reveal>

            <div className="mt-16 border-t border-dashed border-chalk-line pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-chalk-soft">
              © 2026 {siteConfig.name} · Brewed in Pune · No models were
              overfit in the making of this menu
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
