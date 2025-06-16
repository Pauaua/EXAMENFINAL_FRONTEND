import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Licitaciones } from './pages/Licitaciones';
import { DetalleLicitacion } from './pages/DetalleLicitacion';
import { Proveedores } from './pages/Proveedores';
import { theme } from './styles/theme';
import { Box } from '@mui/system';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, p: { xs: 1, sm: 2, md: 3 }, width: '100%' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/licitaciones" element={<Licitaciones />} />
              <Route path="/licitaciones/:codigo" element={<DetalleLicitacion />} />
              <Route path="/proveedores" element={<Proveedores />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;