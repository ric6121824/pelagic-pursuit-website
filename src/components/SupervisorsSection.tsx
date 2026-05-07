import { motion } from "framer-motion";

const supervisors = [
  { name: "Prof. Dr. Ralf Bachmayer", title: "Academic Advisor" },
  { name: "Dr. Christian Meurer", title: "Supervisor" },
  { name: "Dr. Daniel Gregorek", title: "Advisor" },
];

const SupervisorsSection = () => {
  return (
    <section id="supervisors" className="relative py-28">
      <div className="absolute inset-0 bg-sonar-grid opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-accent mb-3">
            Academic Leadership
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Our <span className="text-primary">Supervisors</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {supervisors.map((supervisor, i) => (
            <motion.div
              key={supervisor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all duration-500 group"
            >
              {/* Avatar placeholder with initials */}
              <div className="w-14 h-14 rounded-full bg-secondary border border-border flex items-center justify-center mb-4 group-hover:border-primary/50 transition-colors">
                <span className="font-display text-sm font-bold text-accent">
                  {supervisor.name.split(" ")[1].slice(0, 2).toUpperCase()}
                </span>
              </div>

              <h3 className="font-display text-sm font-semibold text-foreground mb-2">
                {supervisor.name}
              </h3>
              <p className="font-heading text-xs font-semibold tracking-wider uppercase text-primary">
                {supervisor.title}
              </p>
              <div className="w-full h-px bg-border mt-3" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupervisorsSection;
