import CountUp from "react-countup";
import { motion } from "framer-motion";

interface StatCardProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sub?: string;
  className?: string;
}

export function StatCard({ end, suffix = "", prefix = "", label, sub, className = "" }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center ${className}`}
    >
      <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">
        {prefix}
        <CountUp end={end} duration={2.5} enableScrollSpy scrollSpyOnce />
        {suffix}
      </div>
      <div className="font-semibold text-white/90 text-sm">{label}</div>
      {sub && <div className="text-xs text-white/50 mt-1">{sub}</div>}
    </motion.div>
  );
}
