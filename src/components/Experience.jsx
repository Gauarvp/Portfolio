import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experience } from "../data/content";
import { FadeUp, staggerContainer, staggerItem } from "../hooks/useScrollAnimation";

function ExperienceCard({ item }) {
  const [expanded, setExpanded] = useState(false);
  const visibleBullets = expanded ? item.bullets : item.bullets.slice(0, 2);

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-2xl border border-ink/[0.06] overflow-hidden"
    >
      <div className="p-7 sm:p-9">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <span className="text-xs tracking-wider uppercase text-accent font-semibold">
              {item.company}
            </span>
            <h3 className="font-bold text-2xl text-ink mt-1">
              {item.role}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted">{item.period}</span>
            {item.badge && (
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  item.badgeStyle === "accent"
                    ? "bg-accent-light text-accent"
                    : "bg-accent2-light text-accent2"
                }`}
              >
                {item.badge}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-section-alt rounded-xl p-5 mb-6">
          {item.metrics.map((metric, i) => (
            <div key={i} className="text-center">
              <div className="font-extrabold text-2xl text-ink">
                {metric.value}
              </div>
              <div className="text-xs text-muted mt-1">{metric.label}</div>
            </div>
          ))}
        </div>

        <ul className="space-y-3 mb-6">
          {visibleBullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
              <span className="text-accent font-bold mt-0.5 flex-shrink-0">&rarr;</span>
              <span dangerouslySetInnerHTML={{ __html: bullet }} />
            </li>
          ))}
        </ul>

        {item.bullets.length > 2 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors md:hidden"
          >
            {expanded ? "Show less" : "Show more"}
            <ChevronDown
              size={14}
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        )}

        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-ink/[0.06]">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs font-medium bg-accent2-light text-accent2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-cream py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <FadeUp>
          <span className="inline-block text-sm text-accent tracking-wider uppercase font-semibold mb-4">
            {experience.label}
          </span>
          <h2 className="font-extrabold text-4xl sm:text-5xl text-ink leading-tight mb-4">
            {experience.title.map((line, i) => (
              <span key={i}>
                {line}
                {i < experience.title.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="text-muted text-lg mb-14">{experience.desc}</p>
        </FadeUp>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-8"
        >
          {experience.items.map((item, i) => (
            <ExperienceCard key={i} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
