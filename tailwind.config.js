const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    "colors": {
      "White": "#ffffff",
      "DarkestBlue": "#070724",
      "MedGrayBlue": "#38384f",
      "LightGrayBlue": "#838391",
      "Cyan": "#419ebb",
      "Mustard": "#eda249",
      "Purple": "#6d2ed5",
      "RedOrange": "#d14c32",
      "Red": "#d83a34",
      "Orange": "#cd5120",
      "Teal": "#1ec1a2",
      "Cobalt": "#2d68f0"
     },
     "fontSize": {
      "xxs": "0.5625rem",
      "xs": "0.6875rem",
      "sm": "0.75rem",
      "base": "0.875rem",
      "lg": "1.25rem",
      "xl": "1.75rem",
      "xxl": "2.5rem",
      "3xl": "5rem"
     },
     "borderRadius": {
      "none": "0",
      "xs": "1.5rem"
     },
    extend: {
      fontFamily: {
        spartan: ['"League Spartan"', ...defaultTheme.fontFamily.sans],
        antonio: ['"Antonio"', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'star-pattern': "url('/src/images/background-stars.svg')"
      },
      backgroundSize: {
        '50%': '50%'
      }
    },
  },
  plugins: [],
}
