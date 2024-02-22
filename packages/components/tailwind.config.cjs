import { layout, neutral, primary, secondary, status } from '@acme/shared/theme'

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '../../packages/components/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...layout,
        ...primary,
        ...neutral,
        ...secondary,
        ...status
      }
    },
  },
  plugins: [],
}

module.exports = config

