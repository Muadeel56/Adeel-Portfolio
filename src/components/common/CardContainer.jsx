import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';

const CardContainer = ({ children, custom, sx }) => {
  const { mode } = useTheme();

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
    hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      variants={itemVariants}
      custom={custom}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <Box
        sx={{
          p: { xs: 2, sm: 3, md: 4 },
          bgcolor: 'background.paper',
          borderRadius: 3,
          boxShadow: `0px 6px 20px ${mode === 'light' ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 69, 0, 0.2)'}`,
          background: mode === 'light'
            ? 'rgba(255, 255, 255, 0.95)'
            : 'rgba(43, 43, 43, 0.95)',
          backdropFilter: 'blur(8px)',
          border: `1px solid ${mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 69, 0, 0.15)'}`,
          ...sx,
        }}
      >
        {children}
      </Box>
    </motion.div>
  );
};

export default CardContainer;