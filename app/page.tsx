"use client";

import { motion } from "framer-motion";

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
  ]
};

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-48px" },
  transition: { duration: 0.4 }
};

export default function Home() {
  return (
    <main className="container-page">
      <div className="w-full max-w-4xl space-y-20 md:space-y-28">
        {/* Minimal header */}
        <motion.header
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          {...fadeInUp}
        >
          <h1 className="text-3xl md:text-4xl tracking-tight font-serif text-foreground">
            Charles Yi
          </h1>
          <nav className="flex flex-wrap gap-x-6 gap-y-1 text-xs font-mono text-muted">
            <a
              href="mailto:charlesyi66@outlook.com"
              className="link-reverse-hover"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/charles-yi-3b98612b6"
              target="_blank"
              rel="noopener noreferrer"
              className="link-reverse-hover"
            >
              LinkedIn
            </a>
            <a
              href="https://www.icaew.com/learning-and-development/icaew-cfab"
              target="_blank"
              rel="noopener noreferrer"
              className="link-reverse-hover"
            >
              ICAEW CFAB
            </a>
          </nav>
        </motion.header>

        {/* Section 01: Education — UNCHANGED */}
        <motion.section className="section" {...fadeInUp}>
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
        </motion.section>

        {/* Section 02: Economics Research Project (In Progress) */}
        <motion.section className="section" {...fadeInUp}>
          <h2 className="section-title font-mono">
            02 / The Resilience of Australian White-Collar Workers
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground font-sans">
            Analyzing the causal impact of GenAI exposure on white-collar
            resilience, non-cognitive capital, and displacement risk.
          </p>
          <p className="mt-1 text-[11px] uppercase tracking-widest text-muted font-mono">
            In Progress
          </p>
          <div className="mt-8 w-full">
            <img
              src="/research-poster.png"
              alt="Research poster on white-collar resilience under GenAI exposure"
              className="w-full h-auto rounded-lg border border-black/10 shadow-sm"
            />
          </div>
        </motion.section>

        {/* Section 03: Equi */}
        <motion.section className="section" {...fadeInUp}>
          <h2 className="section-title font-mono">03 / Equi Project</h2>

          {/* Headline */}
          <h3 className="mt-6 text-2xl md:text-3xl font-serif text-foreground leading-tight">
            Equi <span className="text-muted">|</span> The AI-Native Lifestyle Architect
          </h3>

          <div className="mt-8 space-y-8 max-w-2xl">
            {/* The Generic Task Trap */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-muted font-bold font-mono mb-2">
                The Generic Task Trap
              </p>
              <p className="text-sm leading-relaxed text-foreground font-sans">
                Current AI assistants treat every interaction as a blank slate. They lack continuity, context, and genuine understanding of the individual's unique life patterns, preferences, and goals.
              </p>
            </div>

            {/* Long-term Memory & Understanding */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-muted font-bold font-mono mb-2">
                Long-term Memory & Understanding
              </p>
              <p className="text-sm leading-relaxed text-foreground font-sans">
                Equi builds a persistent cognitive model of the user over time—learning communication styles, energy patterns, priorities, and relationships to anticipate needs before they arise.
              </p>
            </div>

            {/* Dynamic Scheduling */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-muted font-bold font-mono mb-2">
                Dynamic Scheduling
              </p>
              <p className="text-sm leading-relaxed text-foreground font-sans">
                Beyond simple calendar management, Equi dynamically restructures the user's day based on real-time context—energy levels, unexpected events, and shifting priorities.
              </p>
            </div>

            {/* Personality & Emotional Value */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-muted font-bold font-mono mb-2 italic">
                Personality & Emotional Value
              </p>
              <p className="text-sm leading-relaxed text-foreground font-serif italic">
                Equi evolves into a genuine partner—not a tool. It remembers what matters to you, celebrates your wins, and provides thoughtful guidance rooted in understanding, not just data.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-mono text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground hover:text-foreground transition-colors duration-200"
            >
              Experience the Future of Agency
              <span className="text-lg">→</span>
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
