// ============================================================================
// MAIN PAGE LAYOUT
// ============================================================================
// This file controls what sections appear on the homepage and in what order
// To rearrange sections: just move the imports around
// To hide a section: delete it from the return statement

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import KeybindingsSection from "@/components/KeybindingsSection";
import TutorialSection from "@/components/TutorialSection";
import FeaturesSection from "@/components/FeaturesSection";
import TeamSection from "@/components/TeamSection";
import SupervisorsSection from "@/components/SupervisorsSection";
import RoadmapSection from "@/components/RoadmapSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

// Main page component - just stacks all sections vertically
const Index = () => {
  return (
    <div className="gradient-ocean-depth min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <KeybindingsSection />
      <TutorialSection />
      <FeaturesSection />
      <TeamSection />
      <SupervisorsSection />
      <RoadmapSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
