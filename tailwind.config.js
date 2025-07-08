/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./features/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "material-symbols-outlined": ["MaterialSymbolsOutlined"],
        "material-symbols-rounded": ["MaterialSymbolsRounded"],
        "material-symbols-sharp": ["MaterialSymbolsSharp"],
      },
    },
  },
  plugins: [],
};
