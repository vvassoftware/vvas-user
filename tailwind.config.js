/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1B4965",
        lightBlue: "#C0CED8",
        darkYellow: "#FFB703",
        lightPrimary: "#D0DAE1",
        text: "#5E5E5E",
        danger: "#E55757",
        borderLightBlue: "#9EB3C2",
        success: "#2EB133",
      },
    },
  },
  plugins: [],
};
