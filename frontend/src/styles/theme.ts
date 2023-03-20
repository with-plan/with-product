import type { Theme } from "theme-ui";

export const theme: Theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    typography: "#111",
    base: {
      primary: "#fafafa",
      secondary: "#f4f4f4",
    },
    accent: {
      primary: "#e3e0da",
      secondary: "#ccba94",
      tertiary: "#afafaf",
    },
    link: "#508cb2",
  },
  space: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
};
