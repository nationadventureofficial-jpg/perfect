export const typography = {
  fonts: {
    display: "Baloo 2, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    body: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    decorative: "Amatic SC, cursive",
  },
  usage: {
    h1: {
      fontFamily: "display",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "display",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "display",
      fontWeight: 700,
    },
    body: {
      fontFamily: "body",
      fontWeight: 400,
      lineHeight: 1.65,
    },
  },
} as const;
