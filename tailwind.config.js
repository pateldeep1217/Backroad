/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      backgroundImage: {
        main: "linear-gradient(rgb(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)),url('/src/assets/images/main.jpg')",
      },
      colors: {
        primary: {
          1: "hsl(184, 91%, 17%)",
          2: "hsl(185, 84%, 25%)",
          3: "hsl(185, 81%, 29%)",
          4: "hsl(184, 77%, 34%)",
          5: "hsl(185, 62%, 45%)",
          6: "hsl(185, 57%, 50%)",
          7: "hsl(184, 65%, 59%)",
          8: "hsl(184, 80%, 74%)",
          9: "hsl(185, 94%, 87%)",
          10: "hsl(186, 100%, 94%)",
        },
        grey: {
          1: "hsl(209, 61%, 16%)",
          2: "hsl(211, 39%, 23%)",
          3: "hsl(209, 34%, 30%)",
          4: "hsl(209, 28%, 39%)",
          5: "hsl(210, 22%, 49%)",
          6: "hsl(209, 23%, 60%)",
          7: "hsl(211, 27%, 70%)",
          8: "hsl(210, 31%, 80%)",
          9: "hsl(212, 33%, 89%)",
          10: "hsl(210, 36%, 96%)",
        },
      },
    },
  },
  plugins: [],
};
