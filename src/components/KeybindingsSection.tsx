import { motion } from "framer-motion";
import { Keyboard } from "lucide-react";

const keybindings = [
  {
    keys: "W / S",
    action: "Forward / Backward",
  },
  {
    keys: "A / D",
    action: "Turn Left / Right",
  },
  {
    keys: "Q / E",
    action: "Downward / Upward",
  },
  {
    keys: "Tab",
    action: "Switch ROV / Manipulator Mode",
  },
  {
    keys: "1, 2, 3, 4",
    action: "Camera Switch (if available)",
  },
];

const KeybindingsSection = () => {
  return (
    <section id="keybindings" className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-accent mb-3">
            Controls
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
            <Keyboard className="w-8 h-8 text-primary" />
            <span>
              Control <span className="text-primary">Your Vessel</span>
            </span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            {keybindings.map((binding, i) => (
              <motion.div
                key={binding.keys}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center justify-between p-6 ${
                  i !== keybindings.length - 1 ? "border-b border-border" : ""
                } hover:bg-muted/50 transition-colors duration-300`}
              >
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-md">
                    <kbd className="font-mono font-bold text-primary text-sm sm:text-base">
                      {binding.keys}
                    </kbd>
                  </div>
                  <span className="text-muted-foreground text-sm sm:text-base">
                    {binding.action}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 p-6 bg-muted/30 border border-border rounded-lg text-center"
          >
            <p className="text-muted-foreground text-sm sm:text-base">
              <span className="font-semibold text-foreground">Note:</span> There is no pause menu or in-game quit option — stay immersed in your deep-sea exploration!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KeybindingsSection;
