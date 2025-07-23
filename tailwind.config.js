/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 10px #0ff, 0 0 20px #0ff",
      },
    },
  },
  plugins: [],
};
