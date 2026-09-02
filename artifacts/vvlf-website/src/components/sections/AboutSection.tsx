import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/ui/section-header";
import { Cpu, Microchip, UserCheck, Leaf, Target, Lightbulb, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import bvritLogo from "@assets/bvrit-logo_1775501124732.png";
import kaitekiLogo from "@assets/kaiteki-logo_1775501124734.png";
import tgicLogo from "@assets/TGIC-new-logo_1775501124735.png";
import tgtfLogo from "@assets/tgtf-logo-_1775501124736.png";

export function AboutSection() {
  const thrustAreas = [
    { icon: Cpu, title: "Deep Tech", desc: "AI, IoT, Robotics, and emerging technologies shaping tomorrow.", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20", glow: "hover:border-blue-400/40 hover:shadow-blue-400/10" },
    { icon: Microchip, title: "Semiconductors", desc: "Hardware innovation and chip design for India's tech future.", color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20", glow: "hover:border-purple-400/40 hover:shadow-purple-400/10" },
    { icon: UserCheck, title: "Assistive Technology", desc: "Inclusive solutions for persons with disabilities — by students, for everyone.", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", glow: "hover:border-emerald-400/40 hover:shadow-emerald-400/10" },
    { icon: Leaf, title: "Sustainability", desc: "Green tech and climate-focused innovations aligned with global SDGs.", color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20", glow: "hover:border-yellow-400/40 hover:shadow-yellow-400/10" }
  ];

  const partners = [
    {
      name: "BVRIT",
      fullName: "BV Raju Institute of Technology",
      desc: "Academic parent institution and campus host",
      role: "Academic Partner",
      logo: bvritLogo,
      logoBg: "bg-white",
    },
    {
      name: "Kaiteki Innovations",
      fullName: "Kaiteki Innovations",
      desc: "Industry partner for deep tech and assistive tech",
      role: "Industry Partner",
      logo: kaitekiLogo,
      logoBg: "bg-white",
    },
    {
      name: "TGIC",
      fullName: "Telangana Government Innovation Council",
      desc: "Government partner enabling startup access across Telangana",
      role: "Government Partner",
      logo: tgicLogo,
      logoBg: "bg-white",
    },
    {
      name: "TGTF",
      fullName: "The Good Talk Factory Foundation",
      desc: "Communication and storytelling partner for our founders",
      role: "Storytelling Partner",
      logo: tgtfLogo,
      logoBg: "bg-white",
    },
  ];

  const missionPoints = [
    "To incubate and accelerate early-stage, tech-led startups working in critical sectors.",
    "To foster cross-sector collaboration between academia, industry, and government.",
    "To equip young innovators with the skills, tools, and networks to build ventures that matter.",
    "To catalyze solutions aligned with SDGs and national innovation priorities.",
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Layout */}
        <div className="mb-32">
          <FadeIn direction="left">
            <div className="space-y-8 max-w-3xl mx-auto">
              <div>
                <p className="text-[#2563EB] font-bold tracking-wider uppercase mb-3 text-[25px]">About VVLF</p>
                <h2 className="text-4xl font-display font-bold text-[#0B0F19] leading-tight mb-5">
                  Building the Next Generation of Founders
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Vishnu Venture Labs Foundation is a not-for-profit innovation ecosystem at BVRIT, helping student founders validate, build, and launch ventures — with real mentorship, infrastructure, and industry access.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B0F19]">Our Vision</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">A world-class, purpose-driven innovation ecosystem that nurtures inclusive, sustainable, and deep tech ventures — contributing to economic growth and UN SDGs.</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] shrink-0">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B0F19]">Our Mission</h3>
                  </div>
                  <ul className="space-y-2">
                    {missionPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-slate-600 text-sm leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Ecosystem Partners */}
        <SectionHeader
          eyebrow="Ecosystem Partners"
          title="Built on Strong Partnerships"
          subtitle="Backed by academia, industry, and government — so our founders have every door open."
        />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-32">
            {partners.map((partner, i) => (
              <FadeIn key={partner.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#2563EB]/20 transition-shadow duration-300 flex flex-col items-center text-center h-full cursor-default"
                >
                  <div className={`w-full h-24 rounded-xl flex items-center justify-center mb-5 ${partner.logoBg} border border-slate-100 p-4 overflow-hidden relative`}>
                    <img
                      src={partner.logo}
                      alt={partner.fullName}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-base font-bold text-[#0B0F19] mb-1">{partner.fullName}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{partner.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>

        {/* Thrust Areas */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0B0F19]">Focus Areas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {thrustAreas.map((area, i) => (
              <FadeIn key={area.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`group bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl transition-all duration-300 h-full cursor-default ${area.glow}`}
                >
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${area.bg}`}
                  >
                    <area.icon className={`w-5 h-5 ${area.color}`} />
                  </motion.div>
                  <h3 className="text-base font-bold text-[#0B0F19] mb-2">{area.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{area.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
