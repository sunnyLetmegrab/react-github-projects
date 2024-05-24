/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-gradient': 'linear-gradient(180deg,#CEE5FD, #ffffff)',

      },
      backgroundSize: {
        'bg-size': "100% 190px"
      },
      maxWidth: {
        'container-padding': "1160px",
        'container': "1200px",
      }
    },
  },
  plugins: [

  ],
}

