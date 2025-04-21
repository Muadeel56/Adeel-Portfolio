import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Header from './components/common/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import ContactUs from './components/pages/ContactUs';
import { useTheme } from './ThemeContext';

function App() {
  const { mode } = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: mode === 'light'
          ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
          : 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)',
        overflowX: 'hidden',
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: mode === 'light'
            ? 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,69,0,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <CssBaseline />
      <Header />
      <Box
        sx={{
          pt: { xs: 10, sm: 12, md: 14 }, // Increased padding to account for fixed header
        }}
      >
        <Box sx={{ mb: { xs: 6, sm: 8, md: 10 } }}>
          <Home />
        </Box>
        <Box sx={{ mb: { xs: 6, sm: 8, md: 10 } }}>
          <About />
        </Box>
        <Box sx={{ mb: { xs: 6, sm: 8, md: 10 } }}>
          <Services />
        </Box>
        <Box sx={{ mb: { xs: 6, sm: 8, md: 10 } }}>
          <Projects />
        </Box>
        <Box sx={{ mb: { xs: 6, sm: 8, md: 10 } }}>
          <ContactUs />
        </Box>
      </Box>
    </Box>
  );
}

export default App;