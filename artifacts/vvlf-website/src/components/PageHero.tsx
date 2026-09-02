import { FadeIn } from "@/components/FadeIn";

interface PageHeroProps {
  eyebrow: string;
  headline: string;
  sub: string;
  image?: string;
}

export function PageHero({ eyebrow, headline, sub, image }: PageHeroProps) {
  return (
    <div className="relative bg-[#0B0F19] pt-40 pb-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-[#2563EB] font-bold uppercase tracking-[0.18em] mb-4 text-[21px]">
            {eyebrow}
          </p>
          <h1
            className="font-bold text-white tracking-tight mb-5 max-w-3xl"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06 }}
          >
            {headline}
          </h1>
        </FadeIn>
      </div>
    </div>
  );
}
