module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "IBM-Sans": ['"IBM Plex Sans"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
