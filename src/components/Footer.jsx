import { Box, Typography, Link as MuiLink, Grid, useMediaQuery } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export const Footer = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        px: 2, 
        mt: 'auto', 
        backgroundColor: 'primary.main', 
        color: 'white' 
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            gutterBottom
            component={RouterLink}
            to="/"
            sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}
          >
            LicitaSeguro
          </Typography>
          <Typography variant="body2">
            Información transparente sobre licitaciones públicas en Chile.
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" gutterBottom>
            Enlaces útiles
          </Typography>
          <MuiLink component={RouterLink} to="/" color="inherit" display="block" underline="none">Inicio</MuiLink>
          <MuiLink component={RouterLink} to="/licitaciones" color="inherit" display="block" underline="none">Licitaciones</MuiLink>
          <MuiLink component={RouterLink} to="/proveedores" color="inherit" display="block" underline="none">Proveedores</MuiLink>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" gutterBottom>
            Síguenos
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <MuiLink href="#" color="inherit"><Facebook /></MuiLink>
            <MuiLink href="#" color="inherit"><Twitter /></MuiLink>
            <MuiLink href="#" color="inherit"><LinkedIn /></MuiLink>
          </Box>
          <Typography variant="caption" display="block" sx={{ mt: 1 }}>
            © {new Date().getFullYear()} LicitaSeguro. Todos los derechos reservados.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};