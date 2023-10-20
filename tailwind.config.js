/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  purge: {
    content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
    enabled: process.env.NODE_ENV === "production",
  },
  plugins: [],
};
