import { createTheme } from "@mui/material";

export const themeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#ecf1f5',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
});

export const themeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
});