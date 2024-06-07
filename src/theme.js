import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#4CAF50' },
    secondary: { main: '#9E9E9E' },
    background: {
      default: '#121212', // Dark background
      paper: '#1E1E1E', // Slightly lighter background for paper elements
    },
    text: {
      primary: '#E0E0E0', // Light gray text on dark background
      secondary: '#BDBDBD', // Slightly darker gray for secondary text
    },
    divider: 'rgba(255, 255, 255, 0.12)', // Light divider color on dark background
  },
});

console.log(darkTheme);

export default darkTheme;
