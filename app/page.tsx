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
            02 / Research
          </h2>

          {/* Title & Subtitle */}
          <h3 className="mt-6 text-xl md:text-2xl font-bold text-foreground font-sans leading-tight">
            The Resilience of Australian White-Collar Workers
          </h3>
          <p className="mt-2 text-sm text-muted font-sans leading-relaxed">
            Assessing the Causal Impact of GenAI Exposure on Job Security
          </p>

          {/* Status Tag */}
          <p className="mt-3 text-[11px] uppercase tracking-widest text-muted font-mono">
            In Progress
          </p>

          {/* Research Points - Grid Layout */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-3xl">
            {/* The Cognitive Gap */}
            <div className="border-l border-black/10 pl-5">
              <p className="text-sm font-bold text-foreground font-sans">
                The Cognitive Gap
              </p>
              <p className="mt-2 text-sm text-muted font-sans leading-relaxed">
                GenAI reduces routine cognitive load but increases demand for higher-order skills. Workers with limited adaptive capacity face heightened displacement risk.
              </p>
            </div>

            {/* The Resilience Matrix */}
            <div className="border-l border-black/10 pl-5">
              <p className="text-sm font-bold text-foreground font-sans">
                The Resilience Matrix
              </p>
              <p className="mt-2 text-sm text-muted font-sans leading-relaxed">
                A multidimensional framework capturing non-cognitive capital—adaptability, learning orientation, emotional regulation—as key buffers against algorithmic displacement.
              </p>
            </div>

            {/* Causal Forest / GRF */}
            <div className="border-l border-black/10 pl-5">
              <p className="text-sm font-bold text-foreground font-sans">
                Causal Forest <span className="font-mono text-xs text-foreground/60">&</span> GRF
              </p>
              <p className="mt-2 text-sm text-muted font-sans leading-relaxed">
                Employing <code className="font-mono text-xs bg-black/5 px-1 py-0.5">Causal Forest</code> and <code className="font-mono text-xs bg-black/5 px-1 py-0.5">GRF</code> to estimate <code className="font-mono text-xs bg-black/5 px-1 py-0.5">CATE</code>—heterogeneous treatment effects across occupation, industry, and skill profiles.
              </p>
            </div>

            {/* The Awareness Gap */}
            <div className="border-l border-black/10 pl-5">
              <p className="text-sm font-bold text-foreground font-sans">
                The Awareness Gap
              </p>
              <p className="mt-2 text-sm text-muted font-sans leading-relaxed">
                Many workers underestimate their exposure to GenAI-driven automation. This misperception correlates with weaker upskilling effort and lower resilience.
              </p>
            </div>

            {/* Targeted Intervention */}
            <div className="border-l border-black/10 pl-5 md:col-span-2">
              <p className="text-sm font-bold text-foreground font-sans">
                Targeted Intervention
              </p>
              <p className="mt-2 text-sm text-muted font-sans leading-relaxed">
                Translating heterogeneity in <code className="font-mono text-xs bg-black/5 px-1 py-0.5">CATE</code> estimates into actionable policy—identifying high-risk segments for tailored re-skilling programs.
              </p>
            </div>
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
