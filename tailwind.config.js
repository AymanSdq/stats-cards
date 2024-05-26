/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
          veryDarkBlue : "hsl(233, 47%, 7%)",
          DarkDesBlue : "hsl(244, 38%, 16%)",
          SoftViolet : "hsl(277, 64%, 61%)",
          SlightTranspWhite : "hsla(0, 0%, 100%, 0.75)",
          SlightTranspWhiteTitle : "hsla(0, 0%, 100%, 0.6)"
      }
    },
  },
  plugins: [],
}

