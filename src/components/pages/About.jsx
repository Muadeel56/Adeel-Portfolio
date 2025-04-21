import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';
import { School, Work, LocationOn } from '@mui/icons-material';
import CardContainer from '../common/CardContainer';
import SectionTitle from '../common/SectionTitle';

const About = () => {
  const { mode, theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
    hover: { 
      scale: 1.03, 
      background: `linear-gradient(90deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`, 
      transition: { duration: 0.3 }
    },
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        textAlign: 'center',
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
      id="about"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle title="About Me" />

        <CardContainer custom={0}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              color: theme.palette.text.secondary,
              lineHeight: 1.6,
              fontSize: '1rem',
              maxWidth: { xs: '90%', sm: '80%', md: '800px' },
              mx: 'auto',
              background: `linear-gradient(90deg, ${theme.palette.text.primary}, ${theme.palette.text.secondary})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            I'm Muhammad Adeel, a passionate Full Stack Developer from Chakwal, Pakistan. I specialize in building dynamic and responsive web and mobile applications using modern technologies like React, Django, and React Native. With a strong foundation in both front-end and back-end development, I enjoy solving complex challenges and delivering clean, efficient, and scalable solutions. Let's collaborate to bring your ideas to life!
          </Typography>
        </CardContainer>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              fontSize: '2.5rem',
              color: theme.palette.text.primary,
              mb: 3,
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            My Journey
          </Typography>
          <List sx={{ maxWidth: { xs: '90%', sm: '600px', md: '700px' }, mx: 'auto' }}>
            {[
              { icon: <LocationOn />, primary: 'Hometown', secondary: 'Chakwal, Pakistan' },
              { icon: <School />, primary: 'Matriculation', secondary: 'Hira Secondary School, Chakwal' },
              { icon: <School />, primary: 'FSc', secondary: 'Royal College of Sciences, Chakwal' },
              { icon: <School />, primary: 'Bachelors', secondary: 'University of Chakwal' },
              { icon: <Work />, primary: 'Full Stack Developer', secondary: 'Pukhtoon Solutions Hub (August 2024)' },
              { icon: <Work />, primary: 'Full Stack Developer', secondary: 'QTO House (September 2024 - Present)' },
              { icon: <Work />, primary: 'Expertise', secondary: 'Full Stack Developer (React, Django, React Native)' },
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <ListItem
                  sx={{
                    py: 1,
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                    pl: 3,
                    borderRadius: 2,
                    mb: 1,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <ListItemIcon>
                    {React.cloneElement(item.icon, { sx: { color: theme.palette.secondary.main, fontSize: '2rem' } })}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.primary}
                    secondary={item.secondary}
                    primaryTypographyProps={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 500,
                      color: theme.palette.text.primary,
                      fontSize: '1rem',
                    }}
                    secondaryTypographyProps={{
                      fontFamily: '"Poppins", sans-serif',
                      color: theme.palette.text.secondary,
                      fontSize: '0.9rem',
                    }}
                  />
                </ListItem>
              </motion.div>
            ))}
          </List>
        </Box>
      </motion.div>
    </Container>
  );
};

export default About;