/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffd803",
        secondary: "#e3f6f5",
        tertiary: "#bae8e8",
        "card-background": "#fffffe",
        'section': '#e3f6f5',
        'background':'#e3f6f5',
      },
    },
  },
  plugins: [],
};
