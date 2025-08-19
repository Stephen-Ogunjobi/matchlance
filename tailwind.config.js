/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5",
          hover: "#6366F1",
        },
        secondary: {
          DEFAULT: "#10B981",
        },
        background: {
          light: "#FFFFFF",
          dark: "#0F172A",
        },
        surface: {
          light: "#F9FAFB",
          dark: "#1E293B",
        },
        text: {
          light: {
            primary: "#111827",
            muted: "#6B7280",
          },
          dark: {
            primary: "#F9FAFB",
            muted: "#9CA3AF",
          },
        },
        status: {
          error: "#EF4444",
          warning: "#F59E0B",
          info: "#3B82F6",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "card-light":
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        "card-dark": "0 1px 3px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
