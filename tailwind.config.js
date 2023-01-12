/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/core/**/*.{js,ts,jsx,tsx}"
  ],
  safelist:[
    /^bg-/,
    /^to-/,
    /^from-/,
    'from-green-400',
    'from-blue-400',
    'from-gray-400',
    'to-gray-700',
    'to-blue-700',
    'to-green-700',
  ],

  theme: {
    extend: {},
  },
  plugins: [],
}
