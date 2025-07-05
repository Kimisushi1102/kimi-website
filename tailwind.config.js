/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        kimigold: "#e0c48f",
        kimiblack: "#0c0c0c"
      }
    }
  },
  plugins: []
};
