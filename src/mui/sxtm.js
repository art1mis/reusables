// sx theme dependent values
const sxtm = (lightValue, darkValue) => (theme) => {
  const decide = (value) => {
    if (typeof value === 'function') {
      return value(theme);
    }

    if (typeof value === 'string' && theme[value]) {
      const keys = value.split('.');
      if (keys) {
        let newVal = theme;
        keys.forEach((key) => {
          newVal = theme[key];
        });
        return newVal;
      }
      return theme[value];
    }

    return value;
  };
  return theme.palette.mode === 'light'
    ? decide(lightValue)
    : decide(darkValue);
};
export default sxtm;
