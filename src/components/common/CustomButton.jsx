import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '../../ThemeContext';

const CustomButton = ({ children, disabled, onClick, type, sx }) => {
  const { mode } = useTheme();

  return (
    <Button
      type={type}
      variant="contained"
      disabled={disabled}
      onClick={onClick}
      sx={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 500,
        background: mode === 'light'
          ? 'linear-gradient(45deg, #4a9999, #1a1a1a)'
          : 'linear-gradient(45deg, #ff4500, #e0e0e0)',
        color: mode === 'light' ? '#ffffff' : 'text.primary',
        textTransform: 'none',
        borderRadius: 2,
        px: { xs: 2, sm: 3 },
        py: { xs: 0.5, sm: 1 },
        fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
        boxShadow: `0px 4px 12px ${mode === 'light' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 69, 0, 0.3)'}`,
        '&:hover': {
          background: mode === 'light'
            ? 'linear-gradient(45deg, #3a8888, #0a0a0a)'
            : 'linear-gradient(45deg, #e03d00, #d0d0d0)',
          boxShadow: `0px 6px 16px ${mode === 'light' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 69, 0, 0.4)'}`,
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;