import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#2E7D32' }, // Verde corporativo
    secondary: { main: '#FF5722' }, // Naranja para acciones
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});