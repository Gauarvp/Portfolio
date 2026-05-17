import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { projects } from "../data/content";
import { FadeUp, staggerContainer, staggerItem } from "../hooks/useScrollAnimation";
import { IconDashboard, IconBot, IconSmartphone } from "./Icons";

const projectIconMap = {
  dashboard: IconDashboard,
  bot: IconBot,
  smartphone: IconSmartphone,
};

export default function Projects() {
  return (
    <section id="projects" className="bg-section-alt py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <FadeUp>
          <span className="inline-block text-sm text-accent tracking-wider uppercase font-semibold mb-4">
            {projects.label}
          </span>
          <h2 className="font-extrabold text-4xl sm:text-5xl text-ink leading-tight mb-4">
            {projects.title.map((line, i) => (
              <span key={i}>
                {line}
                {i < projects.title.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="text-muted text-lg mb-14 max-w-2xl">{projects.desc}</p>
        </FadeUp>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-10"
        >
          {projects.items.map((project) => {
            const Icon = projectIconMap[project.icon];
            return (
              <motion.div
                key={project.id}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl border border-ink/[0.06] overflow-hidden"
              >
                <div className="p-7 sm:p-9">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      project.accent === "accent"
                        ? "bg-accent-light text-accent"
                        : "bg-accent2-light text-accent2"
                    }`}>
                      {Icon && <Icon size={20} />}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.accent === "accent"
                          ? "bg-accent-light text-accent"
                          : "bg-accent2-light text-accent2"
                      }`}
                    >
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-2xl sm:text-3xl text-ink mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted text-lg italic mb-8">{project.tagline}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-ink text-sm uppercase tracking-wider mb-2">
                        Problem
                      </h4>
                      <p className="text-muted text-sm leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink text-sm uppercase tracking-wider mb-2">
                        Solution
                      </h4>
                      <p className="text-muted text-sm leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`rounded-xl p-5 mb-8 border-l-4 ${
                      project.accent === "accent"
                        ? "bg-accent-light/50 border-accent"
                        : "bg-accent2-light/50 border-accent2"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb size={16} className={project.accent === "accent" ? "text-accent" : "text-accent2"} />
                      <span className="text-sm font-bold uppercase tracking-wider text-ink">
                        PM Angle
                      </span>
                    </div>
                    <p className="text-sm text-ink/80 leading-relaxed">
                      {project.pmAngle}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-ink text-sm uppercase tracking-wider mb-3">
                      Key Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-accent font-bold mt-0.5">&rarr;</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-section-alt rounded-xl p-5 mb-6">
                    <p className="text-sm text-ink font-medium mb-4">{project.impact}</p>
                    <div className="grid grid-cols-3 gap-4">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="font-extrabold text-xl text-ink">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted mt-1">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
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
          })}
        </motion.div>
      </div>
    </section>
  );
}
