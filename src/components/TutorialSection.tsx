import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const TutorialSection = () => {
  return (
    <section id="tutorial" className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-accent mb-3">
            Getting Started
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
            <PlayCircle className="w-8 h-8 text-primary" />
            <span>
              Game <span className="text-primary">Walkthrough</span>
            </span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto mt-6">
            Quick walkthrough of game mechanics and exploration
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative w-full rounded-lg overflow-hidden border border-border shadow-2xl group">
            {/* Video Container */}
            <div className="relative w-full bg-black">
              <video
                controls
                className="w-full h-auto"
                poster="/Pelagic Pursuit Gameplay compressed.mp4"
              >
                <source
                  src="/Pelagic Pursuit Gameplay compressed.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Overlay effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
          </div>

          {/* Description Below Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 p-6 bg-card border border-border rounded-lg"
          >
            <p className="text-muted-foreground text-center">
              Watch this gameplay walkthrough to see the controls in action and learn how to explore the Lucky Strike Hydrothermal Field. Get a feel for piloting your ROV, manipulating your environment, and discovering the wonders of the deep sea.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TutorialSection;
