const logos = [
  { name: "OLynk.AI", bg: "bg-[#f5f0eb]", logo: "startup-olynk.png" },
  { name: "Innovable Solutions", bg: "bg-white", logo: "startup-innovable.png" },
  { name: "Nirvaha Wellness", bg: "bg-[#0d2b2e]", logo: "startup-nirvaha.png" },
  { name: "MXC Ignite", bg: "bg-white", logo: "startup-mxc.png" },
  { name: "SALO", bg: "bg-black", logo: "startup-salo.png" },
  { name: "Stud Entertainments", bg: "bg-white", logo: "startup-studento.png" },
  { name: "VIINDE Instruments", bg: "bg-white", logo: "startup-viinde.png" },
];

export function LogoStrip() {
  return (
    <div className="bg-white border-y border-slate-100 py-6 overflow-hidden">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">Startups Born at VVLF</p>
      <div className="flex items-center gap-10 animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className={`inline-flex items-center justify-center h-12 w-24 rounded-xl shrink-0 ${logo.bg} border border-slate-100 px-2`}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/${logo.logo}`}
              alt={logo.name}
              className="max-h-8 max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
