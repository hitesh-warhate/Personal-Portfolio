import { Scene3D } from "./Scene3D";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-10 pointer-events-none" />
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl animate-fade-up">
          <p className="font-mono text-sm text-accent mb-4 tracking-widest">
            // AI ENGINEER · FRESH GRADUATE
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hitesh <span className="text-gradient">Warhate</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Building intelligent systems with{" "}
            <span className="text-primary">Agentic AI</span> &{" "}
            <span className="text-accent">LLMs</span>. Crafting reliable software
            that turns ideas into working products.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:glow transition-all"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg glass text-foreground font-medium hover:border-primary/50 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 font-mono text-xs text-muted-foreground animate-float">
        scroll ↓
      </div>
    </section>
  );
};
