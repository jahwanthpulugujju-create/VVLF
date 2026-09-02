import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { end: 400, suffix: "+", label: "Innovators", sub: "Students turned founders" },
  { end: 10, suffix: "+", label: "Startups", sub: "From idea to incorporated" },
  { end: 4, suffix: "+", label: "Cohorts", sub: "Pre-Incubation programs" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between bg-[#080c14] overflow-hidden"
    >
      {/* ── BACKGROUND LAYERS ── */}

      {/* Background photo */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-0 bg-[#080c14]/85 pointer-events-none" />

      {/* Royal blue ambient glow */}
      <div
        className="absolute top-[-15%] right-[-10%] w-[65vw] h-[65vw] rounded-full z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(30,90,255,0.12) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(30,90,255,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex flex-col justify-center flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 pb-20">

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display font-bold text-white leading-[1.04] tracking-tight mb-6 max-w-3xl"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
          >
            Where innovative Founders
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #4f8aff 0%, #7ab3ff 40%, #a0c8ff 70%, #4f8aff 100%)",
                backgroundSize: "200%",
                animation: "gradient 4s ease infinite",
              }}
            >
              Become Entrepreneurs.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={item} className="text-white/60 text-lg sm:text-xl max-w-lg leading-relaxed mb-10 font-light">
            A launchpad for founders, builders, and student entrepreneurs ready to execute, launch, and grow.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVdqSv6MBAmUJatiOsjqBrhx825IRaHbHx3HKZG4Np1CrmrQ/viewform" target="_blank" rel="noreferrer">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2.5 bg-[#1e5aff] text-white font-bold px-8 py-4 rounded-full text-sm shadow-[0_0_32px_rgba(30,90,255,0.35)] hover:shadow-[0_0_48px_rgba(30,90,255,0.5)] transition-shadow duration-200"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </a>
            <Link href="/programs">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-200"
              >
                Explore Programs
                <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="relative z-10 border-t border-white/8 bg-white/[0.03] backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-3 gap-0 divide-x divide-white/10">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="flex flex-col items-center text-center px-4 py-2"
              >
                <div
                  className="font-display font-bold text-white mb-0.5 tabular-nums"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                >
                  <CountUp end={stat.end} duration={2.2} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </div>
                <div className="text-white/70 text-xs font-bold uppercase tracking-wider leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
