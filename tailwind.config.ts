const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          darker: "rgb(var(--color-primary-darker))",
        },

        black: "rgb(var(--color-black))",
        dark: "rgb(var(--color-dark))",
        darker: "rgb(var(--color-darker))",

        light: "rgb(var(--color-light))",
        lighter: "rgb(var(--color-lighter))",
        white: "rgb(var(--color-white))",

        muted: {
          DEFAULT: "rgb(var(--color-muted))",
          dark: "rgb(var(--color-muted-dark))",
        },
      },

      borderColor: {
        DEFAULT: "rgba(var(--color-border))",
        dark: "rgba(var(--color-border-dark))",
      },

      transitionDuration: {
        DEFAULT: "0.35s",
      },

      transitionDelay: {
        DEFAULT: "0.15s",
      },
    },

    animation: {
      spotlight: "spotlight 2s ease .75s 1 forwards",
      scroll:
        "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      aurora: "aurora 60s linear infinite",
    },

    keyframes: {
      spotlight: {
        "0%": {
          opacity: 0,
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: 1,
          transform: "translate(-50%,-40%) scale(1)",
        },
      },

      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },

      aurora: {
        from: {
          backgroundPosition: "50% 50%, 50% 50%",
        },
        to: {
          backgroundPosition: "350% 50%, 350% 50%",
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
