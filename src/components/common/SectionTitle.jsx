import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';

const SectionTitle = ({ title }) => {
  const { mode } = useTheme();

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div variants={titleVariants} initial="hidden" animate="visible">
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' },
          background: mode === 'light'
            ? 'linear-gradient(90deg, #1a1a1a, #4a9999)'
            : 'linear-gradient(90deg, #e0e0e0, #ff4500)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: `3px 3px 10px ${mode === 'light' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 69, 0, 0.4)'}`,
          mb: { xs: 3, sm: 4, md: 5 },
          position: 'relative',
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '4px',
            background: mode === 'light'
              ? 'linear-gradient(90deg, #4a9999, #1a1a1a)'
              : 'linear-gradient(90deg, #ff4500, #e0e0e0)',
            borderRadius: '2px',
          },
        }}
      >
        {title}
      </Typography>
    </motion.div>
  );
};

export default SectionTitle;