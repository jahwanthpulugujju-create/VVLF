import { FadeIn } from "@/components/FadeIn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  eyebrowColor?: string;
  titleColor?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  eyebrowColor = "text-[#2563EB]",
  titleColor = "text-[#0B0F19]",
  className = "",
}: SectionHeaderProps) {
  const alignClass =
    align === "center"
      ? "text-center mx-auto"
      : align === "right"
      ? "text-right ml-auto"
      : "text-left mr-auto";

  return (
    <FadeIn>
      <div className={`max-w-2xl mb-14 ${alignClass} ${className}`}>
        {eyebrow && (
          <p className={`${eyebrowColor} font-bold tracking-widest text-xs uppercase mb-2`}>
            {eyebrow}
          </p>
        )}
        <h2 className={`text-3xl md:text-4xl font-display font-bold ${titleColor}`}>
          {title}
        </h2>
        {subtitle && <p className="text-slate-500 mt-3 text-base leading-relaxed">{subtitle}</p>}
      </div>
    </FadeIn>
  );
}
