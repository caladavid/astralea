/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': "#f45a53",
        'secondaryColor': "#f45851",
        'tertiaryColor': "#fcb8ae",
        'bgColor': "#f2f2f2",
        'customGray': '#2A2A2A',
      },
    },
  },
  plugins: [],
}
