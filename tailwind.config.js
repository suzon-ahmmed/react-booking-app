/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "my-greadent": "url('/img/hero-pattern.svg')",
      },
      colors: {
        //top background
        'blue-top': '#003580',
        'blue-hover': '#ffffff1a',
        //socil media icon
        'github': '#171515',
        'linkedin': '#1d66c2',
        'facebook': '#2677f2',
        'twiter': '#2ba1f2',
        'behance': '#2557ff',
        'youtube': '#FF0000',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '0rem',
      }
    },
  },
  plugins: [],
};
