/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#05376A",
        accent: "#003366",
        secondary: "#2CA58D",
        accentLight: "#A6B9CB",
        accentNeutral: "#64819D"
},
      fontFamily: {
        gilroy: ["Manrope_400Regular"],
        gilroyBold: ["Manrope_700Bold"],
        din: ["Dosis_400Regular"],
        dinBold: ["Dosis_700Bold"],
      },
    },
  },
  plugins: [],
}
