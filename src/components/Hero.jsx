import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import { hero } from "../data/content";
import { AnimatedCounter, FadeUp } from "../hooks/useScrollAnimation";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Hero() {
  const allWords = hero.headline.join(" ").split(" ");

  return (
    <section className="relative min-h-screen flex items-center bg-cream overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,24,20,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,24,20,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-0 right-0 w-[60%] h-full opacity-30 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 80% 40%, rgba(240,232,223,0.6) 0%, transparent 70%)"
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-ink/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot" />
              <span className="text-sm font-medium text-muted">{hero.tag}</span>
            </div>
          </FadeUp>

          <h1 className="font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8">
            {allWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className={`inline-block mr-[0.3em] ${
                  hero.accentWord.includes(word) ? "text-accent" : "text-ink"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="text-lg text-muted leading-relaxed max-w-2xl mb-10"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href={hero.cta1.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(hero.cta1.href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink text-cream text-sm font-semibold rounded-full hover:bg-accent transition-colors duration-200"
            >
              {hero.cta1.label}
              <ArrowDown size={16} />
            </a>
            <a
              href={hero.cta2.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(hero.cta2.href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-ink text-ink text-sm font-semibold rounded-full hover:bg-ink hover:text-cream transition-colors duration-200"
            >
              {hero.cta2.label}
              <Send size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-ink/10"
        >
          {hero.stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-3xl sm:text-4xl font-extrabold text-ink mb-1">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  isFloat={stat.isFloat}
                />
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
