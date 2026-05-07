import { motion } from "framer-motion";
import heroImage from "@/assets/new-hero-image.jpg";
import logoImage from "@/assets/logo-pp.png";

// Hero Section: The big intro part users see first
// Contains: background image, logo, main message, and call-to-action buttons
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Deep ocean hydrothermal vents"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      </div>

      {/* Sonar grid overlay */}
      <div className="absolute inset-0 bg-sonar-grid opacity-30" />

      {/* Sonar ping animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-64 h-64 rounded-full border border-primary/20 animate-sonar-ping" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-heading text-sm tracking-[0.4em] uppercase text-accent mb-6"
        >
          University of Bremen — Master Project
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6 flex justify-center"
        >
          <img
            src={logoImage}
            alt="Pelagic Pursuit Logo"
            className="w-64 sm:w-96 lg:w-[28rem] h-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Descend into the mysterious depths of the Atlantic Ocean. Pilot advanced underwater robots, 
          explore hydrothermal vents and uncover hidden ecosystems in a thrilling mission to reveal 
          the secrets of the deep sea.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#features"
            className="font-heading font-semibold text-sm tracking-widest uppercase px-8 py-3 bg-primary text-primary-foreground rounded border border-primary hover:bg-primary/90 transition-all duration-300 border-glow-cyan"
          >
            Explore Features
          </a>
          <a
            href="#about"
            className="font-heading font-semibold text-sm tracking-widest uppercase px-8 py-3 border border-border text-foreground rounded hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-primary/40 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
