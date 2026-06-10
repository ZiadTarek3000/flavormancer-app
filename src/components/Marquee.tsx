import { Sparkles } from "lucide-react";
import { marqueeWords } from "../data";

export default function Marquee() {
  const items = [...marqueeWords, ...marqueeWords];

  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-ink py-5">
      <div className="flex w-max marquee-track">
        {items.map((word, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="font-display text-2xl font-medium text-cream/90 sm:text-3xl">
              {word}
            </span>
            <Sparkles className="h-5 w-5 text-spice-400" />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
