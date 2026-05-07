import { motion } from "framer-motion";
import { Compass, FlaskConical, Globe } from "lucide-react";

// Project goals - displayed as cards with icons
const goals = [
  {
    icon: Compass,
    title: "Exploring the Unknown",
    description:
      "Explore the Lucky Strike Hydrothermal Field in the Mid-Atlantic Ridge — a real underwater volcanic region where extreme heat, pressure and darkness create unique ecosystems.",
  },
  {
    icon: FlaskConical,
    title: "Inspire Curiosity",
    description:
      "By allowing players to pilot underwater robotic vehicles and investigate real ocean environments, the game sparks curiosity about ocean science, marine ecosystems and exploration technologies.",
  },
  {
    icon: Globe,
    title: "Hidden Connections",
    description:
      "Through exploration and discovery, players uncover how ecosystems adapt to extreme conditions and how even remote environments can be influenced by global environmental changes.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-sonar-grid opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-accent mb-3">
            Project Goals
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Journey Into the <span className="text-primary">Deep</span>
          </h2>
          <h3 className="font-display text-xl font-semibold text-primary mb-6">
            The Lucky Strike Hydrothermal Field
          </h3>
          <p className="font-body text-muted-foreground max-w-3xl mx-auto mb-4">
            Venture into the Lucky Strike Hydrothermal Field, a dynamic volcanic region along the Mid-Atlantic Ridge. This extraordinary environment, rarely witnessed by humans, is home to hydrothermal vents, towering mineral chimneys, and thriving ecosystems adapted to extreme conditions.
          </p>
          <p className="font-body text-muted-foreground max-w-3xl mx-auto mb-6">
            The seafloor landscape is sculpted by intense geological forces:
          </p>
          <ul className="max-w-2xl mx-auto space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-3 flex-shrink-0">•</span>
              <span className="text-sm">Towering vent chimneys formed by mineral deposits</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 flex-shrink-0">•</span>
              <span className="text-sm">Lava flows and volcanic rock formations</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 flex-shrink-0">•</span>
              <span className="text-sm">Cracks in the seafloor releasing hot vent fluids</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 flex-shrink-0">•</span>
              <span className="text-sm">Fields of mineral-rich sediments and unusual rock formations</span>
            </li>
          </ul>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {goals.map((goal, i) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-all duration-500 group"
            >
              <goal.icon className="w-8 h-8 text-primary mb-5 transition-colors duration-300" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {goal.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {goal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
