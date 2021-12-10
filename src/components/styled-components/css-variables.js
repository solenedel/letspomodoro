// colors
const colorVars = {
  primaryDark: '#4C1FDE',
  primaryLight: '#EFEEF5',
  linkHover: '#F9C6FE',
  darkPink: '#F9C6FE',
  mediumPink: '#F9C6FE',
};

// fonts
const fontVars = {
  titleFont: `'IBM Plex Serif', serif`,
  mainFont: `'Urbanist', sans-serif`,
};

// Mixins
const mainButtonStyles = {
  margin: `20px`,
  backgroundColor: `${colorVars.primaryDark}`,
  color: `${colorVars.primaryLight}`,
  fontSize: `20px`,
  borderRadius: `5px`,
  height: `37px`,
  width: `70px`,
  transition: `color 0.4s`,
};

// these styles are not working properly when imported as mixin
// const mainButtonHoverStyles = {
//   color: `${colorVars.pinkHover}`,
//   transition: `color 0.4s`,
// };

const inputFieldStyles = {
  width: `180px`,
  fontSize: `18px`,
  marginLeft: `13px`,
  marginBottom: `20px`,
  border: `none`,
  borderRadius: `4px`,
};

// does not work
// const inputFieldPlaceholderStyles = {
//   color: `${colorVars.primaryDarkBrown}`,
//   opacity: `0.6`,
//   paddingLeft: `5px`,
// };

module.exports = {
  colorVars,
  fontVars,
  mainButtonStyles,
  inputFieldStyles,
};
