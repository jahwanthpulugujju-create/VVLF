import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Hammer, Users, Rocket, ArrowRight, RotateCcw, CheckCircle2, ChevronRight } from "lucide-react";

const questions = [
  {
    id: "year",
    label: "Where are you in your journey?",
    options: [
      { value: "early", label: "1st or 2nd Year", emoji: "🌱", sub: "Just getting started" },
      { value: "mid", label: "3rd or 4th Year", emoji: "📐", sub: "Learning by building" },
      { value: "senior", label: "Final year / Graduated", emoji: "🚀", sub: "Ready to go all-in" },
    ],
  },
  {
    id: "goal",
    label: "What's your biggest goal right now?",
    options: [
      { value: "explore", label: "Explore & ideate", emoji: "💡", sub: "I'm still finding my idea" },
      { value: "prototype", label: "Build a prototype", emoji: "🔨", sub: "I have an idea, need to build" },
      { value: "impact", label: "Solve a real problem", emoji: "🌍", sub: "I want to create change" },
      { value: "launch", label: "Launch a startup", emoji: "🏢", sub: "I'm ready to build a company" },
    ],
  },
  {
    id: "time",
    label: "How much time can you commit?",
    options: [
      { value: "day", label: "Just a day", emoji: "☀️", sub: "See what happens" },
      { value: "weeks", label: "24–48 hours", emoji: "⚡", sub: "Intense sprint" },
      { value: "months", label: "A few months", emoji: "📅", sub: "Part-time commitment" },
      { value: "year", label: "A full year", emoji: "🗓️", sub: "Go all-in" },
    ],
  },
];

type Answers = { year?: string; goal?: string; time?: string };

function getRecommendation(a: Answers) {
  const { goal, time } = a;
  if (goal === "launch" || time === "year") {
    return {
      id: "pre-incubation",
      name: "Pre-Incubation Cohort 2.0",
      tag: "Flagship",
      tagColor: "bg-[#2563EB] text-white",
      icon: Rocket,
      iconColor: "text-[#2563EB]",
      iconBg: "bg-[#2563EB]/10 border-[#2563EB]/20",
      why: "You're committed and ready to go all-in. The Cohort gives you mentors, legal support, infrastructure, and investor access — everything to build a real company.",
      cta: "Apply for the Cohort",
      href: "/contact",
    };
  }
  if (goal === "impact" || time === "months") {
    return {
      id: "saarthis",
      name: "Project SAARTHIS / EPICS Cohort",
      tag: "Social Impact",
      tagColor: "bg-emerald-100 text-emerald-700",
      icon: Users,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
      why: "Your goal is to create real-world change. SAARTHIS and EPICS Cohort let you co-design with actual users and build solutions that matter beyond campus.",
      cta: "Explore SAARTHIS",
      href: "/programs#saarthis",
    };
  }
  if (goal === "prototype" || time === "weeks") {
    return {
      id: "pivot",
      name: "PIVOT Makeathon",
      tag: "Building",
      tagColor: "bg-orange-100 text-orange-700",
      icon: Hammer,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-500/10 border-orange-500/20",
      why: "You have an idea and need to build fast. 24 hours of focused building, mentorship, and pressure — you'll leave with a working prototype and a pitch.",
      cta: "Apply for PIVOT",
      href: "/programs#pivot",
    };
  }
  return {
    id: "failathon",
    name: "Failathon",
    tag: "Ideation",
    tagColor: "bg-blue-100 text-blue-700",
    icon: Lightbulb,
    iconColor: "text-yellow-500",
    iconBg: "bg-yellow-500/10 border-yellow-500/20",
    why: "You're just getting started and that's the perfect place to be. Failathon gives you a safe space to explore real problems, meet your future co-founder, and build confidence — in one day.",
    cta: "Join the next Failathon",
    href: "/programs#failathon",
  };
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
};

export function ProgramFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [dir, setDir] = useState(1);
  const [done, setDone] = useState(false);

  const totalSteps = questions.length;
  const q = questions[step];
  const keys = ["year", "goal", "time"] as const;

  function choose(value: string) {
    const newAnswers = { ...answers, [keys[step]]: value };
    setAnswers(newAnswers);
    if (step < totalSteps - 1) {
      setDir(1);
      setStep((s) => s + 1);
    } else {
      setDone(true);
    }
  }

  function back() {
    if (step > 0) { setDir(-1); setStep((s) => s - 1); }
  }

  function reset() {
    setAnswers({});
    setStep(0);
    setDir(-1);
    setDone(false);
  }

  const rec = done ? getRecommendation(answers) : null;

  return (
    <div className="bg-[#0B0F19] rounded-3xl overflow-hidden border border-white/10 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 60% at 100% 0%, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 p-8 md:p-10">
        {/* Header */}
        <div className="mb-8">
          <p className="text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-2">Find Your Program</p>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
            Which program fits you?
          </h3>
          <p className="text-white/40 text-sm mt-1">3 quick questions → personalised recommendation</p>
        </div>

        {/* Progress bar */}
        {!done && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-white/40">Question {step + 1} of {totalSteps}</span>
              <button
                onClick={reset}
                className="text-xs text-white/30 hover:text-white/60 transition-colors flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#2563EB] rounded-full"
                initial={false}
                animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            {!done ? (
              <motion.div
                key={`q-${step}`}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h4 className="text-white font-semibold text-base md:text-lg mb-5">{q.label}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {q.options.map((opt) => (
                    <motion.button
                      key={opt.value}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => choose(opt.value)}
                      className="group text-left p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#2563EB]/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40"
                    >
                      <span className="text-xl mb-2 block">{opt.emoji}</span>
                      <span className="block text-white font-semibold text-sm leading-snug mb-0.5">{opt.label}</span>
                      <span className="block text-white/40 text-xs">{opt.sub}</span>
                      <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all mt-2" />
                    </motion.button>
                  ))}
                </div>

                {step > 0 && (
                  <button
                    onClick={back}
                    className="mt-5 text-xs text-white/30 hover:text-white/60 transition-colors flex items-center gap-1.5 focus:outline-none"
                  >
                    ← Back
                  </button>
                )}
              </motion.div>
            ) : rec ? (
              <motion.div
                key="result"
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                  <p className="text-[#22C55E] text-xs font-bold uppercase tracking-widest">Your match</p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 mb-6"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${rec.iconBg}`}>
                      <rec.icon className={`w-6 h-6 ${rec.iconColor}`} />
                    </div>
                    <div>
                      <span className={`inline-block px-2.5 py-1 text-xs font-bold rounded-full mb-2 ${rec.tagColor}`}>
                        {rec.tag}
                      </span>
                      <h4 className="text-white font-display font-bold text-xl leading-snug mb-2">{rec.name}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{rec.why}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  className="flex flex-wrap gap-3"
                >
                  <Link href={rec.href}>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <button className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-bold px-6 py-3 rounded-full shadow-[0_0_24px_rgba(37,99,235,0.3)] text-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/30">
                        {rec.cta}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  </Link>
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 font-semibold px-4 py-3 rounded-full text-sm transition-colors border border-white/10 hover:border-white/20 focus:outline-none"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Try again
                  </button>
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
