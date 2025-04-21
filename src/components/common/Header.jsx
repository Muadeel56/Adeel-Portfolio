import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, Divider } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../../ThemeContext';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { mode, theme } = useTheme();

  const menuItems = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Services', section: 'services' },
    { label: 'Projects', section: 'projects' },
    { label: 'Contact', section: 'contact' },
  ];

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Animation variants for the header
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Animation variants for menu items
  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
    hover: {
      background: '#E5533D',
      scale: 1.05,
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      transition: {
        background: { duration: 0.3, ease: 'easeInOut' },
        scale: { duration: 0.3, ease: 'easeInOut' },
        boxShadow: { duration: 0.3, ease: 'easeInOut' },
      },
    },
  };

  // Animation variants for drawer items
  const drawerItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
    hover: {
      background: '#E5533D',
      scale: 1.03,
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
      transition: {
        background: { duration: 0.3, ease: 'easeInOut' },
        scale: { duration: 0.3, ease: 'easeInOut' },
        boxShadow: { duration: 0.3, ease: 'easeInOut' },
      },
    },
  };

  const list = () => (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <Box
        sx={{
          width: { xs: 240, sm: 280, md: 320 },
          bgcolor: 'background.paper',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backdropFilter: 'blur(15px)',
          background: mode === 'light'
            ? 'rgba(255, 255, 255, 0.9)'
            : 'rgba(43, 43, 43, 0.9)',
          borderLeft: `2px solid ${theme.palette.primary.main}20`,
          boxShadow: `0 0 20px ${theme.palette.primary.main}20`,
        }}
        role="presentation"
      >
        {/* Drawer Header */}
        <Box
          sx={{
            p: { xs: 2, sm: 2.5 },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            boxShadow: `0 6px 15px ${theme.palette.primary.main}40`,
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              letterSpacing: 1.5,
              color: mode === 'light' ? '#ffffff' : theme.palette.text.primary,
              textShadow: mode === 'light'
                ? '0 0 8px rgba(0, 0, 0, 0.5)'
                : `0 0 8px ${theme.palette.primary.main}40`,
            }}
          >
            Adeel Portfolio
          </Typography>
          <motion.div whileHover={{ rotate: 180 }} whileTap={{ scale: 0.9 }}>
            <IconButton onClick={toggleDrawer(false)} sx={{ color: '#ffffff' }}>
              <CloseIcon sx={{ fontSize: { xs: '1.75rem', sm: '2rem' } }} />
            </IconButton>
          </motion.div>
        </Box>
        <Divider sx={{ bgcolor: theme.palette.secondary.main, height: '3px', mx: 2, my: 1 }} />

        {/* Menu Items */}
        <List sx={{ flexGrow: 1, py: { xs: 2, sm: 3 } }}>
          {menuItems.map((item, index) => (
            <motion.div
              key={item.label}
              custom={index}
              variants={drawerItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              sx={{
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <ListItem
                onClick={() => handleScroll(item.section)}
                sx={{
                  py: { xs: 1.5, sm: 2 },
                  px: { xs: 3, sm: 4 },
                  cursor: 'pointer',
                  borderLeft: `4px solid transparent`,
                  borderRadius: 2,
                  my: 0.5,
                  background: '#FF6347',
                  color: '#ffffff',
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 500,
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    textAlign: 'left',
                  }}
                />
              </ListItem>
            </motion.div>
          ))}
        </List>

        {/* Theme Toggle at the Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Box
            sx={{
              p: { xs: 2, sm: 2.5 },
              borderTop: `2px solid ${theme.palette.primary.main}20`,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
              display: 'flex',
              justifyContent: 'center',
              boxShadow: `0 -4px 15px ${theme.palette.primary.main}20`,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          >
            <ThemeToggle />
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );

  return (
    <>
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <AppBar
          position="fixed"
          sx={{
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            boxShadow: `0px 8px 30px rgba(0, 0, 0, 0.3)`,
            backdropFilter: 'blur(15px)',
            borderBottom: `2px solid transparent`,
            borderImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}) 1`,
            zIndex: 1200,
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: { xs: 1.5, sm: 2 }, px: { xs: 2, sm: 3 } }}>
            {/* Logo/Title */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Typography
                variant="h5"
                onClick={() => handleScroll('home')}
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 700,
                  color: mode === 'light' ? '#ffffff' : theme.palette.text.primary,
                  letterSpacing: { xs: 1.5, sm: 2 },
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2rem' },
                  textShadow: mode === 'light'
                    ? '0 0 10px rgba(0, 0, 0, 0.5)'
                    : `0 0 10px ${theme.palette.primary.main}40`,
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '3px',
                    bottom: -4,
                    left: '50%',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    transition: 'all 0.4s ease-in-out',
                  },
                  '&:hover:after': {
                    width: '100%',
                    left: '0%',
                  },
                }}
              >
                Adeel Portfolio
              </Typography>
            </motion.div>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: { md: 2.5, lg: 4 } }}>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  custom={index}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Button
                    onClick={() => handleScroll(item.section)}
                    sx={{
                      color: '#ffffff',
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      fontSize: { md: '1rem', lg: '1.1rem' },
                      px: { md: 2, lg: 2.5 },
                      py: 1,
                      borderRadius: '12px',
                      background: '#FF6347',
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 360 }}
              >
                <ThemeToggle />
              </motion.div>
            </Box>

            {/* Mobile Menu Icon */}
            <motion.div
              whileHover={{ rotate: 90, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer(true)}
                sx={{ display: { xs: 'flex', md: 'none' }, color: '#ffffff' }}
              >
                <MenuIcon sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }} />
              </IconButton>
            </motion.div>
          </Toolbar>
        </AppBar>
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
};

export default Header;