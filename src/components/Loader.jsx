import { Backdrop, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/material';

export const Loader = ({ message = "Cargando..." }) => {
  return (
    <Backdrop open sx={{ color: '#fff', zIndex: 9999 }}>
      <Box textAlign="center">
        <CircularProgress color="inherit" />
        <Typography variant="h6" sx={{ mt: 2 }}>{message}</Typography>
      </Box>
    </Backdrop>
  );
};