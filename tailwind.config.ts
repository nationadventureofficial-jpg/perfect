import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        surface: "#ffffff",
        text: "#1a1a1a",
        mutedText: "#5a5a5a",
        primary: "#ff4fb8",
        primaryHover: "#e642a6",
        secondary: "#ffd166",
        accent: "#ff8ad0",
        border: "rgba(0,0,0,0.08)",
      },
      fontFamily: {
        display: ["Baloo 2", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
        body: ["Poppins", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
        decorative: ["Amatic SC", "cursive"],
      },
      borderRadius: {
        button: "999px",
        card: "20px",
        input: "14px",
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
        button: "0 10px 20px rgba(255,79,184,0.25)",
      },
      maxWidth: {
        container: "1140px",
      },
      // #region agent log
      // Ensure container class is available
      // #endregion
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
