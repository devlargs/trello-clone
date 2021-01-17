module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        DEFAULT: "#3490dc",
        light: "#6cb2eb",
        lighter: "#bcdefa",
        dark: "#2C79BC",
      },
      white: {
        DEFAULT: "#fff",
      },
      grey: {
        DEFAULT: "#9babb4",
        light: "#dae4e9",
        lighter: "#fff",
      },
      red: {
        DEFAULT: "#e3342f",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
