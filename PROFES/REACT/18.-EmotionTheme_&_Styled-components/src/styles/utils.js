//Función que nos permite marcar el espaciado de nuestra app

const SPACE_PIXELS_VALUE = 8;

export const spacing = (spaceV, spaceH) =>
  spaceH !== null && spaceH !== undefined
    ? `${spaceV * SPACE_PIXELS_VALUE}px ${spaceH * SPACE_PIXELS_VALUE}px`
    : `${spaceV * SPACE_PIXELS_VALUE}px`;

const isPlainObject = (item) => {
  return (
    item !== null && typeof item === "object" && item.constructor === Object
  );
};

//función que define el tema de la app --> dada por emotion

export function createTheme(baseTheme, theme) {
  const output = { ...baseTheme };
  if (isPlainObject(baseTheme) && isPlainObject(theme)) {
    Object.keys(theme).forEach((key) => {
      if (key === "__proto__") {
        return;
      }
      if (
        isPlainObject(theme[key]) &&
        key in baseTheme &&
        isPlainObject(baseTheme[key])
      ) {
        [key] = createTheme(baseTheme[key], theme[key]);
      } else {
        [key] = theme[key];
      }
    });
  }
  return output;
}
