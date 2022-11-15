module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { primary: "#4A3AFF" },
      backgroundImage: {
        Hero: "url('../public/src/bgyellow.jpg')",
      },
    },
  },
  plugins: [],
};
