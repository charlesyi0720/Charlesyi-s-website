import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Geist Sans", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "Geist Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      colors: {
        background: "#050505",
        surface: "#0A0A0A",
        foreground: "#FFFFFF",
        muted: "#A0A0A0",
        accent: "#007AFF",
        subtle: "#1a1a1a"
      }
    }
  },
  plugins: []
};

export default config;
