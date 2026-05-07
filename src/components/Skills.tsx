const skills = [
  { name: "Agentic AI", level: "Advanced", desc: "Multi-agent systems & autonomous workflows" },
  { name: "LLM Development", level: "Advanced", desc: "Building, fine-tuning & integrating language models" },
  { name: "Python", level: "Advanced", desc: "Core language for AI/ML pipelines" },
  { name: "Java / Swing", level: "Proficient", desc: "Desktop application development" },
  { name: "Frontend (HTML/CSS/JS)", level: "Proficient", desc: "Static & dynamic web interfaces" },
  { name: "Machine Learning", level: "Proficient", desc: "Models, training & evaluation" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-accent mb-4">// 02 — SKILLS</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Tech I work with
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="glass rounded-xl p-6 hover:border-primary/50 hover:translate-y-[-4px] transition-all animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">{s.name}</h3>
                <span className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                  {s.level}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
