import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'desktop': 'repeat(12, minmax(32px, 64px))',
        'mobile':  'repeat(2, minmax(80px, 96px))',
        'tablets':  'repeat(6, minmax(40px, 68px))',
      },
      colors: {
        'laranja-principal' : "#F18F01",
        'laranja-secundario' : "#FFDEAF",
        'laranja-descricao-claro' : "#FCD69C",
      },
      fontFamily:{
        'nunito' : 'Nunito'
      },
      screens: {
        'tablet': '650px',
        'lg': '1100px',
        'headerProprio': '1325px'
      },
    },
  },
  plugins: [],
};
export default config;
