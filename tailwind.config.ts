import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    maxWidth:{
      container:"1440px",
      contentContainer:"1140px",
      containerSmall:"1024px",
      containerxs:"768px",
    },
    extend: {
      screens: {
        xs: "345px",
        sm: "380px",
        sml: "520px",
        md: "667px",
        mdl: "760px",
        lg: "920px",
        lgl: "1024px",
        xl: "1340px",
      },
      fontFamily: {
        body: ['poppins', 'sans-serif'],
        bodyFont: ['SF UI Text','sans-serif'],
        titleFont: ['SF Pro Display', 'Sans-Serif'],
        spaceFont: ["Space Grotesk", "sans-serif"],
        robotoFont: ["Roboto Mono", "sans-serif"],
        monoFont: ['SF Mono','sans-serif'],
        urbanFont: ['Urbanist', 'sans-serif'],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        textLight: "#d5cbe6",
        textLighter: "#9e87c5",

        primary: "#7c3aed",
        primaryContent: "#ffffff",
        primaryDark: "#5f14e0",
        primaryLight: "#9b69f1",

        secondary: "#eda93a",
        secondaryContent: "#251803",
        secondaryDark: "#e09214",
        secondaryLight: "#f1bd69",

        background: "#1a1a1a",
        foreground: "#262626",
        border: "#3f3e41",

        copy: "#fbfbfb",
        copyLight: "#d8d8da",
        copyLighter: "#a5a4a8",
        copyLightest: "#7c7980",

        sbackground: "#171122",
        sforeground: "#231934",
        sborder: "#3a2956",

        scopy: "#fbfafd",

        success: "#3aed3a",
        warning: "#eded3a",
        error: "#ed3a3a",

        successContent: "#032503",
        warningContent: "#252503",
        errorContent: "#ffffff",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('flowbite/plugin'),
  ],
};
export default config;
