export const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-accent mb-4">// 01 — ABOUT</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          Developer focused on <span className="text-gradient">shipping reliable software</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm a developer who treats code like a craft. My core domain is{" "}
              <span className="text-foreground">Artificial Intelligence</span> —
              specifically <span className="text-primary">Agentic AI</span> and
              building systems on top of <span className="text-primary">LLMs</span>{" "}
              that can reason, plan, and act.
            </p>
            <p>
              Alongside AI, I work across the stack — frontend, desktop, and
              backend logic — and I've already delivered freelance projects to
              real clients. I care about clean architecture, readable code, and
              solving the actual problem.
            </p>
            <p className="text-foreground/80 font-mono text-sm pt-2">
              "Build it well, document it clearly, ship it on time."
            </p>
          </div>

          <div className="md:col-span-2 space-y-3">
            {[
              { k: "Role", v: "Software / AI Developer" },
              { k: "Focus", v: "Agentic AI · LLMs" },
              { k: "Stack", v: "Python · Java · JS" },
              { k: "Status", v: "Open to work" },
            ].map((item) => (
              <div
                key={item.k}
                className="glass rounded-lg p-4 flex items-center justify-between hover:border-primary/40 transition-all"
              >
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {item.k}
                </span>
                <span className="text-sm text-foreground font-medium">{item.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
