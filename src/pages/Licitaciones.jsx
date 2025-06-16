import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { getLicitaciones } from '../services/api';
import { Alert } from '@mui/material';

const columns = [
  { field: 'codigo', headerName: 'Código', width: 150 },
  { field: 'nombre', headerName: 'Nombre', width: 300 },
  { field: 'estado', headerName: 'Estado', width: 120 },
];

export const Licitaciones = () => {
  const [licitaciones, setLicitaciones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        // Usa una fecha pasada y estado válido
        const data = await getLicitaciones('01052025', 'adjudicada');
        setLicitaciones(data.listado || []);
      } catch (err) {
        setError('No se pudieron cargar las licitaciones. Intenta con otra fecha o estado.');
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      {error && <Alert severity="error">{error}</Alert>}
      <DataGrid
        rows={licitaciones}
        columns={columns}
        loading={loading}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        getRowId={(row) => row.codigo || row.Codigo || Math.random()}
        autoHeight
      />
    </div>
  );
};