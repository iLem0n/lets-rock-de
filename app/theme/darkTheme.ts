import { createTheme } from '@mui/material/styles';

// Create a dark theme based on the colors defined in globals.css
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d5d5d5', // Using the foreground color from globals.css
    },
    secondary: {
      main: '#90caf9', // A light blue that works well in dark themes
    },
    background: {
      default: '#323232', // Using the background color from globals.css
      paper: '#424242', // A slightly lighter shade for paper elements
    },
    text: {
      primary: '#9b9b9b', // Using the foreground color from globals.css
      secondary: '#a0a0a0', // A slightly darker shade for secondary text
    },
  },
  typography: {
    fontFamily: 'var(---font-jost), Arial, Helvetica, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold'
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 'bold'
    },
    body1: {
        fontSize: '1.5rem', // Default body font size
        fontWeight: 600,
        textAlign: 'justify'
    },
    body2: {
      fontSize: '1.75rem',
      fontWeight: 600,
      textAlign: 'justify'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevents uppercase text in buttons
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // Removes the default gradient
        },
      },
    },
  },
});

export default darkTheme;