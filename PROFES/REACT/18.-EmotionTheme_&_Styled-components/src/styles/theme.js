import { spacing } from "./utils";

export const BREAKPOINTS = {
  extraSmall: 320,
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
};

export const ZINDEX = {
  base: 100,
  modal: 200,
  spinner: 300,
};

const PALETTE_COLOR_LIGHT = {
  background: "#fff",
  color: "#551951ff",
  button: "#51e4a2ff",
  border: "#df5e4b",
};

const PALETTE_COLOR_DARK = {
  background: "#551951",
  color: "#51e4a1",
  button: "#4abbc5ff",
  border: "#df5e4b",
};

export const themeLight = {
  palette: {
    background: {
      main: PALETTE_COLOR_LIGHT.background,
      light: PALETTE_COLOR_LIGHT.background,
      dark: PALETTE_COLOR_LIGHT.background,
    },
    color: {
      main: PALETTE_COLOR_LIGHT.color,
      light: PALETTE_COLOR_LIGHT.color,

      dark: PALETTE_COLOR_LIGHT.color,
    },
    button: {
      main: PALETTE_COLOR_LIGHT.button,
      light: PALETTE_COLOR_LIGHT.button,

      dark: PALETTE_COLOR_LIGHT.button,
    },
    border: {
      main: PALETTE_COLOR_LIGHT.border,
      light: PALETTE_COLOR_LIGHT.border,

      dark: PALETTE_COLOR_LIGHT.border,
    },
  },
  mediaquery: {
    mobile: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
    desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
  },
  typography: {
    fonts: {
      bold: "/assets/fonts/NOMBRE.FONT.ttf",
      italic: "/assets/fonts/NOMBRE.FONT.ttf",
      regular: "/assets/fonts/NOMBRE.FONT.ttf",
      semibold: "/assets/fonts/NOMBRE.FONT.ttf",
    },
  },
  spacing,
};

export const themeDark = {
  palette: {
    background: {
      main: PALETTE_COLOR_DARK.background,
      light: PALETTE_COLOR_DARK.background,
      dark: PALETTE_COLOR_DARK.background,
    },
    color: {
      main: PALETTE_COLOR_DARK.color,
      light: PALETTE_COLOR_DARK.color,
      dark: PALETTE_COLOR_DARK.color,
    },
    button: {
      main: PALETTE_COLOR_DARK.button,
      light: PALETTE_COLOR_DARK.button,
      dark: PALETTE_COLOR_DARK.button,
    },
    border: {
      main: PALETTE_COLOR_DARK.border,
      light: PALETTE_COLOR_DARK.border,
      dark: PALETTE_COLOR_DARK.border,
    },
  },
  mediaquery: {
    mobile: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
    desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
  },
  typography: {
    fonts: {
      bold: "/assets/fonts/NOMBRE.FONT.ttf",
      italic: "/assets/fonts/NOMBRE.FONT.ttf",
      regular: "/assets/fonts/NOMBRE.FONT.ttf",
      semibold: "/assets/fonts/NOMBRE.FONT.ttf",
    },
  },
  spacing,
};
