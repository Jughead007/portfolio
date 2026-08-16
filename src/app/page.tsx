"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, MotionValue } from "framer-motion";
import { siteConfig, skills, projects, experience } from "@/data/portfolio";
import { Volume2, VolumeX, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";

// ==========================================
// 3D PAGE COMPONENT
// ==========================================
interface PageProps {
  index: number;
  total: number;
  progress: MotionValue<number>;
  front: React.ReactNode;
  back: React.ReactNode;
  zIndex: number;
  playThwip: () => void;
}

const Page = ({ index, total, progress, front, back, zIndex, playThwip }: PageProps) => {
  const step = 1 / total;
  const start = index * step;
  const end = start + step;

  // Track when a page crosses the halfway point to trigger the sound
  const [hasFlipped, setHasFlipped] = useState(false);

  useEffect(() => {
    return progress.onChange((latest) => {
      const midpoint = start + (step / 2);
      if (latest > midpoint && !hasFlipped) {
        setHasFlipped(true);
        playThwip();
      } else if (latest < midpoint && hasFlipped) {
        setHasFlipped(false);
        playThwip();
      }
    });
  }, [progress, start, step, hasFlipped, playThwip]);

  const rotateY = useTransform(progress, [start, end], [0, -180]);

  // Dynamic shadows based on rotation
  const shadowOpacity = useTransform(progress, [start, end], [0.3, 0]);

  return (
    <motion.div
      className="absolute top-0 right-0 w-1/2 h-full origin-left preserve-3d"
      style={{ rotateY, zIndex }}
    >
      {/* FRONT */}
      <div className="absolute inset-0 backface-hidden bg-[var(--paper-front)] page-shadow overflow-hidden text-[var(--ink)]">
        {front}
        <motion.div className="absolute inset-0 bg-black pointer-events-none" style={{ opacity: shadowOpacity }} />
        <div className="absolute top-0 bottom-0 left-0 w-10 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
      </div>

      {/* BACK */}
      <div className="absolute inset-0 backface-hidden bg-[var(--paper-back)] page-shadow overflow-hidden text-[var(--ink)]" style={{ transform: "rotateY(180deg)" }}>
        {back}
        <div className="absolute top-0 bottom-0 right-0 w-10 bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
};

// ==========================================
// MAIN ENVIRONMENT COMPONENT
// ==========================================
export default function RiversideCafeEnvironment() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Audio State
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const ambientAudioRef = useRef<HTMLAudioElement>(null);
  const pageTurnAudioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    setIsAudioMuted(!isAudioMuted);
    if (isAudioMuted && ambientAudioRef.current) {
      ambientAudioRef.current.play();
    } else if (ambientAudioRef.current) {
      ambientAudioRef.current.pause();
    }
  };

  const playThwip = () => {
    if (!isAudioMuted && pageTurnAudioRef.current) {
      pageTurnAudioRef.current.currentTime = 0;
      pageTurnAudioRef.current.play();
    }
  };

  // Parallax Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) * 2 - 1);
    mouseY.set((clientY / innerHeight) * 2 - 1);
  };

  // Smooth springs for parallax layers
  const springConfig = { damping: 25, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const bgX = useTransform(smoothX, [-1, 1], ["-2%", "2%"]);
  const bgY = useTransform(smoothY, [-1, 1], ["-2%", "2%"]);
  const deskX = useTransform(smoothX, [-1, 1], ["-1%", "1%"]);
  const deskY = useTransform(smoothY, [-1, 1], ["-1%", "1%"]);
  const itemsX = useTransform(smoothX, [-1, 1], ["-3%", "3%"]);
  const itemsY = useTransform(smoothY, [-1, 1], ["-3%", "3%"]);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className="relative h-[500vh] bg-black">

      {/* Audio Elements (Add real files to your /public folder) */}
      <audio ref={ambientAudioRef} loop src="/ambient-river-cafe.mp3" />
      <audio ref={pageTurnAudioRef} src="/paper-flip.mp3" />

      {/* Audio Toggle UI */}
      <button
        onClick={toggleAudio}
        className="fixed top-8 right-8 z-50 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        {isAudioMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* ================= ENVIRONMENT LAYERS ================= */}
      <div className="sticky top-0 h-screen w-full overflow-hidden perspective-container flex items-center justify-center">

        {/* Layer 1: Blurred River Background */}
        <motion.div
          className="absolute inset-[-5%] -z-20 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ x: bgX, y: bgY, backgroundImage: 'url("https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2500&auto=format&fit=crop")', filter: 'blur(12px)' }}
        />

        {/* Layer 2: The Wood/Marble Desk */}
        <motion.div
          className="absolute inset-[-5%] top-[20%] -z-10 bg-cover bg-top shadow-[0_-50px_100px_rgba(0,0,0,0.8)]"
          style={{ x: deskX, y: deskY, backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")', backgroundColor: '#4a3b2c' }}
        />

        {/* Layer 3: Peripheral Desk Items (Interactive Polaroid) */}
        <motion.div className="absolute inset-0 z-20 pointer-events-none" style={{ x: itemsX, y: itemsY }}>
          {/* Coffee Cup Placeholder */}
          <div className="absolute top-1/4 left-[10%] w-32 h-32 bg-black/40 rounded-full blur-md shadow-2xl" />

          {/* Interactive Polaroid sitting on the desk */}
          <div className="absolute bottom-[15%] left-[5%] pointer-events-auto group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 0, y: -20 }}
              className="bg-white p-4 pb-16 shadow-2xl rotate-[-8deg] w-56 border border-gray-200 cursor-pointer transition-all duration-300"
            >
              <div className="aspect-[4/5] bg-gray-200 overflow-hidden relative">
                <Image src="/profile.jpg" alt={siteConfig.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <p className="font-handwriting text-xl text-black absolute bottom-4 left-6">
                Behind the scenes...
              </p>
              {/* Tooltip that appears on hover */}
              <div className="absolute -top-32 left-0 bg-[var(--ink)] text-white p-4 text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity w-64 pointer-events-none shadow-xl">
                Current Station: {siteConfig.currentRole}. Comfortable anywhere between a training loop and a production API[cite: 1].
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Layer 4: Dappled Sunlight Mask */}
        <div className="dappled-sunlight" />

        {/* ================= THE BOOK ================= */}
        <div className="relative w-full max-w-[1100px] aspect-[16/10] preserve-3d shadow-2xl z-10 rotate-x-[15deg]">

          {/* Static Book Backing & Spine */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-[var(--paper-back)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-l-md" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--paper-back)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-r-md" />
          <div className="absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-[var(--paper-spine)] shadow-inner z-0" />

          {/* PAGE 1: Cover */}
          <Page index={0} total={4} progress={scrollYProgress} zIndex={40} playThwip={playThwip}
            front={
              <div className="h-full flex flex-col items-center justify-center p-12 text-center bg-[var(--ink)] text-white">
                <h1 className="text-6xl tracking-tight uppercase font-bold mb-4">
                  {siteConfig.name.split(" ")[0]} <span className="text-[var(--neon-cyan)]">{siteConfig.name.split(" ")[1]}</span>
                </h1>
                <p className="font-mono text-sm tracking-widest text-[var(--neon-pink)]">RESEARCH & ARCHITECTURE</p>
              </div>
            }
            back={
              <div className="h-full p-12 flex items-center justify-center">
                <p className="font-handwriting text-3xl text-gray-400 rotate-[-2deg]">"Data is messy. Systems shouldn't be."</p>
              </div>
            }
          />

          {/* PAGE 2: Tech Index & Accents */}
          <Page index={1} total={4} progress={scrollYProgress} zIndex={30} playThwip={playThwip}
            front={
              <div className="h-full p-12 relative">
                <p className="font-mono text-xs text-gray-400 mb-8 border-b pb-2 uppercase">01 / Methodology</p>
                <h2 className="text-4xl font-bold mb-8">Technical Apparatus</h2>
                <div className="grid grid-cols-2 gap-8">
                  {skills.slice(0, 4).map((skill, i) => (
                    <div key={i} className="relative z-10">
                      {/* Neon Highlight Accent */}
                      <div className="absolute -inset-2 bg-[var(--highlight)] -z-10 skew-x-[-10deg]" />
                      <h3 className="font-mono text-sm font-bold text-[var(--neon-pink)] mb-2">{skill.category}</h3>
                      <ul className="text-sm font-mono leading-relaxed">
                        {skill.items.slice(0, 4).map(item => <li key={item}>› {item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            }
            back={
              <div className="h-full p-12 bg-gray-900 text-white">
                <p className="font-mono text-xs text-gray-500 mb-8 border-b border-gray-700 pb-2 uppercase">02 / Case Study</p>
                <h2 className="text-4xl font-bold text-[var(--neon-cyan)] mb-4">{projects[1].title}</h2>
                <p className="text-sm text-gray-300 leading-relaxed max-w-md">{projects[1].description}[cite: 1]</p>

                {/* Tech Diagram drawn on the page */}
                <div className="mt-8 border border-[var(--neon-pink)] p-4 font-mono text-xs text-center text-[var(--neon-pink)]">
                   [ RETRIEVAL PIPELINE ] <br/><br/>
                   Query → Vector Embeddings → Context Chunk → LLM Synthesis
                </div>
              </div>
            }
          />

          {/* PAGE 3: Experience */}
          <Page index={2} total={4} progress={scrollYProgress} zIndex={20} playThwip={playThwip}
            front={
              <div className="h-full p-12">
                 <p className="font-mono text-xs text-gray-400 mb-8 border-b pb-2 uppercase">03 / Experience</p>
                 <h2 className="text-3xl font-bold mb-6">Appointments</h2>
                 <div className="space-y-6 border-l-2 border-[var(--neon-cyan)] pl-6">
                    {experience.slice(0,3).map((exp, i) => (
                      <div key={i}>
                        <p className="font-mono text-xs text-[var(--neon-cyan)] font-bold">{exp.dates}</p>
                        <h4 className="font-bold">{exp.role}</h4>
                        <p className="text-sm text-gray-600">{exp.company}</p>
                      </div>
                    ))}
                 </div>
              </div>
            }
            back={
              <div className="h-full flex flex-col items-center justify-center text-center p-12">
                <h2 className="text-4xl font-bold mb-6">End of Record.</h2>
                <a href={`mailto:${siteConfig.email}`} className="px-6 py-3 bg-[var(--ink)] text-[var(--neon-cyan)] font-mono text-sm hover:bg-[var(--neon-pink)] hover:text-white transition-colors">
                   Dispatch Inquiry
                </a>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}