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
            02 / Economics Research Project
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground font-sans">
            Analyzing the causal impact of GenAI exposure on white-collar
            resilience, non-cognitive capital, and displacement risk.
          </p>
          <p className="mt-1 text-[11px] uppercase tracking-widest text-muted font-mono">
            In Progress
          </p>
          <div className="mt-8 min-h-[280px] rounded-lg border border-subtle bg-surface/50 flex items-center justify-center">
            <p className="text-xs font-mono text-muted">
              [ Placeholder: interactive research graph ]
            </p>
          </div>
        </motion.section>

        {/* Section 03: Equi */}
        <motion.section className="section" {...fadeInUp}>
          <h2 className="section-title font-mono">03 / Equi Project</h2>
          <div className="mt-6 space-y-6 max-w-2xl">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-muted font-mono mb-2">
                The Goal
              </p>
              <p className="text-sm leading-relaxed text-foreground font-sans">
                Ending decision fatigue. Equi is a personal resource scheduling
                engine designed to liberate human cognitive bandwidth from
                logistical friction and task prioritization.
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-muted font-mono mb-2">
                The Means
              </p>
              <p className="text-sm leading-relaxed text-foreground font-sans">
                Powered by an AI Multi-Agent System (MAS) that autonomously
                handles complex scheduling and resource allocation, allowing the
                user to focus solely on high-value decision-making.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-lg border border-foreground/20 bg-white p-4 shadow-sm max-w-xl">
            <div className="border border-foreground/15 rounded bg-[#FAFAFA] overflow-hidden font-mono text-[11px] text-foreground">
              <div className="border-b border-foreground/15 px-3 py-2 text-muted">
                MAS Engine Status
              </div>
              <div className="relative h-32 overflow-hidden">
                <div className="terminal-scroll absolute inset-0 px-3 py-2 space-y-1">
                  <div className="text-muted">&gt; initializing agents...</div>
                  <div className="text-muted">&gt; scheduler active</div>
                  <div className="text-foreground font-medium">
                    MAS Engine Status: Active
                  </div>
                  <div className="text-muted">&gt; awaiting user input</div>
                  <div className="text-muted">&gt; initializing agents...</div>
                  <div className="text-muted">&gt; scheduler active</div>
                  <div className="text-foreground font-medium">
                    MAS Engine Status: Active
                  </div>
                  <div className="text-muted">&gt; awaiting user input</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
