import React from 'react';

const useToggle = (initialState = false) => {
  if (typeof initialState !== 'boolean')
    throw new Error(
      'Invalid value supplied to useToggle. useToggle accepts boolean value only.',
    );
  const [state, setState] = React.useState(initialState);
  const toggle = React.useCallback(
    (newState) => {
      if (typeof newState === 'boolean') {
        // For overriding toggle newState
        setState(newState);
      } else {
        // new state will be opposite of the previous one
        setState(!state);
      }
    },
    [state],
  );
  return [state, toggle];
};

export default useToggle;
