const projects = [
  {
    n: "01",
    title: "Classes Frontend Website",
    type: "Freelance · Static Site",
    desc: "Designed and built a static frontend website for a coaching classes business — clean, responsive, and ready for the client to launch.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
  },
  {
    n: "02",
    title: "Gym Management System",
    type: "Freelance · Desktop App",
    desc: "End-to-end gym management software with a Java Swing UI — handling members, plans, and records from a single interface.",
    tags: ["Java", "Swing", "Desktop", "CRUD"],
  },
  {
    n: "03",
    title: "Agentic AI Experiments",
    type: "Domain Focus · LLM Systems",
    desc: "Ongoing work in agentic AI — building autonomous LLM-driven agents that reason, plan, and execute multi-step tasks reliably.",
    tags: ["LLM", "Agents", "Python", "AI"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-accent mb-4">// 03 — PROJECTS</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Selected <span className="text-gradient">work</span>
        </h2>
        <div className="space-y-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="glass rounded-2xl p-8 group hover:border-primary/40 hover:shadow-elegant transition-all animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="font-mono text-5xl font-bold text-gradient opacity-50 group-hover:opacity-100 transition-opacity">
                  {p.n}
                </div>
                <div className="flex-1">
                  <p className="font-mono text-xs text-accent mb-2">{p.type}</p>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-secondary/50 text-foreground/80 border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
