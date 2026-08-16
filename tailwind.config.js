/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <--- این خط کلیدی برای فعال‌سازی دارک‌مود است
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
