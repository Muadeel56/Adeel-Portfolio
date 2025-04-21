import React from 'react';
import { Container, Typography, Avatar, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';
import profileImage from '../../assets/profile.avif';

const Home = () => {
  const { mode, theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
    hover: { 
      scale: 1.05, 
      rotate: 3, 
      boxShadow: `0px 15px 40px ${theme.palette.primary.main}40`, 
      borderColor: theme.palette.secondary.main,
      transition: { duration: 0.3 }
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.3 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        borderRadius: 16,
        boxShadow: `0px 12px 40px ${theme.palette.primary.main}20`,
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 16,
          border: `2px solid transparent`,
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}) border-box`,
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        },
      }}
      id="home"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={8} md={4} lg={3}>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Avatar
                src={profileImage}
                alt="Muhammad Adeel"
                sx={{
                  width: { xs: 120, sm: 160, md: 200, lg: 250 },
                  height: { xs: 120, sm: 160, md: 200, lg: 250 },
                  margin: '0 auto',
                  border: `4px solid ${theme.palette.primary.main}`,
                  boxShadow: `0px 10px 30px ${theme.palette.primary.main}40`,
                  transition: 'all 0.3s ease-in-out',
                  borderRadius: '50%',
                }}
              />
            </motion.div>
          </Grid>

          <Grid item xs={12} md={8} lg={9}>
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <Box sx={{ textAlign: { xs: 'center', md: 'left' }, px: { xs: 1, sm: 2, md: 3 } }}>
                <motion.div variants={childVariants}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 700,
                      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                      color: theme.palette.text.primary,
                      mb: 2,
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Hi, I'm Muhammad Adeel
                  </Typography>
                </motion.div>
                <motion.div variants={childVariants}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 500,
                      color: theme.palette.secondary.main,
                      fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                      mb: 2,
                    }}
                  >
                    Full Stack Developer
                  </Typography>
                </motion.div>
                <motion.div variants={childVariants}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 400,
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6,
                      fontSize: '1rem',
                      maxWidth: { xs: '90%', sm: '80%', md: '600px' },
                      mx: { xs: 'auto', md: 0 },
                    }}
                  >
                    Welcome to my portfolio! I'm passionate about building innovative and scalable web applications.
                  </Typography>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Home;