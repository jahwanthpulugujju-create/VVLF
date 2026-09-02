import { useState, useEffect } from "react";
import { Link } from "wouter";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Lightbulb, Hammer, TrendingUp, Users, Clock, CheckCircle2, Bell, Flame, Timer, UserCheck, CalendarDays, ArrowUpRight, ChevronDown } from "lucide-react";

const programs = [
  {
    id: "failathon",
    title: "Failathon",
    tag: "Ideation",
    tagColor: "bg-blue-100 text-blue-700",
    img: "failathon.jpg",
    imgAlt: "Students at Failathon ideation session exploring problem statements",
    what: "A one-day innovation event built around 'Come, let's Fail, and Learn.' Students use design thinking tools to explore real problems and reframe failure as the foundation for growth.",
    who: "1st & 2nd Year Students at BVRIT",
    commitment: "1 day · No prior experience needed",
    outcome: "Walk away with a validated problem statement and a team — ready for your next build.",
    benefits: [
      "Ideation & design thinking skills",
      "Exposure to real problem statements",
      "Certificate of participation",
      "Team collaboration experience",
    ],
    timeline: "1 Day · Usually held each semester",
    status: "open",
    icon: Lightbulb,
  },
  {
    id: "pivot",
    title: "PIVOT Makeathon",
    tag: "Building",
    tagColor: "bg-orange-100 text-orange-700",
    img: "pivot.jpg",
    imgAlt: "Teams at PIVOT Makeathon racing to build working prototypes in 24 hours",
    what: "A high-energy 24-hour Makeathon where teams go from raw ideas to working prototypes. Emphasizes resilience, rapid iteration, and creative problem-solving under pressure.",
    who: "2nd & 3rd Year Students",
    commitment: "24 hours · Team of 2–4 required",
    outcome: "Leave with a working prototype, a pitch deck, and a clear path toward your MVP.",
    benefits: [
      "Prototype development skills",
      "Pitching & storytelling",
      "Rapid MVP building",
      "Cash prizes for top teams",
    ],
    timeline: "24 Hours · Bi-annual event",
    status: "open",
    icon: Hammer,
  },
  {
    id: "saarthis",
    title: "Project SAARTHIS",
    tag: "Social Impact",
    tagColor: "bg-emerald-100 text-emerald-700",
    img: "saarthis.jpg",
    imgAlt: "SAARTHIS participants co-designing assistive technology with persons with disabilities",
    what: "A year-long innovation initiative by VVLF, BVRIT, and Kaiteki Innovations to co-create accessible, inclusive solutions for persons with disabilities — with real users in the loop.",
    who: "All Years — Assistive Technology focus",
    commitment: "Year-long · Part-time, flexible schedule",
    outcome: "Co-author a real assistive product and build an inclusive innovation portfolio that stands out to employers and investors.",
    benefits: [
      "Human-centered design exposure",
      "Inclusive innovation skills",
      "Industry partner collaboration",
      "Real user testing experience",
    ],
    timeline: "Year-Long · Rolling admissions",
    status: "open",
    icon: Users,
  },
  {
    id: "epics",
    title: "EPICS Cohort",
    tag: "Community",
    tagColor: "bg-purple-100 text-purple-700",
    img: "epics-cohort.jpg",
    imgAlt: "EPICS Cohort teams presenting community-driven solutions to mentors",
    what: "VVLF mentored 49 multidisciplinary student teams solving tangible community challenges. Real innovation means leaving your classroom and engaging directly with the world.",
    who: "Multidisciplinary teams, all years",
    commitment: "8 weeks · 5–8 hrs per week",
    outcome: "Complete a real community-impact project and earn a verified portfolio entry, mentor endorsement, and cohort certificate.",
    benefits: [
      "Real-world problem solving",
      "Mentorship from industry experts",
      "Community impact portfolio",
      "Certificate of completion",
    ],
    timeline: "8 Weeks · Applications each semester",
    status: "closing",
    icon: TrendingUp,
  },
];

const preIncubationStartups = [
  { name: "OLynk.AI", category: "SaaS", logo: "startup-olynk.png", logoBg: "bg-[#f5f0eb]" },
  { name: "MXC Ignite", category: "Edu-Tech", logo: "startup-mxc.png", logoBg: "bg-white" },
  { name: "Stud Entertainments", category: "Entertainment", logo: "startup-studento.png", logoBg: "bg-white" },
  { name: "Nirvaha Wellness", category: "Wellness", logo: "startup-nirvaha.png", logoBg: "bg-[#0d2b2e]" },
];

const journeySteps = [
  {
    icon: Lightbulb,
    label: "Ideate",
    program: "Failathon",
    desc: "Explore real problems, form teams, and validate your idea in a single day.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
  },
  {
    icon: Hammer,
    label: "Build",
    program: "PIVOT Makeathon",
    desc: "24 hours to turn your idea into a working prototype under pressure.",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: TrendingUp,
    label: "Impact",
    program: "EPICS / SAARTHIS",
    desc: "Year-long programs solving real community problems with real users.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: ArrowUpRight,
    label: "Scale",
    program: "Pre-Incubation Cohort",
    desc: "Flagship program with mentors, legal support, and investor access.",
    color: "text-[#2563EB]",
    bg: "bg-[#2563EB]/10 border-[#2563EB]/30",
    highlight: true,
  },
];

const faqItems = [
  {
    q: "What happens after I apply?",
    a: "Your application is reviewed within 5 business days. Shortlisted teams are contacted for a 30-minute discovery call with the VVLF team. After that, selected founders get immediate access to workspace, mentors, and the program calendar.",
  },
  {
    q: "Do I need a co-founder or team?",
    a: "For Failathon, you can come alone and we'll match you with a team. PIVOT requires a team of 2–4. For the Pre-Incubation Cohort, solo founders are considered but strong teams are preferred.",
  },
  {
    q: "Is there an equity stake or fee?",
    a: "No. VVLF is a Section 8 not-for-profit company. We take zero equity and charge no fees. All programs are fully subsidised by BVRIT and our partner organizations.",
  },
  {
    q: "Can I join multiple programs?",
    a: "Yes — many of our founders start with Failathon, join PIVOT, and eventually apply to the Pre-Incubation Cohort. Each program builds on the last.",
  },
  {
    q: "What if my idea is still rough?",
    a: "That's exactly what we're here for. Apply anyway. The Failathon is specifically designed for people with rough ideas or no idea yet. You don't need a polished pitch to get started.",
  },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqItems.map((item, i) => (
        <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 rounded-2xl"
            aria-expanded={open === i}
          >
            <span className="font-semibold text-[#0B0F19] text-sm pr-4">{item.q}</span>
            <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-3">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

const PROGRAM_TABS = [
  { id: "pre-incubation", label: "Pre-Incubation" },
  { id: "incubation", label: "Incubation" },
  { id: "acceleration", label: "Acceleration" },
];

function getTabFromHash() {
  if (typeof window === "undefined") return "pre-incubation";
  const h = window.location.hash.replace("#", "");
  return PROGRAM_TABS.some((t) => t.id === h) ? h : "pre-incubation";
}

export function ProgramsSection() {
  const [notifyOpen, setNotifyOpen] = useState<string | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(getTabFromHash);

  useEffect(() => {
    const onHashChange = () => setActiveTab(getTabFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const selectTab = (id: string) => {
    window.history.pushState(null, "", `#${id}`);
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="programs" className="py-24 bg-background">

      {/* Tab Switcher */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="flex flex-wrap justify-center gap-3">
          {PROGRAM_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => selectTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                activeTab === tab.id
                  ? "bg-[#0B0F19] text-white border-[#0B0F19] shadow-md"
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#0B0F19]/40 hover:text-[#0B0F19]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "pre-incubation" && (
      <>
      {/* Innovation Flow Banner — interactive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <FadeIn>
          <div className="bg-[#0B0F19] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative border border-white/10">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(37,99,235,0.08) 0%, transparent 70%)" }} />

            <div className="relative z-10 text-center md:text-left">
              <p className="text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-2">Your Innovation Journey</p>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">Idea → Prototype → Startup → Scale</h3>
              <p className="text-white/40 text-sm mt-2">Hover each stage to learn what happens there</p>
            </div>

            <div className="relative z-10 flex items-start gap-2 text-white shrink-0 flex-wrap justify-center">
              {journeySteps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-2">
                  <div
                    className="relative"
                    onMouseEnter={() => setHoveredStep(i)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`text-center px-5 py-3 rounded-2xl border cursor-default transition-all duration-200 min-w-[80px] ${
                        step.highlight
                          ? "bg-[#2563EB]/20 border-[#2563EB]/40"
                          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                      }`}
                    >
                      <step.icon className={`w-6 h-6 mx-auto mb-1 ${step.color}`} />
                      <p className="text-xs font-semibold text-white">{step.label}</p>
                    </motion.div>

                    {/* Tooltip */}
                    <AnimatePresence>
                      {hoveredStep === i && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.95 }}
                          transition={{ duration: 0.18 }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 bg-white rounded-xl shadow-2xl border border-slate-100 p-4 z-50 pointer-events-none"
                        >
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">{step.program}</p>
                          <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
                          <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-45" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {i < journeySteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-white/20 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Program Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-28">
          {programs.map((program, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={program.id} id={program.id}>
                <FadeIn direction={isLeft ? "right" : "left"}>
                  <div className={`flex flex-col lg:flex-row gap-12 items-center ${isLeft ? "" : "lg:flex-row-reverse"}`}>

                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.4 }}
                        className="relative group rounded-3xl overflow-hidden shadow-2xl"
                      >
                        <div className="absolute inset-0 bg-[#0B0F19]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img
                          src={`${import.meta.env.BASE_URL}images/${program.img}`}
                          alt={program.imgAlt}
                          loading="lazy"
                          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                          <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${program.tagColor}`}>
                            {program.tag}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-5">
                      <div>
                        <h2 className="text-3xl font-display font-bold text-[#0B0F19] mb-4">{program.title}</h2>


                        {/* What you get */}
                        <div className="mb-4">
                          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">What you get</p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {program.benefits.map((b) => (
                              <li key={b} className="flex items-center gap-2 text-slate-600 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Outcome callout */}
                        <div className="bg-[#22C55E]/8 border border-[#22C55E]/20 rounded-2xl px-5 py-4 flex items-start gap-3">
                          <ArrowUpRight className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                          <p className="text-sm text-slate-700 leading-relaxed">
                            <span className="font-semibold text-[#0B0F19]">What's next: </span>
                            {program.outcome}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pre-Incubation Highlight */}
      <div id="pre-incubation" className="bg-[#0B0F19] py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/30 text-[#2563EB] font-semibold text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
                </span>
                Flagship Program · Applications Open
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Pre-Incubation Cohort 2.0</h2>
              <p className="text-lg text-slate-300 mb-3">
                Cohort 1.0 produced 4 incorporated ventures. Cohort 2.0 launches with expanded mentorship, structured funding access, and a larger seat count.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold">
                  <Timer className="w-3.5 h-3.5" /> Limited to 20 teams
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5" /> Shortlisted within 5 days
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Immediate mentor access on acceptance
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVdqSv6MBAmUJatiOsjqBrhx825IRaHbHx3HKZG4Np1CrmrQ/viewform" target="_blank" rel="noreferrer">
                  <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                    <Button size="lg" className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white rounded-full px-8 shadow-lg shadow-[#2563EB]/30 group">
                      Apply for Cohort 2.0
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </a>
                <Link href="/startups">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-[#0B0F19] rounded-full transition-all">
                    See Cohort 1.0 Startups
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preIncubationStartups.map((startup, i) => (
              <FadeIn key={startup.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/[0.15] transition-colors cursor-pointer group"
                >
                  <div className={`w-20 h-16 rounded-xl ${startup.logoBg} flex items-center justify-center mb-4 shadow-lg p-2`}>
                    <img
                      src={`${import.meta.env.BASE_URL}images/${startup.logo}`}
                      alt={startup.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{startup.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{startup.category}</p>
                  <span className="text-xs font-semibold text-[#22C55E] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] inline-block" />
                    Incorporated
                  </span>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
      </>
      )}

      {activeTab === "incubation" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-[#2563EB] font-bold tracking-wider text-xs uppercase mb-3">Incubation Cohort</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0B0F19] mb-5">Incubation Cohort</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Our inaugural Incubation Cohort 1.0 has successfully concluded, resulting in the incubation of four promising startups. Participants were equipped with expert mentorship and key resources, empowering them to turn bold ideas into impactful new ventures through rigorous validation and prototyping phases.
              </p>
            </div>
          </FadeIn>
        </div>
      )}

      {activeTab === "acceleration" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-[#2563EB] font-bold tracking-wider text-xs uppercase mb-3">Acceleration</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0B0F19] mb-5">Coming Soon</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Details about our Acceleration program are on the way. Check back soon.
              </p>
            </div>
          </FadeIn>
        </div>
      )}

      {/* FAQ Section */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-[#2563EB] font-bold tracking-wider text-xs uppercase mb-3">Common Questions</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0B0F19]">
                What Founders Ask Before Applying
              </h2>
              <p className="text-slate-500 mt-3">Real answers to the questions we get most often.</p>
            </div>
          </FadeIn>
          <FadeIn>
            <FaqAccordion />
          </FadeIn>
          <FadeIn>
            <div className="text-center mt-10">
              <p className="text-slate-500 text-sm mb-4">Still have questions?</p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-[#0B0F19] text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-lg"
                >
                  Ask Us Directly
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
