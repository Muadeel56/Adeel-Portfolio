import React, { createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('light');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: { main: '#4B0082' }, // Deep purple for primary in light mode
                secondary: { main: '#FF4040' }, // Reddish hue for secondary
                background: { default: '#F8F9FA', paper: '#FFFFFF' }, // Off-white and white background
                text: { primary: '#2D3436', secondary: '#6B5EAA' }, // Deep gray and muted purple for text
              }
            : {
                primary: { main: '#8b0000' }, // Dark red for primary in dark mode
                secondary: { main: '#ff4500' }, // Bright red-orange for secondary
                background: { default: '#1a1a1a', paper: '#2b2b2b' }, // Black and dark gray background
                text: { primary: '#e0e0e0', secondary: '#b0b0b0' }, // Lighter text for contrast
              }),
        },
        typography: {
          fontFamily: '"Poppins", sans-serif',
          h1: { fontWeight: 700 },
          h2: { fontWeight: 600 },
          h5: { fontWeight: 500 },
          body1: { fontWeight: 400 },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, theme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);