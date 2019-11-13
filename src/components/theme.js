const colors = {
  primary: '#8B10AE',
  secondary: '#ffffff',
  tertiary: '#e1e1e1',
  danger: '#ff3f44',
};

const theme = Object.freeze({
  colors,
});

export const getColorFromProps = props => {
  let finalColor = null;
  Object.keys(theme.colors).map(color => {
    if (color in props) {
      finalColor = theme.colors[color];
    }
  });

  return finalColor;
};

export default theme;
