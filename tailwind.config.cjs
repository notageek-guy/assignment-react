/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora : "'lora', serif",
        caveat : "'caveat', cursive",
        pacifico : "'pacifico', cursive",
        

      }
    },
  },
  plugins: [require("daisyui")],
}
