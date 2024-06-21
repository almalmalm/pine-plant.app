import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: 'var(--gray)',
        black: 'var(--black)',
        brown: 'var(--brown)',
        blue: 'var(--blue)',
        yellow: 'var(--yellow)',
        white: 'var(--white)',
        red: 'var(--red)',
      },
      gridTemplateColumns: {
        sizeSelector: 'repeat(5, 3.5rem)',
      },
    },
  },
  plugins: [],
};
export default config;
