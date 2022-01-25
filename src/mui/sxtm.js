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
          if (theme[key]) {
            newVal = theme[key];
          } else {
            throw new Error(key + ' not found in theme object [sxtm]');
          }
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
