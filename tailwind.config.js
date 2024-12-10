/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Public Sans"', 'sans-serif'], 
    },
    colors: {
      primary: import.meta.env.COLOR
   },
   extend: {
    backgroundImage: {
      'black-gradient': 'linear-gradient(to right, #1E1E1E, #121212)',
    },
    gradients: {
      'black-theme': 'linear-gradient(90deg, #ffffff, #333333, #ffffff)',
    },
  },
    
  },
  plugins: [],
};
