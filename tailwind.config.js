/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cocoa: {
          950: "#121212",
          900: "#241712",
          850: "#2f1d16",
          800: "#4A3427",
          700: "#6b4a39",
          600: "#8b6753",
          500: "#b08a70",
          400: "#d2b59b",
          300: "#D8C3A5",
          200: "#E7D8C4",
          100: "#F5EFE6",
        },
        gold: "#C8A96B",
        ember: "#4A3427",
        leaf: "#6a5842",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        body: ['"Manrope"', "sans-serif"],
      },
      boxShadow: {
        glow: "0 28px 90px rgba(28, 16, 10, 0.28)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(200,169,107,0.18), transparent 38%), linear-gradient(135deg, rgba(18,18,18,0.98), rgba(74,52,39,0.88))",
        parchment:
          "linear-gradient(180deg, rgba(245,239,230,0.98), rgba(231,216,196,0.92))",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        drift: "drift 22s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        drift: {
          "0%": { transform: "scale(1.04) translate3d(0, 0, 0)" },
          "100%": { transform: "scale(1.12) translate3d(-2%, 2%, 0)" },
        },
      },
    },
  },
  plugins: [],
};
