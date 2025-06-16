# LicitaSeguro

Portal web para la consulta y visualización de licitaciones públicas y búsqueda de proveedores, desarrollado con React, Vite y Material UI. Permite explorar licitaciones, ver detalles y buscar proveedores por RUT, consumiendo la API oficial de Mercado Público.

---

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Endpoints Consumidos](#endpoints-consumidos)
- [Consideraciones de Seguridad](#consideraciones-de-seguridad)
- [Autor](#autor)

---

## Descripción

**LicitaSeguro** es una SPA (Single Page Application) responsiva que permite:
- Consultar licitaciones públicas filtrando por fecha y estado.
- Visualizar el detalle de cada licitación.
- Buscar proveedores registrados por RUT.
- Navegación fluida y experiencia de usuario moderna.

---

## Características

- **Frontend en React + Vite**
- **UI responsiva** con Material UI (MUI)
- **Consumo de API REST** de Mercado Público
- **Animaciones y transiciones** en cards y navegación
- **Navbar y Footer** adaptativos y navegables
- **Manejo de errores y feedback visual**
- **Código modular y buenas prácticas**

---

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/licitaseguro.git
   cd licitaseguro
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. (Opcional) Crea un archivo `.env` si necesitas variables de entorno.

---

## Uso

Para desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:5173](http://localhost:5173).

---

## Estructura del Proyecto

```
src/
  components/
    Navbar.jsx
    Footer.jsx
    Loader.jsx
    CarrouselSection.jsx
  pages/
    Home.jsx
    Licitaciones.jsx
    DetalleLicitacion.jsx
    Proveedores.jsx
  services/
    api.js
  styles/
    theme.js
  App.jsx
  main.jsx
  index.css
```

---

## Tecnologías Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Material UI (MUI)](https://mui.com/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)

---

## Endpoints Consumidos

- **Listado de licitaciones:**  
  `GET https://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json?fecha={fecha}&estado={estado}&ticket={TICKET}`

- **Detalle de licitación:**  
  `GET https://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json?codigo={codigo}&ticket={TICKET}`

- **Buscar proveedor:**  
  `GET https://api.mercadopublico.cl/servicios/v1/Publico/Empresas/BuscarProveedor?rutempresaproveedor={rut}&ticket={TICKET}`

---

## Consideraciones de Seguridad

- No se almacenan datos sensibles en el frontend.
- El ticket de API está embebido solo para fines académicos.
- Se recomienda ocultar el ticket en producción usando variables de entorno.

---

## Autor

- **Nombre:** Paulina
- **Repositorio:** https://github.com/Pauaua/EXAMENFINAL_FRONTEND

---
## Uso de IA
Se utiliza copilot y DeepSeek para corrección y de código y generación de README


**Este proyecto fue desarrollado como parte del Examen Final de la asignatura de Desarrollo Frontend.**