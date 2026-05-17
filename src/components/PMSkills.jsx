import { motion } from "framer-motion";
import { skills } from "../data/content";
import { FadeUp, staggerContainer, staggerItem } from "../hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import {
  IconBarChart,
  IconMap,
  IconUsers,
  IconUser,
  IconCode,
  IconFileText,
} from "./Icons";

const iconMap = {
  barChart: IconBarChart,
  map: IconMap,
  users: IconUsers,
  user: IconUser,
  code: IconCode,
  fileText: IconFileText,
};

export default function PMSkills() {
  return (
    <section id="skills" className="bg-section-alt py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <FadeUp>
            <span className="inline-block text-sm text-accent tracking-wider uppercase font-semibold mb-4">
              {skills.label}
            </span>
            <h2 className="font-extrabold text-4xl sm:text-5xl text-ink leading-tight">
              {skills.title.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < skills.title.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-muted text-lg max-w-md leading-relaxed">
              {skills.desc}
            </p>
          </FadeUp>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.items.map((skill, i) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.25 }}
                className="group relative bg-white rounded-2xl p-7 border border-ink/[0.06] overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center text-accent mb-4">
                  {Icon && <Icon size={20} />}
                </div>
                <h3 className="font-bold text-xl text-ink mb-3">
                  {skill.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  {skill.desc}
                </p>
                <div className="flex items-start gap-2 pt-4 border-t border-ink/[0.06]">
                  <ArrowRight size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-ink font-medium leading-snug">
                    {skill.evidence}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
