import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { useTheme } from '../../ThemeContext';

const SocialLinks = ({ custom, linkedInUrl }) => {
  const { mode, theme } = useTheme();

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
    hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const iconStyle = {
    color: theme.palette.primary.main,
    bgcolor: mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      bgcolor: 'secondary.main',
      color: mode === 'light' ? '#ffffff' : 'text.primary',
      boxShadow: `0px 4px 12px ${theme.palette.secondary.main}60`,
    },
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
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
            color: 'text.primary',
            mb: { xs: 1.5, sm: 2 },
            fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem' },
          }}
        >
          Follow Me
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 1, sm: 2 } }}>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
            <IconButton
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={iconStyle}
            >
              <FaFacebookF size={24} />
            </IconButton>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
            <IconButton
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={iconStyle}
            >
              <FaInstagram size={24} />
            </IconButton>
          </motion.div>
          {linkedInUrl && (
            <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
              <IconButton
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={iconStyle}
              >
                <LinkedIn sx={{ fontSize: 28 }} />
              </IconButton>
            </motion.div>
          )}
        </Box>
      </Box>
    </motion.div>
  );
};

export default SocialLinks;