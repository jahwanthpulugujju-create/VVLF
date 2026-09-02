import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/ui/section-header";
import { Calendar, Filter, Clock, MapPin, Users, X, ArrowUpRight } from "lucide-react";

const events = [
  {
    date: "MAR 23–24, 2026", month: "MAR", day: "23", year: "2026",
    type: "Program",
    title: "Project SAARTHIS Session 5",
    desc: "Continued session focusing on inclusive innovation, refining solutions, and advancing student-led impact projects.",
    outcome: "Solutions refined · Student-led impact projects advanced",
    location: "BVRIT Innovation Lab",
    audience: "SAARTHIS Cohort — All years",
    img: "saarthis-session5.jpeg",
    imgAlt: "Students collaborating and presenting ideas during Project SAARTHIS Session 5",
  },
  {
    date: "MAR 16, 2026", month: "MAR", day: "16", year: "2026",
    type: "Program",
    title: "Project SAARTHIS Session 4",
    desc: "Continued session focusing on inclusive innovation, refining solutions, and advancing student-led impact projects.",
    outcome: "Solutions refined · Student-led impact projects advanced",
    location: "BVRIT Innovation Lab",
    audience: "SAARTHIS Cohort — All years",
    img: "saarthis-session4.png",
    imgAlt: "Students collaborating and presenting ideas during Project SAARTHIS Session 4",
  },
  {
    date: "FEB 26, 2026", month: "FEB", day: "26", year: "2026",
    type: "Community",
    title: "Failathon 2026",
    desc: "24-hour experiential event where students embraced failure to build innovative solutions.",
    outcome: "200+ students attended · Culture of learning from failure seeded",
    location: "BVRIT Campus, Narsapur",
    audience: "All BVRIT students & founders",
    img: "failathon.jpg",
    imgAlt: "Participants sharing startup experiences and learnings during Failathon 2026 event",
  },
  {
    date: "JAN 9–10, 2026", month: "JAN", day: "9", year: "2026",
    type: "Program",
    title: "Vishnu Walking Trail Hackathon",
    desc: "36-hour hackathon where participants built innovative solutions to enhance the Vishnu Walking Trail experience.",
    outcome: "Teams built working prototypes · Hardware skills unlocked",
    location: "BVRIT Maker Lab",
    audience: "All years · Maker & hardware track",
    img: "walking-trail-hackathon-new.jpeg",
    imgAlt: "Participants collaborating during a 36-hour hackathon focused on innovative solutions",
  },
  {
    date: "DEC 19–20, 2025", month: "DEC", day: "19", year: "2025",
    type: "Program",
    title: "Project SAARTHIS Session 3",
    desc: "Two-day session focused on advancing inclusive innovation, collaborative problem-solving, and real-world implementation of student-led ideas.",
    outcome: "Teams advanced to implementation phase · Real-world testing begun",
    location: "BVRIT Innovation Lab",
    audience: "SAARTHIS Cohort — All years",
    img: "saarthis.jpg",
    imgAlt: "Students collaborating during Project SAARTHIS Session 3 focused on innovation and real-world solutions",
  },
  {
    date: "SEP 18, 2025", month: "SEP", day: "18", year: "2025",
    type: "Program",
    title: "Project SAARTHIS Session 2",
    desc: "Second session of Project SAARTHIS focusing on inclusive innovation, problem-solving, and student-driven impact initiatives.",
    outcome: "Teams deepened user research · Prototypes iterated",
    location: "BVRIT Innovation Lab",
    audience: "SAARTHIS Cohort — All years",
    img: "saarthis-session2.jpg",
    imgAlt: "Students participating in Project SAARTHIS Session 2 focused on innovation and collaboration",
  },
  {
    date: "SEP 18, 2025", month: "SEP", day: "18", year: "2025",
    type: "Community",
    title: "Startup Meet",
    desc: "An engaging startup meet bringing together founders, mentors, and innovators to network, share insights, and explore collaboration opportunities.",
    outcome: "50+ students engaged · Pre-Incubation applications followed",
    location: "BVRIT Campus, Narsapur",
    audience: "All BVRIT students with startup ideas",
    img: "startup-meet-sep.png",
    imgAlt: "Participants interacting during a startup meet event focused on networking and collaboration",
  },
  {
    date: "AUG 4, 2025", month: "AUG", day: "4", year: "2025",
    type: "Milestone",
    title: "Cohort 1.0 — Venture Incorporation",
    desc: "Startups from COHORT 1.0 were officially incorporated, turning four bold ideas into legally registered companies.",
    outcome: "4 ventures incorporated · Pre-Incubation Cohort 1.0",
    location: "BVRIT Campus, Narsapur",
    audience: "Cohort 1.0 Founders",
    img: "cohort-incorporation.png",
    imgAlt: "VVLF Cohort 1.0 founders celebrating company incorporation milestone",
  },
  {
    date: "JUL 24, 2025", month: "JUL", day: "24", year: "2025",
    type: "Community",
    title: "Fostering Grassroots Innovation",
    desc: "Supporting the Innovators' Introductory Meet for grassroots innovators from Medak district — connecting local problem-solvers with the VVLF ecosystem.",
    outcome: "District-level innovators introduced to BVRIT ecosystem",
    location: "Medak District, Telangana",
    audience: "Grassroots innovators, community leaders",
    img: "grassroots-meet.jpg",
    imgAlt: "Community innovators gathering at the Medak district grassroots meet",
  },
  {
    date: "JUL 10, 2025", month: "JUL", day: "10", year: "2025",
    type: "Program",
    title: "Project SAARTHIS: Be the Change",
    desc: "Empowering students to lead inclusive innovation — a structured session on designing assistive technology for persons with disabilities.",
    outcome: "Student teams onboarded to year-long SAARTHIS journey",
    location: "BVRIT Innovation Lab",
    audience: "All years · Assistive tech focus",
    img: "saarthis-be-the-change.jpeg",
    imgAlt: "SAARTHIS session with students co-designing inclusive technology",
  },
  {
    date: "JUL 8, 2025", month: "JUL", day: "8", year: "2025",
    type: "Workshop",
    title: "Business Launch Workshop",
    desc: "A hands-on session guiding future founders through idea validation, financial planning, and the practical steps to launch a scalable business.",
    outcome: "Participants left with a validated idea canvas and financial model",
    location: "BVRIT Seminar Hall",
    audience: "Final year students & early-stage founders",
    img: "business-launch-workshop.png",
    imgAlt: "Students at business launch workshop learning idea validation frameworks",
  },
  {
    date: "MAY 1, 2025", month: "MAY", day: "1", year: "2025",
    type: "Program",
    title: "EPICS Cohort — Purpose Meets Innovation",
    desc: "VVLF mentored 49 multidisciplinary teams developing tangible solutions for community needs — the largest cohort we've run.",
    outcome: "49 teams · Community impact projects delivered",
    location: "BVRIT Campus",
    audience: "All years · Multidisciplinary teams",
    img: "epics-cohort.jpg",
    imgAlt: "49 EPICS Cohort student teams presenting community-driven solutions",
  },
  {
    date: "FEB 28, 2025", month: "FEB", day: "28", year: "2025",
    type: "Milestone",
    title: "Pre-Incubation Cohort 1.0 — Launch Day",
    desc: "Launched VVLF's flagship incubation program with curated mentors, workspace access, legal support, and investor introductions.",
    outcome: "8 founding teams · Full incubation program began",
    location: "BVRIT Innovation Hub",
    audience: "Selected Cohort 1.0 founders",
    img: "cohort-launch.jpg",
    imgAlt: "VVLF team and Cohort 1.0 founders at the official program launch",
  },
  {
    date: "FEB 13, 2025", month: "FEB", day: "13", year: "2025",
    type: "Workshop",
    title: "Innovation as a Career",
    desc: "An insightful session on entrepreneurship and innovation as a viable, rewarding career path — with real founders sharing their journeys.",
    outcome: "150+ students attended · Multiple applicants to Cohort 1.0 followed",
    location: "BVRIT Auditorium",
    audience: "All BVRIT students",
    img: "innovation-career.jpg",
    imgAlt: "Guest speaker presenting innovation career paths to a full auditorium",
  },
  {
    date: "JAN 12, 2025", month: "JAN", day: "12", year: "2025",
    type: "Milestone",
    title: "Official VVLF Brand Launch",
    desc: "Unveiling the VVLF identity: a new logo, brand standards, and a public commitment to student entrepreneurship at BVRIT.",
    outcome: "VVLF officially established as a Section 8 company",
    location: "BVRIT Campus",
    audience: "Faculty, students & founding partners",
    img: "logo-launch.png",
    imgAlt: "VVLF logo unveiled at the official brand launch ceremony",
  },
];

const years = ["All Years", "2026", "2025"];
const types = ["All Types", "Program", "Workshop", "Community"];

const typeColors: Record<string, string> = {
  Milestone: "bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/20",
  Program: "bg-blue-100 text-blue-700 border-blue-200",
  Workshop: "bg-orange-100 text-orange-700 border-orange-200",
  Community: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

export function TimelineSection() {
  const [activeYear, setActiveYear] = useState("All Years");
  const [activeType, setActiveType] = useState("All Types");

  const filtersActive = activeYear !== "All Years" || activeType !== "All Types";

  const filtered = events.filter((e) => {
    const yearMatch = activeYear === "All Years" || e.year === activeYear;
    const typeMatch = activeType === "All Types" || e.type === activeType;
    return yearMatch && typeMatch;
  });

  return (
    <section id="events" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Past Events Timeline */}
        <SectionHeader
          eyebrow="Events Timeline"
          title="Our Journey & Milestones"
          subtitle="A year of building, learning, and launching bold ideas."
        />

        {/* Timeline content */}
        {filtered.length === 0 ? (
          <FadeIn>
            <div className="text-center py-16 text-slate-400">
              <p className="text-lg font-semibold">No events match this filter.</p>
            </div>
          </FadeIn>
        ) : (
          <div className="space-y-6">
            {filtered.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <FadeIn key={i} direction={isLeft ? "right" : "left"} delay={0.05}>
                  <article className={`bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#2563EB]/20 transition-all duration-300 overflow-hidden flex flex-col md:flex-row group ${!isLeft ? "md:flex-row-reverse" : ""}`}>

                    {/* Image */}
                    <div className="w-full md:w-2/5 shrink-0 overflow-hidden bg-slate-100 min-h-[220px]">
                      <img
                        src={`${import.meta.env.BASE_URL}images/${event.img}`}
                        alt={event.imgAlt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-500 font-semibold text-xs rounded-full border border-slate-200 w-fit mb-3">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        {event.date}
                      </span>
                      <h3 className="text-xl font-display font-bold text-[#0B0F19] mb-2 leading-snug">{event.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-4">{event.desc}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <MapPin className="w-3 h-3" aria-hidden="true" />{event.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <Users className="w-3 h-3" aria-hidden="true" />{event.audience}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#22C55E]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0" aria-hidden="true" />
                        {event.outcome}
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
