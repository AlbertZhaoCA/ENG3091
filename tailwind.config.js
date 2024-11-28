/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      minHeight: {
        screen: "100vh",
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "1/10": "10%",
        "1/5": "20%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "4/5": "80%",
        "9/10": "90%",
        inherit: "inherit",
      },
      animation: {
        move: "move 5s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
    },
  },
  plugins: [],
};
