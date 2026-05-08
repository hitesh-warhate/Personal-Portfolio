export const Navbar = () => {
  const links = [
    { href: "#about", label: "about", n: "01" },
    { href: "#skills", label: "stack", n: "02" },
    { href: "#projects", label: "work", n: "03" },
    { href: "#contact", label: "contact", n: "04" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <a href="#hero" className="font-mono text-sm tracking-wider font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-gradient">hitesh.warhate</span>
          <span className="text-muted-foreground">~/dev</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm font-mono">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-muted-foreground hover:text-primary transition-colors">
                <span className="text-accent/60 mr-1.5">{l.n}.</span>{l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/hitesh-warhate"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            github ↗
          </a>
          <a
            href="mailto:hiteswarhate5@gmail.com"
            className="font-mono px-4 py-2 rounded-md bg-primary/10 border border-primary/30 text-primary text-xs hover:bg-primary/20 transition-all hover:glow"
          >
            $ hire --me
          </a>
        </div>
      </div>
    </nav>
  );
};
