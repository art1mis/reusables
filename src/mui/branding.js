import { createTheme } from '@mui/material/styles';

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#A5D8FF',
  300: '#66B2FF',
  400: '#3399FF',
  main: '#007FFF', // contrast 3.83:1
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};
const blueDark = {
  50: '#E2EDF8',
  100: '#CEE0F3',
  200: '#91B9E3',
  300: '#5090D3',
  main: '#5090D3',
  400: '#265D97',
  500: '#1E4976',
  600: '#173A5E',
  700: '#132F4C', // contrast 13.64:1
  800: '#001E3C',
  900: '#0A1929',
};
const grey = {
  50: '#F3F6F9',
  100: '#EAEEF3',
  200: '#E5E8EC',
  300: '#D7DCE1',
  400: '#BFC7CF',
  500: '#AAB4BE',
  600: '#7F8E9D',
  700: '#46505A', // contrast 8.21:1
  800: '#2F3A45', // contrast 11.58:1
  900: '#20262D',
};
const systemFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

const defaultTheme = createTheme();

export const getMetaThemeColor = (mode) => {
  const themeColor = {
    light: grey[50],
    dark: blueDark[800],
  };
  return themeColor[mode];
};

export const getDesignTokens = (mode) => ({
  palette: {
    primary: {
      ...blue,
      ...(mode === 'dark' && {
        main: blue[400],
      }),
    },
    divider: mode === 'dark' ? blueDark[700] : grey[200],
    mode,
    ...(mode === 'dark' && {
      background: {
        default: blueDark[800],
        paper: blueDark[900],
      },
    }),
    common: {
      black: '#1D1D1D',
    },
    ...(mode === 'light' && {
      text: {
        primary: grey[900],
        secondary: grey[800],
      },
    }),
    ...(mode === 'dark' && {
      text: {
        primary: '#fff',
        secondary: grey[500],
      },
    }),
    grey,
    error: {
      50: '#FFF0F1',
      100: '#FFDBDE',
      200: '#FFBDC2',
      300: '#FF99A2',
      400: '#FF7A86',
      500: '#FF505F',
      main: '#EB0014', // contrast 4.63:1
      600: '#EB0014',
      700: '#C70011',
      800: '#94000D',
      900: '#570007',
    },
    success: {
      50: '#E9FBF0',
      100: '#C6F6D9',
      200: '#9AEFBC',
      300: '#6AE79C',
      400: '#3EE07F',
      500: '#21CC66',
      600: '#1DB45A',
      ...(mode === 'dark' && {
        main: '#1DB45A', // contrast 6.17:1 (blueDark.800)
      }),
      ...(mode === 'light' && {
        main: '#1AA251', // contrast 3.31:1
      }),
      700: '#1AA251',
      800: '#178D46',
      900: '#0F5C2E',
    },
    warning: {
      50: '#FFF9EB',
      100: '#FFF4DB',
      200: '#FFEDC2',
      300: '#FFE4A3',
      400: '#FFD980',
      500: '#FCC419',
      600: '#FAB005',
      main: '#F1A204', // does not pass constrast ratio
      700: '#F1A204',
      800: '#DB9A00',
      900: '#8F6400',
    },
    svgBg: {
      base: mode === 'dark' ? blueDark[400] : grey[50],
      active: mode === 'dark' ? blueDark[400] : grey[50],
    },
    svgFilled: {
      base: mode === 'dark' ? blueDark[800] : grey[500],
      active: mode === 'dark' ? blue[300] : blue[500],
    },
    svgStroke: {
      base: mode === 'dark' ? blueDark[600] : '#ffffff',
      active: mode === 'dark' ? blue[700] : '#ffffff',
    },
  },
  shape: {
    borderRadius: 10,
  },
  spacing: 10,
  typography: {
    fontFamily: ['"IBM Plex Sans"', ...systemFont].join(','),
    fontFamilyCode: ['"IBM Plex Mono"', ...systemFont].join(','),
    fontFamilyTagline: ['"PlusJakartaSans-ExtraBold"', ...systemFont].join(','),
    fontWeightExtraBold: 800,
    h1: {
      fontFamily: ['"PlusJakartaSans-ExtraBold"', ...systemFont].join(','),
      fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4.5rem)',
      fontWeight: 800,
      lineHeight: 80 / 72,
      ...(mode === 'light' && {
        color: blueDark[900],
      }),
    },
    h2: {
      fontFamily: ['"PlusJakartaSans-ExtraBold"', ...systemFont].join(','),
      fontSize: 'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)',
      fontWeight: 800,
      lineHeight: 44 / 36,
      color: mode === 'dark' ? grey[200] : blueDark[700],
    },
    h3: {
      fontSize: defaultTheme.typography.pxToRem(36),
      lineHeight: 44 / 36,
      letterSpacing: 0,
    },
    h4: {
      fontSize: defaultTheme.typography.pxToRem(28),
      lineHeight: 42 / 28,
      letterSpacing: 0,
    },
    h5: {
      fontSize: defaultTheme.typography.pxToRem(24),
      lineHeight: 36 / 24,
      letterSpacing: 0,
    },
    h6: {
      fontSize: defaultTheme.typography.pxToRem(20),
      lineHeight: 30 / 20,
      letterSpacing: 0,
    },
    button: {
      textTransform: 'initial',
      fontWeight: 700,
      letterSpacing: 0,
    },
    subtitle1: {
      fontSize: defaultTheme.typography.pxToRem(18),
      lineHeight: 24 / 18,
      letterSpacing: 0,
      fontWeight: 500,
    },
    body1: {
      fontSize: defaultTheme.typography.pxToRem(16), // 16px
      lineHeight: 24 / 16,
      letterSpacing: 0,
    },
    body2: {
      fontSize: defaultTheme.typography.pxToRem(14), // 14px
      lineHeight: 21 / 14,
      letterSpacing: 0,
    },
    caption: {
      display: 'inline-block',
      fontSize: defaultTheme.typography.pxToRem(12), // 12px
      lineHeight: 18 / 12,
      letterSpacing: 0,
      fontWeight: 600,
    },
  },
});

const scrollBar = {
  track: '#2b2b2b',
  thumb: '#6b6b6b',
  active: '#959595',
};

export function darkScrollbar(options = scrollBar) {
  return {
    scrollbarColor: `${options.thumb} ${options.track}`,
    '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
      backgroundColor: options.track,
    },
    '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
      borderRadius: 8,
      backgroundColor: options.thumb,
      minHeight: 24,
      border: `3px solid ${options.track}`,
    },
    '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
      backgroundColor: options.active,
    },
    '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
      backgroundColor: options.active,
    },
    '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
      backgroundColor: options.active,
    },
    '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
      backgroundColor: options.track,
    },
  };
}
