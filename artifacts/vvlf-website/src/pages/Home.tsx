import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { FadeIn } from "@/components/FadeIn";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, ArrowUpRight,
  Lightbulb, Hammer, Rocket, TrendingUp,
  Users, FileCheck, Landmark, MessageSquare,
  Target, ShieldCheck,
  Quote,
  Cpu, Layers, UserCheck, Leaf
} from "lucide-react";

// ─── DATA ──────────────────────────────────────────────────────────
const stages = [
  {
    icon: Lightbulb,
    stage: "01",
    title: "Idea Stage",
    tag: "Failathon",
    desc: "Turn ambiguous problems into validated startup ideas through guided ideation, design thinking, and structured failure.",
    color: "group-hover:text-yellow-400",
    glow: "group-hover:shadow-yellow-400/10",
  },
  {
    icon: Hammer,
    stage: "02",
    title: "Build Stage",
    tag: "PIVOT Makeathon",
    desc: "Go from concept to working prototype in 24 hours. Rapid iteration, pitch prep, and resilience under pressure.",
    color: "group-hover:text-blue-400",
    glow: "group-hover:shadow-blue-400/10",
  },
  {
    icon: Target,
    stage: "03",
    title: "Impact Stage",
    tag: "EPICS / SAARTHIS",
    desc: "Build real solutions for real communities. Year-long programs that pair students with underserved problems.",
    color: "group-hover:text-emerald-400",
    glow: "group-hover:shadow-emerald-400/10",
  },
  {
    icon: Rocket,
    stage: "04",
    title: "Launch Stage",
    tag: "Pre-Incubation Cohort",
    desc: "Our flagship program. Resources, mentors, legal support, and an investor network to help you incorporate and scale.",
    color: "group-hover:text-primary",
    glow: "group-hover:shadow-primary/10",
    highlight: true,
  },
];

const testimonials = [
  {
    quote: "VVLF gave us the structure to turn a classroom project into a company. The mentorship was world-class and the network opened doors we didn't know existed.",
    name: "Founder, OLynk.AI",
    role: "Pre-Incubation Cohort 1.0",
    logo: "startup-olynk.png",
    logoBg: "#f5f0eb",
  },
  {
    quote: "EPICS was the first time I worked on a problem that actually mattered. VVLF made it real — with real users, real feedback, and real stakes.",
    name: "EPICS Cohort Participant",
    role: "BVRIT Student, 2025",
    initials: "EP",
  },
  {
    quote: "Project SAARTHIS changed how I think about technology. Innovation isn't about the tool — it's about the person who needs it. VVLF gets that deeply.",
    name: "SAARTHIS Participant",
    role: "BVRIT Student, 2025",
    initials: "SA",
  },
];

const pillars = [
  { icon: Users, title: "Mentorship", desc: "Weekly 1:1s with industry veterans, domain experts, and serial founders.", example: "10+ startups mentored to date" },
  { icon: MessageSquare, title: "Product Guidance", desc: "Structured critiques, user testing sessions, and live product reviews to sharpen your MVP.", example: "Real users, real feedback, real stakes" },
  { icon: TrendingUp, title: "Community", desc: "A curated founder network — peer accountability, founder dinners, and alumni access.", example: "400+ innovators in the ecosystem" },
  { icon: Landmark, title: "Funding Access", desc: "Warm intros to seed funds, angels, and government grant programs across India.", example: "Connected to national startup programs" },
  { icon: FileCheck, title: "Infrastructure", desc: "Dedicated desks, high-speed internet, maker lab, and server infrastructure on campus.", example: "Available day one, no waiting" },
  { icon: ShieldCheck, title: "Legal & IP Support", desc: "Company incorporation, trademark filings, and legal guidance from vetted professionals.", example: "4 ventures incorporated in Cohort 1.0" },
];

const thrustAreas = [
  {
    icon: Cpu,
    title: "Deep Tech",
    desc: "AI, IoT, Robotics, and emerging technologies shaping tomorrow.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Layers,
    title: "Semiconductors",
    desc: "Hardware innovation and chip design for India's tech future.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: UserCheck,
    title: "Assistive Technology",
    desc: "Inclusive solutions for persons with disabilities — by students, for everyone.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Green tech and climate-focused innovations aligned with global SDGs.",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
];

const communityPhotos = [
  { src: "community-group.png", alt: "VVLF Community" },
  { src: "community-workshop1.png", alt: "Workshop Session" },
  { src: "community-workshop2.png", alt: "Presentation at BVRIT" },
  { src: "community-session.png", alt: "Community Gathering" },
  { src: "community-demoday.png", alt: "Demo Day" },
];

// ─── PHOTO MARQUEE ─────────────────────────────────────────────────
function PhotoMarquee() {
  const xRef = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const speed = 0.4;

  useAnimationFrame(() => {
    const el = containerRef.current;
    if (!el) return;
    const totalWidth = el.scrollWidth / 2;
    const current = xRef.get();
    const next = current - speed;
    xRef.set(next <= -totalWidth ? 0 : next);
    el.style.transform = `translateX(${xRef.get()}px)`;
  });

  const doubled = [...communityPhotos, ...communityPhotos];

  return (
    <div className="relative w-full overflow-hidden rounded-3xl" style={{ height: 420 }}>
      <div
        ref={containerRef}
        className="flex gap-4 absolute top-0 left-0"
        style={{ willChange: "transform" }}
      >
        {doubled.map((photo, i) => (
          <div
            key={i}
            className="shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-lg"
            style={{ width: 320, height: 420 }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/${photo.src}`}
              alt={photo.alt}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    </div>
  );
}

// ─── COMPONENT ─────────────────────────────────────────────────────
export default function Home() {
  return (
    <Layout>
      {/* ══ 1. HERO ══════════════════════════════════════════════════ */}
      <HeroSection />
      {/* ══ 2. ABOUT / VALUE PROP ════════════════════════════════════ */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Rolling photos */}
            <FadeIn direction="right">
              <PhotoMarquee />
            </FadeIn>

            {/* Text */}
            <FadeIn direction="left">
              <div className="space-y-7">
                <div>
                  <p className="text-primary tracking-wider uppercase mb-3 text-[30px] font-extrabold">
                    About VVLF
                  </p>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-[#080c14] leading-[1.1] mb-5">
                    Where Campus Ideas<br />Become Real Companies
                  </h2>
                  <p className="text-slate-500 text-lg leading-relaxed mb-4">
                    Vishnu Venture Labs Foundation (VVLF) is a not-for-profit Section 8 company — the innovation and entrepreneurship ecosystem of BVRIT — built to empower students to transform bold ideas into viable ventures.
                  </p>
                  <p className="text-slate-500 text-base leading-relaxed">
                    We bridge the gap between classroom learning and real-world impact by offering structured programs, expert mentorship, infrastructure, and a vibrant community of 400+ innovators. From your first spark of curiosity to your company's first customer, VVLF walks the journey with you.
                  </p>
                </div>

                <Link href="/about">
                  <button className="group inline-flex items-center gap-2 text-sm font-bold text-[#080c14] border-b-2 border-[#080c14]/20 pb-0.5 hover:border-primary hover:text-primary transition-all">
                    Learn Our Story
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* ══ 4. BUILDING BLOCKS ═══════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-primary tracking-wider uppercase mb-3 font-extrabold bg-[transparent] text-[30px]">WHAT YOU GET</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#080c14] leading-[1.1]">We provide to Build a Startup</h2>
              <p className="text-slate-500 text-lg leading-relaxed mt-4">
                VVLF removes every excuse not to build. We give student founders the unfair advantage they deserve.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-[0_16px_32px_rgba(0,0,0,0.08),0_0_16px_rgba(37,99,235,0.10)] hover:border-primary/15 cursor-default h-full flex flex-col"
                >
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.2, rotate: -8, backgroundColor: "rgba(37,99,235,1)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <p.icon className="w-5 h-5 group-hover:text-white transition-colors duration-200" />
                  </motion.div>
                  <motion.h4
                    className="font-display font-bold text-[#080c14] text-base mb-2"
                    whileHover={{ y: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {p.title}
                  </motion.h4>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1 group-hover:text-slate-700 transition-colors duration-200">{p.desc}</p>
                  <motion.div
                    className="mt-4 pt-3 border-t border-slate-100 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    whileHover={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <p className="text-xs font-semibold text-primary flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0" />
                      {p.example}
                    </p>
                  </motion.div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* ══ 5. KEY THRUST AREAS ══════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#080c14] leading-[1.1] mb-4">Focus Areas</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Strategically chosen areas where student innovation can create real-world impact.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {thrustAreas.map((area, i) => (
              <FadeIn key={area.title} delay={i * 0.08}>
                <div className="flex flex-col gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${area.bg} flex items-center justify-center`}>
                    <area.icon className={`w-6 h-6 ${area.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#080c14] text-base mb-1">{area.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* ══ 6. ECOSYSTEM PARTNERS ════════════════════════════════════ */}
      <section className="py-24 bg-[#f7f8fa] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-primary font-bold tracking-wider uppercase mb-3 text-[30px]">Ecosystem Partners</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#080c14] leading-[1.1] mb-4">
                Built on Strong Partnerships
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Backed by academia, industry, and government — so our founders have every door open.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Rolling strip */}
        <div className="relative">
          <div className="flex gap-6 animate-partners-scroll w-max px-6">
            {[
              { img: "partner-bvrit.png", name: "BV Raju Institute of Technology", tag: "Academic Partner", tagColor: "text-blue-600 bg-blue-50 border-blue-100" },
              { img: "partner-kaiteki.png", name: "Kaiteki Innovations", tag: "Industry Partner", tagColor: "text-primary bg-blue-50 border-blue-100" },
              { img: "partner-tgic.png", name: "Telangana Government Innovation Council", tag: "Government Partner", tagColor: "text-emerald-600 bg-emerald-50 border-emerald-100" },
              { img: "partner-tgf.png", name: "The Good Talk Factory Foundation", tag: "Storytelling Partner", tagColor: "text-orange-600 bg-orange-50 border-orange-100" },
              { img: "partner-bvrit.png", name: "BV Raju Institute of Technology", tag: "Academic Partner", tagColor: "text-blue-600 bg-blue-50 border-blue-100" },
              { img: "partner-kaiteki.png", name: "Kaiteki Innovations", tag: "Industry Partner", tagColor: "text-primary bg-blue-50 border-blue-100" },
              { img: "partner-tgic.png", name: "Telangana Government Innovation Council", tag: "Government Partner", tagColor: "text-emerald-600 bg-emerald-50 border-emerald-100" },
              { img: "partner-tgf.png", name: "The Good Talk Factory Foundation", tag: "Storytelling Partner", tagColor: "text-orange-600 bg-orange-50 border-orange-100" },
            ].map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col gap-4 items-center text-center"
              >
                <div className="h-20 flex items-center justify-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/${p.img}`}
                    alt={p.name}
                    className="max-h-16 max-w-[180px] w-auto object-contain"
                  />
                </div>
                <p className="font-bold text-[#080c14] text-sm leading-snug">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ══ 7. TESTIMONIALS ══════════════════════════════════════════ */}
      <section className="py-28 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-xl mx-auto mb-16">
              <p className="text-primary tracking-wider uppercase mb-3 text-[30px] font-extrabold">Voices from the Ecosystem</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#080c14] leading-[1.1]">
                Founders Who Built Here
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group flex flex-col h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/15 transition-shadow duration-300 cursor-default"
                >
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-fit mb-5"
                  >
                    <Quote className="w-8 h-8 text-primary/20" />
                  </motion.div>
                  <p className="text-[#080c14] text-base leading-[1.7] flex-1 mb-8 font-medium">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
                    {t.logo ? (
                      <div
                        className="w-11 h-11 rounded-xl border border-slate-100 flex items-center justify-center p-1.5 shrink-0"
                        style={{ backgroundColor: t.logoBg }}
                      >
                        <img
                          src={`${import.meta.env.BASE_URL}images/${t.logo}`}
                          alt={t.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                        {t.initials}
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-[#080c14] text-sm leading-tight">{t.name}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* ══ 6. FINAL CTA ═════════════════════════════════════════════ */}
      <section className="py-32 bg-[#080c14] relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(30,90,255,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2
              className="font-display font-bold text-white leading-[1.06] mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
            >
              Ready to Turn Your Idea Into a Startup?
            </h2>

            <p className="text-white/45 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join VVLF and get access to mentorship, co-working space, funding connections, and a thriving innovation ecosystem. Limited seats available.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVdqSv6MBAmUJatiOsjqBrhx825IRaHbHx3HKZG4Np1CrmrQ/viewform" target="_blank" rel="noreferrer">
                <button className="group inline-flex items-center gap-2.5 bg-primary hover:bg-primary/90 text-white font-bold px-10 py-4 rounded-full text-sm shadow-[0_0_40px_rgba(30,90,255,0.4)] hover:shadow-[0_0_60px_rgba(30,90,255,0.5)] hover:-translate-y-0.5 transition-all">
                  Apply
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </a>
              <Link href="/programs">
                <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white font-semibold text-sm hover:bg-white/10 hover:border-white/25 transition-all">
                  Explore Programs
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
