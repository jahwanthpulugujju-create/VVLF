import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Programs",
    href: "/programs",
    dropdown: [
      { name: "Pre-Incubation", href: "/programs#pre-incubation" },
      { name: "Incubation", href: "/programs#incubation" },
      { name: "Acceleration", href: "/programs#acceleration" },
    ],
  },
  { name: "Startups", href: "/startups" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, navigate] = useLocation();

  const handleDropdownClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const [path, hash] = href.split("#");
    if (path !== location) {
      navigate(path);
    }
    requestAnimationFrame(() => {
      window.location.hash = hash;
      window.dispatchEvent(new Event("hashchange"));
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const isHome = location === "/";
  const transparent = isHome && !scrolled;

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent py-5"
          : "bg-white/96 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)] py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="Vishnu Venture Labs Foundation Home">
          <div className="flex items-center gap-2.5 group-hover:scale-105 transition-all duration-300">
            <img
              src={`${import.meta.env.BASE_URL}images/vvlf-emblem.png`}
              alt="Vishnu Venture Labs Foundation"
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-contain drop-shadow-md"
            />
            <div className="flex flex-col">
              <span className={`font-bold text-base sm:text-lg tracking-tight leading-tight font-display ${
                transparent ? "text-white" : "text-[#080c14]"
              }`}>
                Vishnu Venture Labs
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-bold leading-none ${
                transparent ? "text-blue-300" : "text-primary"
              }`}>
                Foundation
              </span>
            </div>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative group/dd">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    transparent
                      ? isActive(link.href)
                        ? "text-white bg-white/15"
                        : "text-white/75 hover:text-white hover:bg-white/10"
                      : isActive(link.href)
                      ? "text-[#080c14] bg-slate-100"
                      : "text-slate-600 hover:text-[#080c14] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                  <ChevronDown className="w-3.5 h-3.5 group-hover/dd:rotate-180 transition-transform duration-200 opacity-60" />
                </Link>

                {/* Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-58 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-slate-100 opacity-0 invisible group-hover/dd:opacity-100 group-hover/dd:visible transition-all duration-200 translate-y-2 group-hover/dd:translate-y-0 pointer-events-none group-hover/dd:pointer-events-auto">
                  <div className="p-2">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleDropdownClick(e, item.href)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:text-[#080c14] hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  transparent
                    ? isActive(link.href)
                      ? "text-white bg-white/15"
                      : "text-white/75 hover:text-white hover:bg-white/10"
                    : isActive(link.href)
                    ? "text-[#080c14] bg-slate-100"
                    : "text-slate-600 hover:text-[#080c14] hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* ── CTA + Mobile Toggle ── */}
        <div className="flex items-center gap-3">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVdqSv6MBAmUJatiOsjqBrhx825IRaHbHx3HKZG4Np1CrmrQ/viewform" target="_blank" rel="noreferrer">
            <button
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:-translate-y-0.5 ${
                transparent
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(30,90,255,0.4)] hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(30,90,255,0.5)]"
                  : "bg-[#080c14] text-white hover:bg-[#080c14]/85 shadow-md"
              }`}
            >
              Apply Now
            </button>
          </a>

          <button
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              transparent ? "text-white hover:bg-white/10" : "text-[#080c14] hover:bg-slate-100"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-slate-100 shadow-xl px-4 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center justify-between font-semibold py-3 px-4 rounded-xl transition-colors text-sm ${
                  isActive(link.href)
                    ? "text-primary bg-primary/5"
                    : "text-[#080c14] hover:bg-slate-50"
                }`}
              >
                {link.name}
                {link.dropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
              </Link>
            ))}
            <div className="pt-3 mt-1 border-t border-slate-100">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVdqSv6MBAmUJatiOsjqBrhx825IRaHbHx3HKZG4Np1CrmrQ/viewform" target="_blank" rel="noreferrer" className="block">
                <button className="w-full bg-[#080c14] text-white font-bold py-3.5 rounded-xl text-sm">
                  Apply Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
