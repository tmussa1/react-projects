/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    javascriptreact: "javascriptreact",
    typescript: "typescript",
    typescriptreact: "typescriptreact",
  },
};
