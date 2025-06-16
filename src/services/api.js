import axios from 'axios';

const API_BASE = 'https://api.mercadopublico.cl/servicios/v1/publico';
const TICKET = 'AC3A098B-4CD0-41AF-81A5-41284248419B';

// Listado de licitaciones
export const getLicitaciones = async (fecha, estado) => {
  const response = await axios.get(
    `${API_BASE}/licitaciones.json?fecha=${fecha}&estado=${estado}&ticket=${TICKET}`
  );
  return response.data;
};

// Detalle de licitación
export const getLicitacionDetalle = async (codigo) => {
  const response = await axios.get(
    `${API_BASE}/licitaciones.json?codigo=${codigo}&ticket=${TICKET}`
  );
  return response.data;
};

// Buscar proveedor
export const searchProveedor = async (rut) => {
  const response = await axios.get(
    `${API_BASE}/Empresas/BuscarProveedor?rutempresaproveedor=${rut}&ticket=${TICKET}`
  );
  return response.data;
};