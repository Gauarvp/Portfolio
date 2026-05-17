import { motion } from "framer-motion";
import { story } from "../data/content";
import { FadeUp, staggerContainer, staggerItem } from "../hooks/useScrollAnimation";

export default function Story() {
  return (
    <section id="story" className="bg-ink py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <span className="inline-block text-sm text-accent tracking-wider uppercase font-semibold mb-4">
            {story.label}
          </span>
          <h2 className="font-extrabold text-4xl sm:text-5xl text-cream leading-tight mb-16">
            {story.title.map((line, i) => (
              <span key={i}>
                {line}
                {i < story.title.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-6">
            {story.narrative.map((block, i) => {
              if (block.quote) {
                return (
                  <FadeUp key={i} delay={i * 0.1}>
                    <blockquote className="border-l-4 border-accent pl-6 py-2 my-8">
                      <p className="text-xl italic text-cream/90 leading-relaxed">
                        &ldquo;{block.quote}&rdquo;
                      </p>
                    </blockquote>
                  </FadeUp>
                );
              }
              return (
                <FadeUp key={i} delay={i * 0.1}>
                  <p
                    className={`text-cream/70 leading-relaxed text-lg ${
                      block.bold ? "text-cream font-semibold" : ""
                    }`}
                  >
                    {block.text}
                  </p>
                </FadeUp>
              );
            })}
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-cream/10" />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-10"
            >
              {story.timeline.map((item, i) => (
                <motion.div key={i} variants={staggerItem} className="relative pl-12">
                  <div
                    className={`absolute left-0 top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                      item.active
                        ? "border-accent bg-accent text-cream animate-pulse-dot"
                        : "border-cream/30 bg-ink text-cream/50"
                    }`}
                  >
                    {item.label}
                  </div>
                  <span className="text-xs text-accent tracking-wider font-semibold">
                    {item.year}
                  </span>
                  <h3 className="font-bold text-xl text-cream mt-1">
                    {item.role}
                  </h3>
                  <p className="text-cream/50 text-sm mt-0.5">{item.company}</p>
                  <p className="text-cream/60 text-sm mt-2 leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
