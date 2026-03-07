const sections = {
  education: [
    {
      title: "Bachelor of Commerce · Economics",
      place: "The University of Melbourne",
      time: "Feb 2024 – Dec 2025",
      details: [
        "Major in Economics",
        "Overall GPA: 85.3 / 100 (First Class Honours)",
        "Coursework: Econometrics, Microeconomics, Macroeconomics"
      ]
    },
    {
      title: "Honours in Economics",
      place: "The University of Melbourne",
      time: "Feb 2026 – Present",
      details: [
        "Coursework: Econometrics, Advanced Microeconomics, Advanced Macroeconomics",
        "Research Project: White-Collar Resilience under GenAI exposure: A Heterogeneous Analysis of Subjective Displacement Risk"
      ]
    }
  ],
  experience: [
    {
      title: "Management Consulting Intern",
      place: "Australia–UK Chamber of Commerce · London, United Kingdom",
      time: "Nov 2024 – Dec 2024",
      bullets: [
        "Designed the 2024 Chamber survey for current and past members (36 questions with complex piping logic).",
        "Conducted market research on survey implementation, evaluated tools, and recommended a solution targeting a 40% response rate.",
        "Implemented data analysis approaches to help interpret survey results and derive actionable insights for member services."
      ]
    }
  ],
  certifications: [
    "ICAEW Certificate in Finance, Accounting and Business",
    "Certification of Chartered Accountants in England and Wales — 10 / 15 exams passed"
  ],
  honours: ["ICAEW Global Business Challenge 2022 — Champion Team in China"],
  projects: [
    {
      title: "Undergraduate Econometrics Capstone",
      place: "The University of Melbourne · Melbourne, Victoria",
      time: "Mar 2025 – May 2025",
      bullets: [
        "Estimated the impact of household electrification on income in Burkina Faso using OLS and two-stage least squares (2SLS).",
        "Developed an end-to-end empirical pipeline in R (201 lines): data cleaning, instrument construction, model estimation, and robustness checks."
      ]
    }
  ],
  skills: [
    "AI Productivity: Vibe Coding (Cursor, Claude Code, Gemini Pro API), Agentic workflows, Prompt engineering, AI-assisted full-stack development.",
    "Econometrics & Causal Inference: OLS, 2SLS / IV, Difference-in-Differences (DiD).",
    "R for data analysis, statistical modelling, and visualisation.",
    "Languages: Mandarin (native), English (proficient)."
  ]
};

export default function Home() {
  return (
    <main className="container-page">
      <section className="w-full max-w-4xl space-y-10">
        {/* Hero */}
        <header className="card flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-5">
            <div className="pill">Curriculum Vitae</div>
            <h1 className="text-4xl md:text-5xl tracking-tight font-sans">
              Charles Yi
            </h1>
            <p className="max-w-xl text-xs md:text-sm leading-relaxed text-muted font-mono">
              Economics Honours student @ The University of Melbourne · AI
              Researcher & Developer ·{" "}
              <a
                href="https://www.icaew.com/learning-and-development/icaew-cfab"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent text-accent/80 transition-colors underline-offset-4 hover:underline"
              >
                ICAEW CFAB
              </a>
              .
            </p>
          </div>
          <div className="space-y-2 text-[11px] text-right text-muted font-mono">
            <div className="mono-label">Contact</div>
            <div className="space-y-1">
              <p>0435 171 436</p>
              <p>
                <a
                  href="mailto:charlesyi66@outlook.com"
                  className="hover:text-accent text-accent/80 transition-colors underline-offset-4 hover:underline"
                >
                  charlesyi66@outlook.com
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/charles-yi-3b98612b6"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent text-accent/80 transition-colors underline-offset-4 hover:underline"
                >
                  linkedin.com/in/charles-yi-3b98612b6
                </a>
              </p>
            </div>
          </div>
        </header>

        {/* Education */}
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="section-body space-y-4">
            {sections.education.map((entry) => (
              <div key={entry.title} className="card flex flex-col gap-3">
                <div className="flex flex-col justify-between gap-1 md:flex-row md:gap-8">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground font-sans">
                      {entry.title}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted font-mono">
                      <span>{entry.place}</span>
                      <img
                        src="/unimelb.svg"
                        alt="The University of Melbourne"
                        className="h-4 w-4 opacity-70"
                      />
                    </div>
                  </div>
                  <div className="text-[11px] text-muted md:text-right font-mono">
                    <p>{entry.time}</p>
                  </div>
                </div>
                <ul className="mt-1 space-y-1 text-[11px] text-muted font-mono">
                  {entry.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="section">
          <h2 className="section-title">Experience</h2>
          <div className="section-body space-y-4">
            {sections.experience.map((role) => (
              <div
                key={role.title}
                className="card flex flex-col justify-between gap-3 md:gap-4"
              >
                <div className="flex flex-col justify-between gap-1 md:flex-row md:gap-8">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground font-sans">
                      {role.title}
                    </p>
                    <p className="text-xs text-muted font-mono">
                      {role.place}
                    </p>
                  </div>
                  <div className="text-[11px] text-muted md:text-right font-mono">
                    <p>{role.time}</p>
                  </div>
                </div>
                <ul className="mt-1 space-y-1 text-[11px] text-muted font-mono md:max-w-md md:ml-auto">
                  {role.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Projects */}
        <section className="section">
          <h2 className="section-title">Academic Projects</h2>
          <div className="section-body space-y-4">
            {sections.projects.map((p) => (
              <div
                key={p.title}
                className="card flex flex-col justify-between gap-3 md:gap-4"
              >
                <div className="flex flex-col justify-between gap-1 md:flex-row md:gap-8">
                  <div className="space-y-1">
                    <p className="text-[13px] text-muted font-mono">
                      {p.title}
                    </p>
                    <p className="text-xs text-muted font-mono">
                      {p.place}
                    </p>
                  </div>
                  <div className="text-[11px] text-muted md:text-right font-mono">
                    <p>{p.time}</p>
                  </div>
                </div>
                <ul className="mt-1 space-y-1 text-[11px] text-muted font-mono md:max-w-md md:ml-auto">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="section pb-12">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-body">
            <ul className="card space-y-1 text-[11px] text-muted font-mono">
              {sections.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Certifications */}
        <section className="section pb-12">
          <h2 className="section-title">Professional Certifications</h2>
          <div className="section-body">
            <ul className="card space-y-1 text-[11px] text-muted font-mono">
              {sections.certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Honours & Awards */}
        <section className="section pb-12">
          <h2 className="section-title">Honours & Awards</h2>
          <div className="section-body">
            <ul className="card space-y-1 text-[11px] text-muted font-mono">
              {sections.honours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}

