import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07070a",
        panel: "#0c0d11",
        line: "#1d2620",
        acid: "#b6ff3c",
        ice: "#22e3ff",
        mag: "#ff2bd6",
        dim: "#6f7b74",
        bone: "#cfd6d2",
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "'JetBrains Mono'",
          "'Fira Code'",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
