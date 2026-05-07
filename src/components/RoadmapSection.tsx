import { motion } from "framer-motion";

const milestones = [
  { date: "Jan 2026", title: "Milestone 1", desc: "Core systems foundation, ROV builder prototype, initial narrative", done: true, isCurrent: false },
  { date: "Feb 2026", title: "Milestone 2", desc: "All systems integration, sonar visualization, 3D modeling", done: true, isCurrent: false },
  { date: "Mar 2026", title: "Development", desc: "Progression system, assets implementation, UI concept arts", done: true, isCurrent: false },
  { date: "Apr 2026", title: "Final Presentation", desc: "QA & polishment, fair presentation, website & report", done: true, isCurrent: true },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="relative py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-accent mb-3">
            Timeline
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Project <span className="text-primary">Roadmap</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {milestones.map((ms, i) => (
            <motion.div
              key={ms.date}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot with pulse for current milestone */}
              <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10 mt-1.5 ${ms.isCurrent ? "animate-pulse" : ""}`}>
                {ms.isCurrent && (
                  <div className="absolute inset-0 w-4 h-4 rounded-full border-2 animate-ping" style={{ borderColor: 'hsl(var(--glow-orange) / 0.5)', top: '-0.5px', left: '-0.5px' }} />
                )}
                <div className="w-3 h-3 rounded-full border-2 bg-background" style={{ borderColor: ms.isCurrent ? 'hsl(var(--glow-orange))' : 'hsl(var(--primary))' }}>
                  {ms.done && <div className="w-full h-full rounded-full scale-75" style={{ backgroundColor: ms.isCurrent ? 'hsl(var(--glow-orange))' : 'hsl(var(--accent))' }} />}
                </div>
              </div>

              {/* Card */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}
              >
                <span className="font-heading text-xs tracking-widest uppercase text-accent">
                  {ms.date}
                </span>
                <h3 className="font-display text-base font-bold text-foreground mt-1">
                  {ms.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  {ms.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
