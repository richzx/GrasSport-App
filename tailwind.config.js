/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "app09": "#1f1f1f",
        "app08": "#43a135",
        "app07": "#349a27",
        "app10": "#575757",
        "w07": "#f1ffec",
        "w06": "#2c2a2b",
        "w05": "#5e5e5e"
      },
      fontFamily: {
        "inder": "'Inder'"
      },
      screens: {
        "s1": "600px",
        "s2": "501px",
      },
    },
  },
  plugins: [],
}

