/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"],
      },
      colors: {
        cream: "#FAF8F3",
        ink: "#1A1814",
        muted: "#6B6760",
        accent: "#C4622D",
        "accent-light": "#F0E8DF",
        accent2: "#2D6B8A",
        "accent2-light": "#DFF0F5",
        "section-alt": "#F5F2EC",
      },
    },
  },
  plugins: [],
};
