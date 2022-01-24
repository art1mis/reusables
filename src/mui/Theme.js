import React from 'react';
import PropTypes from 'prop-types';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const DispatchContext = React.createContext(() => {
  throw new Error('Forgot to wrap component in `ThemeProvider`');
});

export const usePrefersDark = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const prefersDark = prefersDarkMode ? 'dark' : 'light';
  return prefersDark;
};

export const ThemeProvider = ({
  getDesignTokens,
  darkScrollbar,
  getCookie,
  setCookie,
  cookieName,
  ...other
}) => {
  const prefersDark = usePrefersDark();
  const [mode, setMode] = React.useState('system');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const prevMode = getCookie(cookieName);
      if (['light', 'dark', 'system'].includes(prevMode)) {
        setMode(prevMode);
      }
    }
  }, [getCookie, cookieName, setMode]);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setCookie(cookieName, mode, {
        path: '/',
        maxAge: 31536000,
      });
    }
  }, [mode]);

  const actualMode =
    mode === 'system' ? (prefersDark ? 'dark' : 'light') : mode;

  const theme = React.useMemo(() => {
    const brandingDesignTokens = getDesignTokens(actualMode);
    const theme_base = createTheme(
      {
        ...brandingDesignTokens,
        palette: {
          ...brandingDesignTokens.palette,
          actualMode,
        },
      },
      null,
      {
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: actualMode === 'dark' ? darkScrollbar() : null,
            },
          },
        },
      },
    );
    return theme_base;
  }, [mode]);

  return (
    <MuiThemeProvider theme={theme}>
      <DispatchContext.Provider value={setMode} {...other} />
    </MuiThemeProvider>
  );
};

ThemeProvider.defaultProps = {
  cookieName: 'theme',
  getDesignTokens: () => ({}),
  darkScrollbar: () => null,
  getCookie: () => null,
  setCookie: () => null,
};

ThemeProvider.propTypes = {
  cookieName: PropTypes.string,
  getDesignTokens: PropTypes.func,
  darkScrollbar: PropTypes.func,
  getCookie: PropTypes.func,
  setCookie: PropTypes.func,
};

export const useChangeTheme = () => {
  const dispatch = React.useContext(DispatchContext);
  return React.useCallback(
    (value) => {
      if (['light', 'dark', 'system'].includes(value)) {
        dispatch(value);
      } else {
        throw new Error(
          'changeTheme accepts only "light","dark" and "system" value',
        );
      }
    },
    [dispatch],
  );
};
