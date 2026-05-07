export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-mono text-sm text-accent mb-4">// 04 — CONTACT</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Let's build something <span className="text-gradient">remarkable</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Open to full-time roles, internships, and freelance projects in AI, LLMs,
          and software development. I respond fast.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a
            href="mailto:hiteswarhate5@gmail.com"
            className="glass rounded-xl p-6 hover:border-primary/50 hover:glow transition-all group"
          >
            <p className="font-mono text-xs text-accent mb-2">EMAIL</p>
            <p className="text-foreground group-hover:text-primary transition-colors break-all">
              hiteswarhate5@gmail.com
            </p>
          </a>
          <a
            href="tel:+91966590652"
            className="glass rounded-xl p-6 hover:border-primary/50 hover:glow transition-all group"
          >
            <p className="font-mono text-xs text-accent mb-2">PHONE</p>
            <p className="text-foreground group-hover:text-primary transition-colors">
              +91 96659 0652
            </p>
          </a>
        </div>
        <div className="mt-20 pt-8 border-t border-border text-sm text-muted-foreground font-mono">
          © 2026 Hitesh Warhate · Built with React + Three.js
        </div>
      </div>
    </section>
  );
};
