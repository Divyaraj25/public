module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 100: "#d9d9d9", 300: "#a1a5b0" },
        black: { 900: "#000000", "900_f2": "#000000f2", "900_99": "#00000099" },
        white: { A700: "#ffffff" },
        gray: { 50: "#f5f6ff", 100: "#f7f6f6", 800: "#434343", 900: "#1c1c1c" },
        red: { 700: "#d33b3b", 800: "#cd2828", A700: "#d20d0d" },
        red_700_01: "#c94d3f",
        red_900: "#a51e1e",
      },
      boxShadow: {},
      fontFamily: { inter: "Inter", sairacondensed: "Saira Condensed", outfit: "Outfit" },
      opacity: { 0.7: 0.7 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
