import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Typography, Paper, Chip, Stack, Divider, Alert, Box 
} from '@mui/material';
import { getLicitacionDetalle } from '../services/api';
import { Loader } from '../components/Loader';

export const DetalleLicitacion = () => {
  const { codigo } = useParams();
  const [licitacion, setLicitacion] = useState(null);
  const [error, setError] = useState('');

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await getLicitacionDetalle(codigo);
      setLicitacion(data.listado?.[0] || null);
    } catch (err) {
      setError('Error al cargar los detalles. Intente más tarde.');
    }
  };
  fetchData();
}, [codigo]);

  if (error) return <Alert severity="error" sx={{ m: 2 }}>{error}</Alert>;
  if (!licitacion) return <Loader />;

  return (
    <Paper elevation={3} sx={{ p: 3, m: 2 }}>
      <Typography variant="h4" gutterBottom>
        {licitacion.Nombre}
      </Typography>
      
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <Chip label={`Código: ${licitacion.Codigo}`} />
        <Chip 
          label={`Estado: ${licitacion.Estado}`} 
          color={licitacion.Estado === 'Adjudicada' ? 'success' : 'warning'} 
        />
      </Stack>
      
      <Divider sx={{ my: 2 }} />
      
      <Box>
        <Typography variant="h6" gutterBottom>Detalles</Typography>
        <Typography><strong>Fecha:</strong> {licitacion.Fecha}</Typography>
        <Typography><strong>Monto:</strong> ${licitacion.Monto?.toLocaleString() || 'No especificado'}</Typography>
      </Box>
    </Paper>
  );
};