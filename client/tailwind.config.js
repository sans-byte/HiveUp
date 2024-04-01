/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#21232d",
        buttonPrimary: "#ce6a85ff",
        buttonSecondary: "#7a9e7eff",
      },
    },
  },
  plugins: [],
};
