import { motion } from "framer-motion";
import rovImage from "@/assets/rov-exploration.jpg";
import auvImage from "@/assets/auv-scanning.png";

const features = [
  {
    image: rovImage,
    alt: "ROV exploring deep ocean",
    badge: "ROV",
    title: "Remotely Operated Vehicle",
    description:
      "Piloted directly by the player, the ROV is equipped with high-definition cameras, sonar navigation, environmental sensors and robotic manipulator arms — allowing you to closely inspect hydrothermal vents, observe deep-sea organisms and collect samples.",
    details: ["HD Cameras", "Sonar Navigation", "Manipulator Arms", "Sample Collection"],
  },
  {
    image: auvImage,
    alt: "AUV scanning seafloor",
    badge: "AUV",
    title: "Autonomous Underwater Vehicle",
    description:
      "The AUV follows pre-programmed paths while scanning the seafloor. It conducts survey missions, maps terrain and identifies anomalies such as unusual heat signatures or geological structures.",
    details: ["Autonomous Scanning", "Terrain Mapping", "Anomaly Detection", "Data Collection"],
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-accent mb-3">
            Core Mechanics
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Pilot Advanced <span className="text-primary">Underwater Robots</span>
          </h2>
        </motion.div>

        <div className="space-y-24 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center`}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative group">
                <div className="overflow-hidden rounded-lg border border-border">
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="absolute top-4 left-4 font-display text-xs font-bold tracking-widest px-3 py-1 bg-accent text-accent-foreground rounded">
                  {feature.badge}
                </span>
              </div>

              {/* Text */}
              <div className="lg:w-1/2">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {feature.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-center gap-2 text-sm font-heading text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional features grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {[
            { title: "Mission-Based", desc: "Progressive missions revealing ocean secrets" },
            { title: "Deep-Sea Life", desc: "Encounter vent shrimp, mussels and microbial mats" },
            { title: "Environmental Signals", desc: "Track unusual temperature and chemical readings" },
            { title: "Immersive Atmosphere", desc: "Dark, quiet and mysterious ocean experience" },
          ].map((item, i) => (
            <div
              key={item.title}
              className="bg-secondary border border-border rounded-lg p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-8 h-0.5 bg-accent mb-4" />
              <h4 className="font-display text-sm font-semibold text-foreground mb-2">
                {item.title}
              </h4>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
