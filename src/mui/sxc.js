const sxc = (condition, obj, invalid = {}) => {
  if (condition) {
    return obj;
  }
  return invalid;
};

export default sxc;
