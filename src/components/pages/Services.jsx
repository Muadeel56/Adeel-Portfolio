import React from 'react';
import { Container, Typography, Box, Grid, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaMobileAlt 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiMui, 
  SiDjango, 
  SiPostgresql, 
  SiMysql 
} from 'react-icons/si';
import { SiDjango as SiDjangoRest } from 'react-icons/si';
import CardContainer from '../common/CardContainer';
import SectionTitle from '../common/SectionTitle';

const Services = () => {
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
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
    hover: { 
      scale: 1.02, 
      color: theme.palette.secondary.main,
      transition: { duration: 0.3 }
    },
  };

  const frontendTechnologies = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'React Native', icon: <FaMobileAlt /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'MUI', icon: <SiMui /> },
  ];

  const backendTechnologies = [
    { name: 'Django', icon: <SiDjango /> },
    { name: 'Django REST Framework', icon: <SiDjangoRest /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
  ];

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
      id="services"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle title="My Services" />

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          <Grid item xs={12} sm={6} md={5} lg={4}>
            <CardContainer custom={0}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  fontSize: '1.5rem',
                  mb: 2,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Frontend Development
              </Typography>
              <List>
                {frontendTechnologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemIcon>
                        {React.cloneElement(tech.icon, { style: { color: theme.palette.primary.main, fontSize: '1.5rem' } })}
                      </ListItemIcon>
                      <ListItemText
                        primary={tech.name}
                        primaryTypographyProps={{
                          fontFamily: '"Poppins", sans-serif',
                          fontWeight: 500,
                          color: theme.palette.text.primary,
                          fontSize: '1rem',
                        }}
                      />
                    </ListItem>
                  </motion.div>
                ))}
              </List>
            </CardContainer>
          </Grid>

          <Grid item xs={12} sm={6} md={5} lg={4}>
            <CardContainer custom={1}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  fontSize: '1.5rem',
                  mb: 2,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Backend Development
              </Typography>
              <List>
                {backendTechnologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemIcon>
                        {React.cloneElement(tech.icon, { style: { color: theme.palette.primary.main, fontSize: '1.5rem' } })}
                      </ListItemIcon>
                      <ListItemText
                        primary={tech.name}
                        primaryTypographyProps={{
                          fontFamily: '"Poppins", sans-serif',
                          fontWeight: 500,
                          color: theme.palette.text.primary,
                          fontSize: '1rem',
                        }}
                      />
                    </ListItem>
                  </motion.div>
                ))}
              </List>
              <Box sx={{ mt: 3 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    fontSize: '1.5rem',
                    mb: 1,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Notable Project: Attendance Portal
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                    fontSize: '1rem',
                    textAlign: 'left',
                  }}
                >
                  A robust attendance management system designed for office use, built with Django and integrated with MySQL/PostgreSQL. Key features include:
                </Typography>
                <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                  {[
                    "Check-In/Check-Out & Breaks: Employees can mark their check-in, check-out, break-in, and break-out times.",
                    "Daily Attendance Records: View daily attendance in a list format.",
                    "Export Functionality: Export attendance records to Excel or PDF.",
                    "Visual Insights: Display attendance data in bar charts and a calendar view for better tracking.",
                    "Profile Page: Employees can view their profile details, including name, role, department, assigned shift, and break timing.",
                    "Monthly Summary: A detailed summary calculating expected working hours, actual working hours, buffer hours, under hours, and overtime hours.",
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0, transition: { delay: index * 0.1, duration: 0.5 } }}
                      whileHover={{ color: theme.palette.secondary.main, x: 5 }}
                    >
                      <Typography
                        sx={{
                          fontFamily: '"Poppins", sans-serif',
                          fontWeight: 400,
                          color: theme.palette.text.secondary,
                          lineHeight: 1.6,
                          fontSize: '1rem',
                        }}
                      >
                        <strong>{feature.split(':')[0]}:</strong> {feature.split(':')[1]}
                      </Typography>
                    </motion.li>
                  ))}
                </Box>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                    fontSize: '1rem',
                    mt: 1,
                    textAlign: 'left',
                  }}
                >
                  This portal streamlines attendance tracking and provides actionable insights for both employees and management.
                </Typography>
              </Box>
            </CardContainer>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Services;