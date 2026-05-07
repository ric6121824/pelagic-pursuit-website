import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { PDFViewer } from "./PDFViewer";

const ResourcesSection = () => {

  return (
    <section id="resources" className="relative py-28">
      <div className="absolute inset-0 bg-sonar-grid opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-accent mb-3">
            Project Materials
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Download <span className="text-primary">Resources</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-all duration-500"
          >
            <div className="flex flex-col items-center text-center mb-8">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-secondary border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors">
                <FileText className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-foreground">
                Project Poster
              </h3>
            </div>

            {/* PDF Viewer */}
            <PDFViewer pdfUrl="/PelagicPursuitProjectPoster.pdf" fileName="PelagicPursuitProjectPoster.pdf" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
