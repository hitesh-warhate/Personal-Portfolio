import { Scene3D } from "./Scene3D";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      {/* grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "var(--color-primary)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground">
              status: available for opportunities
            </span>
          </div>

          <p className="font-mono text-sm text-accent mb-3 tracking-widest">
            $ whoami
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
            Hitesh <span className="text-gradient">Warhate</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-foreground/80 mb-6 font-light font-mono">
            <span className="text-accent">{"<"}</span>
            Software Developer / AI Engineer
            <span className="text-accent">{" />"}</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
            I design and build software — from production-ready web apps to
            autonomous <span className="text-primary">Agentic AI</span> systems
            powered by modern <span className="text-accent">LLMs</span>. Clean
            code. Real outcomes.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:glow transition-all shadow-elegant font-mono text-sm"
            >
              ./view-projects.sh
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md glass text-foreground font-medium hover:border-primary/50 transition-all font-mono text-sm"
            >
              cat contact.md
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs font-mono text-muted-foreground">
            <span>📍 India</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>Open to Remote</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>Full-time / Freelance</span>
          </div>
        </div>

        {/* Code window */}
        <div className="lg:col-span-2 animate-fade-up hidden lg:block" style={{ animationDelay: "200ms" }}>
          <div className="glass rounded-xl overflow-hidden shadow-elegant border-primary/20">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/50 bg-secondary/30">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-destructive/70" />
                <span className="w-3 h-3 rounded-full bg-accent/70" />
                <span className="w-3 h-3 rounded-full bg-primary/70" />
              </div>
              <span className="font-mono text-[11px] text-muted-foreground">
                hitesh.profile.ts
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">
                ●
              </span>
            </div>
            <pre className="font-mono text-[12.5px] leading-relaxed p-5 text-foreground/90 overflow-x-auto">
{`const dev = {
  name: `}<span className="text-accent">'Hitesh Warhate'</span>{`,
  role: `}<span className="text-accent">'AI Engineer'</span>{`,
  focus: [
    `}<span className="text-accent">'Agentic AI'</span>{`,
    `}<span className="text-accent">'LLM Systems'</span>{`,
    `}<span className="text-accent">'Full-stack Web'</span>{`,
  ],
  stack: [`}<span className="text-primary">'Python'</span>{`, `}<span className="text-primary">'TS'</span>{`, `}<span className="text-primary">'Java'</span>{`],
  shipping: `}<span className="text-primary">true</span>{`,
};

`}<span className="text-muted-foreground">{`// > ready to collaborate ✦`}</span>
            </pre>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 font-mono text-xs text-muted-foreground animate-float">
        scroll ↓
      </div>
    </section>
  );
};
