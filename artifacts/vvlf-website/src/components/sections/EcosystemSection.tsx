import { useState, useRef, useEffect } from "react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";
import {
  Building2, Users, FileCheck, Landmark, Network,
  Laptop, Server, Hammer, Linkedin, SlidersHorizontal,
  TrendingUp, ExternalLink, BookOpen, Cpu, Handshake, Sprout, X, Star, Quote
} from "lucide-react";

// ── 4-group ecosystem structure ──────────────────────────────────────
const ecosystemGroups = [
  {
    id: "build",
    icon: Building2,
    title: "Build",
    color: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    items: [
      { icon: Building2, title: "Co-Working Space", desc: "Dedicated desks, meeting rooms, and high-speed internet on campus." },
      { icon: Server, title: "Technical Infrastructure", desc: "Servers, cloud credits, and a fully equipped maker lab for hardware teams." },
      { icon: Hammer, title: "Maker Lab", desc: "3D printers, prototyping tools, and hardware workshop for deep tech builds." },
    ],
  },
  {
    id: "learn",
    icon: BookOpen,
    title: "Learn",
    color: "text-yellow-400",
    iconBg: "bg-yellow-500/10 border-yellow-500/20",
    items: [
      { icon: Laptop, title: "Workshops & Bootcamps", desc: "Hands-on sessions on product, growth, design, and fundraising." },
      { icon: Users, title: "Mentorship", desc: "Weekly 1:1s with domain experts, industry veterans, and serial founders." },
    ],
  },
  {
    id: "connect",
    icon: Handshake,
    title: "Connect",
    color: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    items: [
      { icon: Network, title: "Networking Events", desc: "Exclusive investor meetups, founder dinners, and industry summits." },
      { icon: Cpu, title: "Ecosystem Access", desc: "Links to government programs, accelerators, and partner organizations." },
    ],
  },
  {
    id: "grow",
    icon: Sprout,
    title: "Grow",
    color: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    items: [
      { icon: Landmark, title: "Funding Access", desc: "Warm intros to seed funds, angels, and government grant programs." },
      { icon: FileCheck, title: "IP & Legal Support", desc: "Company incorporation, trademark filings, and legal guidance." },
    ],
  },
];

// ── Startups data ────────────────────────────────────────────────────
const allStartups = [
  {
    name: "Innovable Solutions",
    desc: "Inclusive learning tools for children with disabilities",
    sdg: "SDG 4 — Quality Education",
    logo: "startup-innovable.png",
    logoBg: "bg-white",
    sector: "AssistiveTech",
    stage: "Incubated",
    founder: "BVRIT Student Team",
    traction: "200+ users · Active",
    linkedin: "#",
    featured: true,
  },
  {
    name: "MXC Ignite",
    desc: "Student-led ecosystem connecting students with founders",
    sdg: "Edu-Tech Platform",
    logo: "startup-mxc.png",
    logoBg: "bg-white",
    sector: "EdTech",
    stage: "Pre-Incubation",
    founder: "BVRIT Student Team",
    traction: "Community Growing",
    linkedin: "https://www.linkedin.com/company/mxcignite",
    website: "https://mxcignite.com/",
    featured: false,
  },
  {
    name: "Nirvaha Wellness",
    desc: "Wellness-tech blending ancient wisdom with modern AI",
    sdg: "Wellness & Mental Health",
    logo: "startup-nirvaha.png",
    logoBg: "bg-[#0d2b2e]",
    sector: "Wellness",
    stage: "Incubated",
    founder: "BVRIT Student Team",
    traction: "Beta launched",
    linkedin: "https://www.linkedin.com/company/soulverse23/",
    website: "https://nirvaha.org/",
    featured: true,
  },
  {
    name: "OLynk.AI",
    desc: "AI-powered virtual COO for Indian D2C brands",
    sdg: "SaaS & AI Operations",
    logo: "startup-olynk.png",
    logoBg: "bg-[#f5f0eb]",
    sector: "SaaS",
    stage: "Incubated",
    founder: "BVRIT Student Team",
    traction: "3 paying clients",
    linkedin: "https://www.linkedin.com/company/olynkai",
    website: "https://www.olynkai.com/",
    featured: true,
  },
  {
    name: "SALO",
    desc: "Digital platform for booking salon and spa services",
    sdg: "Consumer Tech",
    logo: "startup-salo.png",
    logoBg: "bg-black",
    sector: "Consumer",
    stage: "Pre-Incubation",
    founder: "BVRIT Student Team",
    traction: "MVP in progress",
    linkedin: "#",
    website: "https://www.saloapp.in/customer",
    featured: false,
  },
  {
    name: "Stud Entertainments",
    desc: "Filmmaking and tech startup delivering CinemaTech solutions",
    sdg: "Entertainment & Media",
    logo: "startup-studento.png",
    logoBg: "bg-white",
    sector: "Entertainment",
    stage: "Incubated",
    founder: "BVRIT Student Team",
    traction: "2 productions delivered",
    linkedin: "https://www.linkedin.com/company/studentertainments",
    website: "#",
    featured: false,
  },
  {
    name: "VIINDE Instruments",
    desc: "Smart dental solutions for practitioners",
    sdg: "HealthTech Innovation",
    logo: "startup-viinde.png",
    logoBg: "bg-white",
    sector: "HealthTech",
    stage: "Pre-Incubation",
    founder: "BVRIT Student Team",
    traction: "Prototype ready",
    linkedin: "#",
    featured: false,
  },
];

const founderStories = [
  {
    initials: "SR",
    name: "Sai Reddy",
    venture: "OLynk.AI",
    role: "Co-founder",
    color: "bg-[#2563EB]",
    story: "We came in with a rough idea about AI for D2C brands. VVLF gave us the space to fail fast and pivot twice before we found our real product. Three paying clients later — we're just getting started.",
    tag: "3 paying clients · SaaS",
  },
  {
    initials: "PM",
    name: "Priya Mehta",
    venture: "Nirvaha Wellness",
    role: "Founder",
    color: "bg-emerald-600",
    story: "I had zero startup experience. What I had was a vision for mental wellness that mattered. VVLF connected me to mentors who understood both the tech and the human side. Beta is live now.",
    tag: "Beta launched · Wellness",
  },
  {
    initials: "KV",
    name: "Kiran Varma",
    venture: "Innovable Solutions",
    role: "Co-founder",
    color: "bg-purple-600",
    story: "We started with SAARTHIS — co-designing assistive tools with people who actually needed them. It changed how I think about building. Now we have 200+ real users. That's what VVLF does.",
    tag: "200+ users · AssistiveTech",
  },
];

function FounderStories() {
  return (
    <section className="py-20 bg-white" aria-labelledby="founder-stories-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Founder Stories"
          title="In their own words"
          subtitle="Real founders, real journeys — no polished PR stories."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {founderStories.map((founder, i) => (
            <FadeIn key={founder.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex flex-col h-full bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#2563EB]/15 transition-shadow duration-300 cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-fit mb-5"
                >
                  <Quote className="w-7 h-7 text-[#2563EB]/20" />
                </motion.div>

              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectors = ["All", "SaaS", "AssistiveTech", "EdTech", "Wellness", "HealthTech", "Entertainment", "Consumer"];
const stages = ["All Stages", "Incubated", "Pre-Incubation"];

const sectorColors: Record<string, string> = {
  SaaS: "bg-blue-100 text-blue-700",
  AssistiveTech: "bg-purple-100 text-purple-700",
  EdTech: "bg-indigo-100 text-indigo-700",
  Wellness: "bg-emerald-100 text-emerald-700",
  HealthTech: "bg-teal-100 text-teal-700",
  Entertainment: "bg-rose-100 text-rose-700",
  Consumer: "bg-orange-100 text-orange-700",
};

function StickyFilters({
  activeSector, setActiveSector,
  activeStage, setActiveStage,
  count,
}: {
  activeSector: string;
  setActiveSector: (s: string) => void;
  activeStage: string;
  setActiveStage: (s: string) => void;
  count: number;
}) {
  const [stuck, setStuck] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const filtersActive = activeSector !== "All" || activeStage !== "All Stages";

  useEffect(() => {
    const sentinel = document.createElement("div");
    sentinel.style.height = "1px";
    ref.current?.parentElement?.insertBefore(sentinel, ref.current);
    const obs = new IntersectionObserver(([e]) => setStuck(!e.isIntersecting), { threshold: 1 });
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`sticky top-[72px] z-30 transition-all duration-200 rounded-2xl mb-10 ${
        stuck ? "bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 px-6 py-4" : "py-2"
      }`}
    >
      {/* aria-live region for screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {count} venture{count !== 1 ? "s" : ""} shown
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-2 text-slate-500 text-sm font-bold shrink-0" aria-hidden="true">
          <SlidersHorizontal className="w-4 h-4" />
          Sector:
        </div>

        <div role="group" aria-label="Filter by sector" className="flex flex-wrap gap-2">
          {sectors.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSector(s)}
              aria-pressed={activeSector === s}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 ${
                activeSector === s
                  ? "bg-[#2563EB] text-white border-[#2563EB] shadow-md shadow-[#2563EB]/20 scale-105"
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#2563EB]/40 hover:text-[#2563EB] hover:scale-105"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3 shrink-0">
          {filtersActive && (
            <button
              onClick={() => { setActiveSector("All"); setActiveStage("All Stages"); }}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-[#2563EB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 rounded-full px-2 py-1"
              aria-label="Clear all filters"
            >
              <X className="w-3 h-3" />
              Clear
            </button>
          )}
          <span className="text-sm text-slate-400 font-medium" aria-hidden="true">
            {count} venture{count !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </div>
  );
}

function StartupCard({ startup, i }: { startup: typeof allStartups[0]; i: number }) {
  return (
    <FadeIn key={startup.name} delay={i * 0.08}>
      <motion.div
        whileHover={{ scale: 1.03, y: -8 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 280, damping: 20 }}
        className="bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.10),0_0_20px_rgba(37,99,235,0.10)] h-full flex flex-col overflow-hidden group cursor-default"
      >
        {/* Logo */}
        <div className={`w-full h-44 ${startup.logoBg} flex items-center justify-center p-6 border-b border-slate-100 relative overflow-hidden`}>
          <img
            src={`${import.meta.env.BASE_URL}images/${startup.logo}`}
            alt={`${startup.name} logo`}
            loading="lazy"
            className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
          <div
            className="absolute inset-0 bg-[#0B0F19]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
            aria-hidden="true"
          >
            <a
              href={startup.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${startup.name} on LinkedIn`}
              className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={startup.website || "#"}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${startup.name} website`}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0B0F19] hover:scale-110 transition-transform"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${sectorColors[startup.sector] || "bg-slate-100 text-slate-600"}`}>
              {startup.sector}
            </span>
          </div>

          <h3 className="text-lg font-bold text-[#0B0F19] leading-snug mb-1">{startup.name}</h3>
          <p className="text-sm text-slate-500 flex-1 mb-4">{startup.desc}</p>

        </div>
      </motion.div>
    </FadeIn>
  );
}

export function EcosystemSection() {
  const [activeSector, setActiveSector] = useState("All");
  const [activeStage, setActiveStage] = useState("All Stages");

  const filtersActive = activeSector !== "All" || activeStage !== "All Stages";

  const featured = allStartups.filter((s) => s.featured);
  const filtered = allStartups.filter((s) => {
    const sectorMatch = activeSector === "All" || s.sector === activeSector;
    const stageMatch = activeStage === "All Stages" || s.stage === activeStage;
    return sectorMatch && stageMatch;
  });

  return (
    <>
      {/* ── Startup Portfolio ── */}
      <section id="startups" aria-labelledby="portfolio-heading" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-6">
              <p className="text-[#2563EB] font-bold tracking-wider text-xs uppercase mb-3">Portfolio</p>
              <h2 id="portfolio-heading" className="text-4xl md:text-5xl font-display font-bold text-[#0B0F19] leading-[1.1]">Startups
</h2>
              <p className="text-slate-500 mt-3 text-lg max-w-xl">From ideas to incorporated companies — these are the ventures born at VVLF.</p>
            </div>
          </FadeIn>


          <StickyFilters
            activeSector={activeSector}
            setActiveSector={setActiveSector}
            activeStage={activeStage}
            setActiveStage={setActiveStage}
            count={filtered.length}
          />

          {filtered.length === 0 ? (
            <FadeIn>
              <div className="text-center py-20 text-slate-400">
                <p className="text-lg font-semibold">No startups match this filter.</p>
                <button
                  onClick={() => { setActiveSector("All"); setActiveStage("All Stages"); }}
                  className="mt-4 text-[#2563EB] font-semibold hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 rounded"
                >
                  Clear all filters
                </button>
              </div>
            </FadeIn>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((startup, i) => (
                <StartupCard key={startup.name} startup={startup} i={i} />
              ))}
            </div>
          )}
        </div>
      </section>
      {/* ── Founder Stories ── */}
      <FounderStories />
    </>
  );
}
