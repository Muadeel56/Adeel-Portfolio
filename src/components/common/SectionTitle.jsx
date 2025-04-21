import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';

const SectionTitle = ({ title }) => {
  const { mode, theme } = useTheme();

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
          color: theme.palette.text.primary, // Use theme's text color for readability
          textShadow: `3px 3px 10px ${theme.palette.primary.main}40`, // Use primary color for shadow
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
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, // Use theme's gradient
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