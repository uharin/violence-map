import { createTheme } from '@mui/material/styles';

export const appBarTheme = createTheme();

export const appBarStyles = {
  root: {
    zIndex: appBarTheme.zIndex.drawer + 1,
    transition: appBarTheme.transitions.create(['width', 'margin'], {
      easing: appBarTheme.transitions.easing.sharp,
      duration: appBarTheme.transitions.duration.leavingScreen,
    }),
  },
};

export default appBarStyles;