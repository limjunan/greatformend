/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier New', 'monospace'],
      },
      colors: {
        'brand': {
          'default': '#eafe7c',
          'dark': 'hsl(71, 99%, 72%)',
        },
        'surface': {
          1: '#ffffff',
          2: '#f8fafc',
        },
        'text': {
          primary: '#0f172a',
          secondary: '#64748b',
          muted: '#94a3b8',
        }
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

