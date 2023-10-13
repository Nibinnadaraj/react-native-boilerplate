const black = '#000';
const white = '#fff';
const offwhite = '#fcfcfc';
// const yellow = '#fce302';
// const green = '#008000';
// const grey = '#ccc';
// const liteGrey = '#ebd0d0';
const darkGrey = '#3b453e';
// const lightRed = '#c14034';
// const blue = '#6b69ff';
// const red = '#ff6969';
// const liteGreen = '#e4f5eb';
// const liteRed = '#fae3e3';
// const whatsappGreen = '#44BE54';


/**
 * All colors used in the app is statically written above.
 * The stylesheet object will return the apropriate style for either dark or light mode.
 */

export const appColors = {
  dark: {
    background: black,
    font: offwhite,
  },
  light: {
    background: white,
    font: darkGrey,
  },
};
