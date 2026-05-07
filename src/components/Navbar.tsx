import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Monitor, Apple } from "lucide-react";
import logoPP from "@/assets/logo-pp.png";
import uniBremenLogo from "@/assets/uni-bremen-logo.png";
import marumLogo from "@/assets/marum-logo.png";

// Navigation links shown in the navbar menu
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Team", href: "#team" },
  { label: "Roadmap", href: "#roadmap" },
];

// Navbar: Fixed header at top with navigation and download buttons
// Shows on all pages, stays visible when scrolling
const Navbar = () => {
  // Track if mobile menu is open/closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        {/* Left: Game logo + title */}
        <a href="#" className="flex items-center">
          <img src={logoPP} alt="Pelagic Pursuit" className="h-8 w-auto brightness-0 invert" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          
          {/* Download buttons */}
          <div className="flex items-center gap-3 pl-4 border-l border-border/50">
            <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
              Prototype
            </span>
            <a
              href="https://rektguy.itch.io/pelagic-pursuit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-2 rounded bg-blue-500/15 text-blue-400 hover:bg-blue-500/25 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
            >
              <Monitor size={16} />
              Windows
            </a>
            <a
              href="https://rektguy.itch.io/pelagic-pursuit-mac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-2 rounded bg-gray-500/15 text-gray-300 hover:bg-gray-500/25 border border-gray-500/30 hover:border-gray-500/50 transition-all duration-300"
            >
              <Apple size={16} />
              Mac
            </a>
          </div>

          {/* Institution logos */}
          <div className="flex items-center gap-3 ml-2 pl-4 border-l border-border/50">
            <img src={uniBremenLogo} alt="Universität Bremen" className="h-7 w-auto" />
            <img src={marumLogo} alt="MARUM" className="h-5 w-auto brightness-0 invert" />
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-heading text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              
              {/* Download buttons for mobile */}
              <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
                <div className="inline-block w-fit">
                  <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    Prototype
                  </span>
                </div>
                <a
                  href="https://rektguy.itch.io/pelagic-pursuit"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-2 rounded bg-blue-500/15 text-blue-400 hover:bg-blue-500/25 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <Monitor size={16} />
                  Windows Download
                </a>
                <a
                  href="https://rektguy.itch.io/pelagic-pursuit-mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-2 rounded bg-gray-500/15 text-gray-300 hover:bg-gray-500/25 border border-gray-500/30 hover:border-gray-500/50 transition-all duration-300"
                >
                  <Apple size={16} />
                  Mac Download
                </a>
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <img src={uniBremenLogo} alt="Universität Bremen" className="h-6 w-auto" />
                <img src={marumLogo} alt="MARUM" className="h-4 w-auto brightness-0 invert" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
