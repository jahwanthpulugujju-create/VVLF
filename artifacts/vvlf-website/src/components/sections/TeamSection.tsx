import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const board = [
  { name: "Shri R. Rajagopal", title: "Vice Chairman", photo: "team-rajagopal.png", expertise: ["Leadership", "Governance"], linkedin: "#" },
  { name: "Shri K. Aditya Vissam", title: "Secretary", photo: "team-aditya.png", expertise: ["Strategy", "Operations"], linkedin: "#" },
  { name: "Dr. K. Lakshmi Prasad", title: "Director", photo: "team-lakshmi.png", expertise: ["Research", "Innovation"], linkedin: "#" },
  { name: "Dr. Sanjay Dubey", title: "Principal, BVRIT", photo: "team-sanjay.png", expertise: ["Academia", "Engineering"], linkedin: "#" },
];

const team = [
  {
    name: "Dr. M. K. Kaushik",
    title: "Director, VVLF",
    photo: "team-kaushik.png",
    bio: "Leading VVLF's innovation initiatives and guiding the startup ecosystem with deep technical and entrepreneurial expertise. Over 15 years in academia and industry.",
    expertise: ["Deep Tech", "Entrepreneurship", "Mentorship"],
    achievements: ["15+ Years Experience", "50+ Startups Mentored"],
    linkedin: "https://www.linkedin.com/in/dr-m-k-kaushik-a6580b33/",
  },
  {
    name: "Rohith Sirpa",
    title: "Manager, VVLF",
    photo: "team-rohith.png",
    bio: "Driving day-to-day operations, startup outreach, and program management across VVLF's growing portfolio of ventures.",
    expertise: ["Program Management", "Startup Ops", "Community"],
    achievements: ["Cohort 1.0 Lead", "4 Incorporated Startups"],
    linkedin: "https://in.linkedin.com/in/rohith-sirpa-539b0b97",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

        {/* ── Board of Directors ── */}
        <div>
          <SectionHeader
            eyebrow="Leadership"
            title="Board of Directors"
            subtitle="Visionaries guiding VVLF's mission and strategy."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {board.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#2563EB]/20 transition-shadow duration-300 cursor-default"
                >
                  {/* Photo */}
                  <div className="w-full aspect-square bg-slate-100 overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${member.photo}`}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-[#0B0F19] text-sm leading-tight mb-0.5">{member.name}</h3>
                    <p className="text-[#2563EB] text-xs font-semibold mb-2">{member.title}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ── Core Team ── */}
        <div>
          <SectionHeader
            eyebrow="Core Team"
            title="The People Driving VVLF"
            subtitle="Day-to-day builders of the ecosystem."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default"
                >
                  {/* Photo — tall */}
                  <div className="w-full h-72 bg-slate-100 overflow-hidden relative">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${member.photo}`}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* LinkedIn overlay */}
                    <div className="absolute inset-0 bg-[#0B0F19]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={member.linkedin}
                        aria-label={`${member.name} on LinkedIn`}
                        className="inline-flex items-center gap-2 bg-[#0A66C2] text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:scale-105 transition-transform"
                      >
                        <Linkedin className="w-4 h-4" /> View LinkedIn
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-[#0B0F19] mb-0.5">{member.name}</h3>
                    <p className="text-[#2563EB] font-semibold text-sm mb-3">{member.title}</p>

                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
