/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tiny: "480px", //tiny screen
      sm: "640px", // Small screens
      md: "768px", // Medium screens
      lg: "1024px", // Large screens
      xl: "1280px", // Extra large screens
      "2xl": "1536px", // 2X large screens
      // Add more breakpoints as needed
    },
    extend: {
      colors: {
        primary: "#eb5757",
        card: "#222222",
      },
      backgroundImage: {
        hero: "url(./hero.jpg)",
        banner: "url(./banner.jpg)",
      },
    },
    fontFamily: {
      acmefont: "Acme",
      sens: "Sen",
    },
  },
  plugins: [],
};
