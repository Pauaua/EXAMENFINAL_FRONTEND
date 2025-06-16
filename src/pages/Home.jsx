import { Grid, Typography, Button, Card, CardContent, useMediaQuery, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CarrouselSection from '../components/CarrouselSection';
import { useState, useEffect } from 'react';

const cardHoverStyle = {
  transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s cubic-bezier(.25,.8,.25,1)',
  '&:hover': {
    transform: 'translateY(-10px) scale(1.03)',
    boxShadow: 6,
  },
};

export const Home = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const navigate = useNavigate();
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    setShowCards(true);
  }, []);

  return (
    <div>
      <CarrouselSection/>
      <Grid container spacing={3} sx={{ px: isMobile ? 2 : 5, py: 4 }}>
        {/* Título */}
        <Grid item xs={12}>
          <Typography
            variant={isMobile ? 'h4' : 'h2'}
            gutterBottom
            align="center"
            sx={{ mt: 4, mb: 4, px: 2 }} // margen y padding superior/inferior
          >
            Portal de Licitaciones Públicas
          </Typography>
        </Grid>
        {/* Cards */}
        <Grid item xs={12} container spacing={3}>
          <Grid item xs={12} md={6}>
            <Fade in={showCards} timeout={800}>
              <Card elevation={3} sx={cardHoverStyle}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>Licitaciones</Typography>
                  <Typography sx={{ mb: 2 }}>
                    Consulta y filtra licitaciones activas en Mercado Público.
                  </Typography>
                  <Button 
                    variant="contained" 
                    onClick={() => navigate('/licitaciones')}
                    fullWidth={isMobile}
                  >
                    Explorar
                  </Button>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade in={showCards} timeout={1200}>
              <Card elevation={3} sx={cardHoverStyle}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>Proveedores</Typography>
                  <Typography sx={{ mb: 2 }}>
                    Busca proveedores registrados por RUT.
                  </Typography>
                  <Button 
                    variant="contained" 
                    onClick={() => navigate('/proveedores')}
                    fullWidth={isMobile}
                  >
                    Buscar
                  </Button>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};