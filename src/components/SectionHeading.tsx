import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  id?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  id,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`} id={id}>
      <motion.span
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse-ring" />
        {eyebrow}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl text-balance"
      >
        {title}
        {highlight && <span className="text-gradient"> {highlight}</span>}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl text-base leading-relaxed text-ink/60"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
