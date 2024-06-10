/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'prompt': ['Prompt', 'sans-serif'],
        'prompt-light': ['Prompt Light', 'sans-serif'],
        'prompt-medium': ['Prompt Medium', 'sans-serif'],
        'prompt-semibold': ['Prompt SemiBold', 'sans-serif'],
        'prompt-thin': ['Prompt Thin', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'ubuntu-light': ['Ubuntu Light', 'sans-serif'],
        'ubuntu-medium': ['Ubuntu Medium', 'sans-serif'],
        'ubuntu-bold': ['Ubuntu Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

