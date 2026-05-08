const projects = [
  {
    n: "01",
    title: "DataSentinel — AI Data Quality Pipeline",
    type: "AI · LLM · Data Engineering",
    year: "2025",
    repo: "https://github.com/hitesh-warhate/DataSentinel-AI-LLM-Powered-Data-Quality-Pipeline",
    desc: "AI-powered data quality and ETL pipeline that cleans, validates, and transforms raw data into reliable datasets. Uses LLMs like Groq, Gemini, and OpenAI to detect anomalies. Follows Bronze/Silver architecture for analytics-ready data.",
    tags: ["Python", "LLMs", "Groq", "Gemini", "ETL"],
  },
  {
    n: "02",
    title: "FRA-ATLAS",
    type: "Full-stack · TypeScript",
    year: "2025",
    repo: "https://github.com/hitesh-warhate/FRA-ATLAS",
    desc: "TypeScript-based atlas application exploring spatial data and structured records with a modern web stack.",
    tags: ["TypeScript", "React", "Web"],
  },
  {
    n: "03",
    title: "Face Detection System",
    type: "Computer Vision",
    year: "2024",
    repo: "https://github.com/hitesh-warhate/face-detection-system",
    desc: "Real-time face detection system built with Python and OpenCV — webcam input, frame processing, and live bounding-box overlays.",
    tags: ["Python", "OpenCV", "CV"],
  },
  {
    n: "04",
    title: "Gym Management System",
    type: "Freelance · Desktop App",
    year: "2024",
    repo: null,
    desc: "Full-featured gym management software built in Java with a Swing UI. Handles members, plans, billing records, and day-to-day operations from a single desktop interface.",
    tags: ["Java", "Swing", "OOP", "Desktop"],
  },
  {
    n: "05",
    title: "Coaching Classes Website",
    type: "Freelance · Frontend",
    year: "2024",
    repo: null,
    desc: "Designed and shipped a responsive static website for a coaching classes business. Clean information architecture, fast load times, easy to maintain.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    n: "06",
    title: "Car Rentals",
    type: "Web App",
    year: "2024",
    repo: "https://github.com/hitesh-warhate/Car-rentals",
    desc: "A car rentals web project covering listings, booking flow UI, and a clean, responsive interface.",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    n: "07",
    title: "To-Do List",
    type: "Web · JavaScript",
    year: "2024",
    repo: "https://github.com/hitesh-warhate/TO-DO-LIST",
    desc: "Lightweight task manager built with vanilla JavaScript — add, complete, and persist tasks with a focused UI.",
    tags: ["JavaScript", "DOM", "UI"],
  },
  {
    n: "08",
    title: "Python — Basics to DSA",
    type: "Learning Repo",
    year: "Ongoing",
    repo: "https://github.com/hitesh-warhate/python",
    desc: "Comprehensive Python repository — from language basics to advanced concepts and Data Structures & Algorithms in Python.",
    tags: ["Python", "DSA", "Algorithms"],
  },
  {
    n: "09",
    title: "Some For You",
    type: "Web · SCSS",
    year: "2024",
    repo: "https://github.com/hitesh-warhate/some-for-you",
    desc: "An SCSS-driven web experiment exploring layout, theming, and component styling patterns.",
    tags: ["SCSS", "Sass", "UI"],
  },
  {
    n: "10",
    title: "Portfolio (v1)",
    type: "Personal Site",
    year: "2024",
    repo: "https://github.com/hitesh-warhate/portfolio",
    desc: "An earlier iteration of my personal portfolio — built from scratch with HTML & CSS.",
    tags: ["HTML", "CSS"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="font-mono text-sm text-accent mb-4">// 03 — WORK</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Selected <span className="text-gradient">projects</span>
            </h2>
          </div>
          <a
            href="https://github.com/hitesh-warhate"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            github.com/hitesh-warhate ↗
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.repo ?? "#"}
              target={p.repo ? "_blank" : undefined}
              rel={p.repo ? "noreferrer" : undefined}
              className="glass rounded-xl p-7 group hover:border-primary/40 hover:shadow-elegant transition-all animate-fade-up block"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-2xl font-bold text-gradient opacity-70 group-hover:opacity-100 transition-opacity">
                  {p.n}
                </span>
                <div className="flex items-center gap-3 font-mono text-[11px] text-muted-foreground">
                  <span>{p.year}</span>
                  {p.repo && (
                    <span className="text-accent">repo ↗</span>
                  )}
                </div>
              </div>

              <p className="font-mono text-[11px] text-accent mb-2 tracking-wider uppercase">
                {p.type}
              </p>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-secondary/40 text-foreground/80 border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
