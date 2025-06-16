import { TextField, Button, Box, Typography, CircularProgress } from '@mui/material';
import { searchProveedor } from '../services/api';
import { useState } from 'react'; // Asegúrate de importar useState

export const Proveedores = () => {
  const [rut, setRut] = useState('');
  const [error, setError] = useState('');
  const [proveedor, setProveedor] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^(\d{1,3}(?:\.\d{3}){2}-[\dkK])$/.test(rut)) { // Corrección aquí: cerrar el paréntesis antes de $
      setError('RUT inválido (ej: 12.345.678-9)');
      return;
    }
    setLoading(true);
    try {
      const data = await searchProveedor(rut);
      setProveedor(data.ListadoEmpresas[0]);
    } catch (err) {
      setError('Proveedor no encontrado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        label="RUT Proveedor"
        value={rut}
        onChange={(e) => setRut(e.target.value)}
        error={!!error}
        helperText={error}
        fullWidth
        required
        margin="normal"
        inputProps={{ 'aria-label': 'Ingrese RUT del proveedor' }}
      />
      <Button type="submit" variant="contained" disabled={loading}>
        {loading ? <CircularProgress size={24} /> : 'Buscar'}
      </Button>
      {proveedor && (
        <Typography sx={{ mt: 2 }}>
          Proveedor: {proveedor.NombreEmpresa}
        </Typography>
      )}
    </Box>
  );
};