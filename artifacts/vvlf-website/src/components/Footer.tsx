import { Link } from "wouter";
import { Instagram, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

const links = {
  explore: [
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Startups", href: "/startups" },
    { label: "Events", href: "/events" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ],
  programs: [
    { label: "Pre-Incubation Cohort", href: "/programs#pre-incubation" },
    { label: "Failathon", href: "/programs#failathon" },
    { label: "PIVOT Makeathon", href: "/programs#pivot" },
    { label: "Project SAARTHIS", href: "/programs#saarthis" },
    { label: "EPICS Cohort", href: "/programs#epics" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#080c14] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={`${import.meta.env.BASE_URL}images/vvlf-emblem.png`}
                  alt="Vishnu Venture Labs Foundation"
                  className="h-10 w-10 rounded-full object-contain drop-shadow-md"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-white font-display leading-tight">
                    Vishnu Venture Labs
                  </span>
                  <span className="text-[10px] tracking-widest uppercase font-bold text-blue-400">
                    Foundation
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Incubation center of BV Raju Institute of Technology.<br />
              Building the next generation of founders.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/vishnu_venture_labs_foundation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                aria-label="VVLF on Instagram"
                className="w-9 h-9 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-white/55 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/vishnu-venture-labs-foundation/"
                target="_blank"
                rel="noreferrer"
                aria-label="VVLF on LinkedIn"
                className="w-9 h-9 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-white/55 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:rohith.s@bvrit.ac.in"
                aria-label="Email VVLF at rohith.s@bvrit.ac.in"
                className="w-9 h-9 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-white/55 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Explore site pages">
            <p className="text-white/55 text-[10px] font-bold uppercase tracking-[0.18em] mb-5">Explore</p>
            <ul className="space-y-3">
              {links.explore.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/65 text-sm hover:text-white transition-colors focus:outline-none focus:underline focus:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Programs */}
          <nav aria-label="VVLF programs">
            <p className="text-white/55 text-[10px] font-bold uppercase tracking-[0.18em] mb-5">Programs</p>
            <ul className="space-y-3">
              {links.programs.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/65 text-sm hover:text-white transition-colors focus:outline-none focus:underline focus:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-white/55 text-[10px] font-bold uppercase tracking-[0.18em] mb-5">Contact</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href="https://maps.app.goo.gl/ytbUqKu2xX9ecpjU7"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open VVLF location in Google Maps"
                  className="text-white/65 text-sm leading-relaxed hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  Vishnupur, Narsapur,<br />Medak — 502313
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:vvlf@bvrit.ac.in"
                    className="text-white/65 text-sm hover:text-white transition-colors focus:outline-none focus:underline"
                  >
                    vvlf@bvrit.ac.in
                  </a>
                  <a
                    href="mailto:rohith.s@bvrit.ac.in"
                    className="text-white/65 text-sm hover:text-white transition-colors focus:outline-none focus:underline"
                  >
                    rohith.s@bvrit.ac.in
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">© 2026 Vishnu Venture Labs Foundation · Section 8 Company · All rights reserved.</p>
          <div className="flex gap-5 text-xs text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors focus:outline-none focus:text-white/70 focus:underline">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors focus:outline-none focus:text-white/70 focus:underline">Terms</a>
            <a href="#" className="hover:text-white/70 transition-colors focus:outline-none focus:text-white/70 focus:underline">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
