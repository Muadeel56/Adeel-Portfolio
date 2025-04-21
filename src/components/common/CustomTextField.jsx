import React from 'react';
import { TextField } from '@mui/material';
import { useTheme } from '../../ThemeContext';

const CustomTextField = (props) => {
  const { mode, theme } = useTheme();

  return (
    <TextField
      variant="outlined"
      fullWidth
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
          background: mode === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.1)',
          fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
          '&:hover fieldset': {
            borderColor: theme.palette.secondary.main,
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.secondary.main,
          },
        },
        '& .MuiInputLabel-root': {
          fontFamily: '"Poppins", sans-serif',
          color: 'text.secondary',
          fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
          '&.Mui-focused': {
            color: theme.palette.secondary.main,
          },
        },
      }}
      {...props}
    />
  );
};

export default CustomTextField;