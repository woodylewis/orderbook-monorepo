import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';
// A custom theme for this app --
const theme = createMuiTheme({
  typography: {
    fontFamily: ['Archivo', 'Arial', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#e22d6c',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
