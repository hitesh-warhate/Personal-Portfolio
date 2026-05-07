import { Scene3D } from "./Scene3D";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          <p className="font-mono text-sm text-accent mb-3 tracking-widest">
            $ whoami
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
            Hitesh <span className="text-gradient">Warhate</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-foreground/80 mb-6 font-light">
            Software Developer · AI Engineer
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
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:glow transition-all shadow-elegant"
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg glass text-foreground font-medium hover:border-primary/50 transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-xs font-mono text-muted-foreground">
            <span>📍 India</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>Open to Remote</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>Full-time / Freelance</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 font-mono text-xs text-muted-foreground animate-float">
        scroll ↓
      </div>
    </section>
  );
};
