import { createTheme } from '@mui/material/styles';
import { grey, red, teal } from '@mui/material/colors';

// Create a theme instance.
const lightTheme = createTheme({
  typography: {
    fontFamily: `"Source Sans Pro", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 16,
    button: {
      textTransform: 'none'
    },
  },
  palette: {
    primary: {
      main: '#2baba8',
      light: '#2bdbd8',
      contrastText: '#fff'
    },
    background: {
      default: '#fff',
      paper: '#eee'
    },
    // secondary: {
    //   main: '#19857b',
    // },
    // error: {
    //   main: red.A400,
    // },
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: `"Source Sans Pro", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 16,
    button: {
      textTransform: 'none'
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: teal[700],
      light: teal[100],
      // dark: teal[900]
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e'
    },
    // secondary: {
    //   main: '#19857b',
    // },
    // error: {
    //   main: red.A400,
    // },
  },
});

export { lightTheme, darkTheme };
