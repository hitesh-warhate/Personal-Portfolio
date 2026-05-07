export const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-accent mb-4">// 01 — ABOUT</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Engineer focused on <span className="text-gradient">trust & impact</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-muted-foreground text-lg leading-relaxed">
          <p>
            I'm a fresh graduate stepping into the industry with a sharp focus on
            <span className="text-foreground"> Artificial Intelligence</span> —
            specifically <span className="text-primary">Agentic AI</span> and
            developing <span className="text-primary">LLM-powered systems</span>.
          </p>
          <p>
            Beyond academics, I've delivered real freelance projects — from
            classroom websites to full desktop software. I value clean code,
            honest communication, and shipping work that clients can rely on.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "2+", v: "Freelance Projects" },
            { k: "AI/ML", v: "Core Domain" },
            { k: "LLMs", v: "Specialty" },
            { k: "100%", v: "Client Focus" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-xl p-6 text-center hover:glow transition-all">
              <div className="text-3xl font-bold text-gradient">{s.k}</div>
              <div className="text-xs text-muted-foreground mt-2 font-mono">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
