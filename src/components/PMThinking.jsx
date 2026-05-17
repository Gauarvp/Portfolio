import { motion } from "framer-motion";
import { pmThinking } from "../data/content";
import { FadeUp, staggerContainer, staggerItem } from "../hooks/useScrollAnimation";

export default function PMThinking() {
  return (
    <section id="thinking" className="bg-section-alt py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <span className="inline-block text-sm text-accent tracking-wider uppercase font-semibold mb-4">
              {pmThinking.label}
            </span>
            <h2 className="font-extrabold text-4xl sm:text-5xl text-ink leading-tight">
              {pmThinking.title.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < pmThinking.title.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </div>
        </FadeUp>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {pmThinking.cards.map((card, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl overflow-hidden border border-ink/[0.06]"
            >
              <div className="bg-ink p-7">
                <h3 className="font-bold text-xl text-cream mb-1">
                  {card.header}
                </h3>
                <p className="text-cream/50 text-sm">{card.sub}</p>
              </div>
              <div className="bg-white p-7">
                <ul className="space-y-4 mb-6">
                  {card.content.map((line, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: line }}
                    />
                  ))}
                </ul>
                <div className="border-l-4 border-accent bg-accent-light/40 rounded-r-lg p-4">
                  <p className="text-sm text-ink/80 leading-relaxed whitespace-pre-line font-medium">
                    {card.box}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
