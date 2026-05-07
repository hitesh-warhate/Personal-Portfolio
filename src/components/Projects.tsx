const projects = [
  {
    n: "01",
    title: "Coaching Classes Website",
    type: "Freelance · Frontend",
    year: "2024",
    desc: "Designed and developed a responsive static frontend website for a coaching classes business. Clean information architecture, fast load times, and a layout the client could maintain easily.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
  },
  {
    n: "02",
    title: "Gym Management System",
    type: "Freelance · Desktop App",
    year: "2024",
    desc: "Full-featured gym management software built in Java with a Swing UI. Handles members, plans, billing records, and day-to-day operations from a single desktop interface.",
    tags: ["Java", "Swing", "OOP", "Desktop"],
  },
  {
    n: "03",
    title: "Agentic AI Systems",
    type: "Domain Work · LLM Engineering",
    year: "Ongoing",
    desc: "Building autonomous LLM-powered agents that reason, plan, and execute multi-step tasks. Exploring tool-use, memory, and reliable orchestration of language models for real workflows.",
    tags: ["LLMs", "Agents", "Python", "AI"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-accent mb-4">// 03 — WORK</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          Selected <span className="text-gradient">projects</span>
        </h2>

        <div className="space-y-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="glass rounded-2xl p-8 group hover:border-primary/40 hover:shadow-elegant transition-all animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="md:w-32 flex md:flex-col items-baseline md:items-start gap-3">
                  <span className="font-mono text-3xl font-bold text-gradient opacity-60 group-hover:opacity-100 transition-opacity">
                    {p.n}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                </div>

                <div className="flex-1">
                  <p className="font-mono text-xs text-accent mb-2 tracking-wider">
                    {p.type}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed max-w-3xl">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-secondary/40 text-foreground/80 border border-border"
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
