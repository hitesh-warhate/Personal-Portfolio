const groups = [
  {
    title: "AI / ML",
    items: ["Agentic AI", "LLM Development", "Prompt Engineering", "Machine Learning", "Model Integration"],
  },
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend & UI",
    items: ["HTML / CSS", "JavaScript", "Responsive Design", "Java Swing"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git & GitHub", "REST APIs", "VS Code", "Linux", "Debugging"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-accent mb-4">// 02 — STACK</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          Tools I build with
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className="glass rounded-xl p-6 hover:border-primary/40 hover:translate-y-[-4px] transition-all animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                  {g.title}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="text-sm text-foreground/85 flex items-center gap-2"
                  >
                    <span className="text-primary font-mono text-xs">›</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
