module.exports = {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   darkMode: "class",
   theme: {
      screens: {
         md: "768px",
         lg: "769px",
         w_768: "768px",
         w_800: "800px",
         w_850: "850px",
         w_900: "900px",
         w_1000: "1000px",
         w_1050: "1050px",
         w_1100: "1100px",
         w_1150: "1150px",
         w_1200: "1200px",
         w_1300: "1300px",
         w_1350: "1350px",
         w_1440: "1440px",
      },
      fontSize: {
         f11: ".687rem",
         f12: ".75rem",
         f13: ".812rem",
         f14: ".875rem",
         f15: ".937rem",
         f18: "1.125rem",
      },
      extend: {
         fontFamily: {
            manrope: "Manrope",
         },
         boxShadow: {
            custom: "0px 2px 9px rgba(0, 0, 0, 0.0532439)",
         },
         colors: {
            strong_brown: "#D87D4A",
            very_dark: "#101010",
            light_grey: "#F1F1F1",
            very_light_grey: "#FAFAFA",
            light_brown: "#FBAF85",
            error_red: "#CD2C2C",
         },
      },
   },
   plugins: [
      //  require('@tailwindcss/forms')({
      //    strategy: 'base', // only generate global styles
      //  }),
      // require('@tailwindcss/typography'),
      // require('@tailwindcss/line-clamp'),
      // require('@tailwindcss/aspect-ratio')
   ],
}
