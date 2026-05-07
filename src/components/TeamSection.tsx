import { motion } from "framer-motion";

// Team roster - Update this to add/change team members
// Each team member object has: name, nick (short name), role (job title), focus (main tasks)
const team = [
  { name: "Ping-Chung Tsai", nick: "Ping", role: "Project Lead & Tech Designer", focus: "Project Management, Art Direction, Core Game Loop, Mission Planning, UI Implementation, 3D Modeling" },
  { name: "Jacob Wolyniec", nick: "Jacob", role: "Lead Programmer", focus: "Core Architecture, Code Reviews, Scene Management, ROV/Manipulator Physics, System Foundation, Tech Mentorship" },
  { name: "Dominik Veverka", nick: "Dominik", role: "Systems Programmer", focus: "ROV Builder Mechanics, Save/Load Architecture, SFX Implementation" },
  { name: "Otavio Peixoto Furtado", nick: "Otavio", role: "Technical Artist / Tools", focus: "Geographic Data to Terrain Pipeline, Editor Tools, Multibeam Scanner Logic, Smoke Physics, Map Optimization" },
  { name: "Tushar Rajesh Chanchlani", nick: "Tushar", role: "Lead Level & Quest Designer", focus: "Quest Design, POI Mapping, Level Decoration, Audio/SFX Sourcing" },
  { name: "Sri Roopesh Grandhi", nick: "Roopesh", role: "Dev Generalist & Web", focus: "3D Asset Sourcing, Website/Poster Design, Level Design & Decoration Support, 3D Modeling Support" },
  { name: "Venkata Sai Teja Kukkala", nick: "Teja", role: "Concept & UI Artist", focus: "UI Concept Art, Web/Poster Aesthetics Support" },
];

const TeamSection = () => {
  return (
    <section id="team" className="relative py-28">
      <div className="absolute inset-0 bg-sonar-grid opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-accent mb-3">
            The Crew
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Meet Our <span className="text-primary">Team</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.nick}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all duration-500 group"
            >
              {/* Avatar placeholder with initials */}
              <div className="w-14 h-14 rounded-full bg-secondary border border-border flex items-center justify-center mb-4 group-hover:border-primary/50 transition-colors">
                <span className="font-display text-sm font-bold text-accent">
                  {member.nick.slice(0, 2).toUpperCase()}
                </span>
              </div>

              <h3 className="font-display text-sm font-semibold text-foreground mb-0.5">
                {member.nick}
              </h3>
              <p className="font-body text-xs text-muted-foreground mb-1">
                {member.name}
              </p>
              <p className="font-heading text-xs font-semibold tracking-wider uppercase text-primary mb-3">
                {member.role}
              </p>
              <div className="w-full h-px bg-border mb-3" />
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                {member.focus}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
