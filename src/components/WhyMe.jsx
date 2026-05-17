import { motion } from "framer-motion";
import { whyMe } from "../data/content";
import { FadeUp, staggerContainer, staggerItem } from "../hooks/useScrollAnimation";

export default function WhyMe() {
  return (
    <section id="whyme" className="bg-ink py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <span className="inline-block text-sm text-accent tracking-wider uppercase font-semibold mb-4">
              {whyMe.label}
            </span>
            <h2 className="font-extrabold text-4xl sm:text-5xl text-cream leading-tight">
              {whyMe.title.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < whyMe.title.length - 1 && <br />}
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
          className="grid md:grid-cols-3 gap-6"
        >
          {whyMe.items.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -6, borderColor: "rgba(196,98,45,0.3)" }}
              transition={{ duration: 0.25 }}
              className="relative group rounded-2xl border border-cream/10 p-8 overflow-hidden"
            >
              <span className="absolute -top-4 -left-2 font-extrabold text-[8rem] leading-none text-cream/[0.04] pointer-events-none select-none">
                {item.num}
              </span>

              <div className="relative z-10">
                <span className="text-accent text-sm font-bold">
                  {item.num}
                </span>
                <h3 className="font-bold text-xl text-cream mt-3 mb-4">
                  {item.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
