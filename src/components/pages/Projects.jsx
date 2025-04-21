import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, Chip, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';
import CustomButton from '../common/CustomButton';
import SectionTitle from '../common/SectionTitle';

import qtohouseImage from '../../assets/qtohouse.png';
import qtohousePkImage from '../../assets/qtohousepk.png';
import portal from '../../assets/portalPresentation.jpeg';
import pshImage from '../../assets/psh.png';
import geoguardImage from '../../assets/geoguard.png';

const Projects = () => {
  const { mode, theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
    hover: { 
      scale: 1.05, 
      boxShadow: `0px 20px 50px ${theme.palette.primary.main}40`,
      borderColor: theme.palette.secondary.main,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const projects = [
    {
      title: 'QTO House',
      description: 'A comprehensive website for QTO House, a civil engineering and construction company based in Lahore, Punjab. The site showcases their services, projects, and expertise in commercial and residential construction.',
      link: 'https://qtohouse.com/',
      image: qtohouseImage,
      techStack: ['React', 'MUI', 'Tailwind CSS'],
    },
    {
      title: 'QTO House Pakistan',
      description: 'The Pakistan-specific version of the QTO House website, tailored for local clients. It provides detailed information about their construction services and projects in Pakistan.',
      link: 'https://qtohouse.com.pk/',
      image: qtohousePkImage,
      techStack: ['React', 'MUI', 'Tailwind CSS'],
    },
    {
      title: 'Attendance Portal',
      description: 'A locally deployed attendance management system for office use, built to streamline employee tracking. Key features include check-in/check-out, break-in/break-out, daily attendance records, export to Excel/PDF, bar chart and calendar views, and a monthly summary.',
      link: null,
      image: portal,
      techStack: ['React', 'Django', 'PostgreSQL'],
    },
    {
      title: 'Geofencing Web Application (FYP)',
      description: 'A Final Year Project focused on employee attendance tracking using geofencing technology. Employees can check in and out within a designated geofenced area, with features like working hours calculation and an admin panel. Built with React, Django, and MySQL/PostgreSQL.',
      link: 'https://geoguard-react.vercel.app/login',
      image: geoguardImage,
      techStack: ['React', 'Django', 'React Native', 'PostgreSQL'],
    },
    {
      title: 'Pukhtoon Solutions Hub',
      description: 'The official website for Pukhtoon Solutions Hub, my previous company. It showcases their services, portfolio, and contact information with a modern, responsive design. Built using React, Tailwind CSS, and MUI.',
      link: 'https://pukhtoon-solutions-hub-website-react.vercel.app/form',
      image: pshImage,
      techStack: ['React', 'Tailwind CSS', 'MUI'],
    },
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
      id="projects"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle title="My Projects" />

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={project.title}>
              <motion.div
                variants={cardVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <Card
                  sx={{
                    borderRadius: 16,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    background: theme.palette.background.paper,
                    boxShadow: `0px 10px 30px ${theme.palette.primary.main}20`,
                    border: `2px solid transparent`,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardActionArea
                    sx={{
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'stretch',
                    }}
                    {...(project.link ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={`${project.title} homepage`}
                        sx={{
                          objectFit: 'cover',
                          borderTopLeftRadius: 16,
                          borderTopRightRadius: 16,
                          height: { xs: 160, sm: 180, md: 200 },
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(to bottom, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}80)`,
                          transition: 'background 0.3s ease-in-out',
                          '&:hover': {
                            background: `linear-gradient(to bottom, ${theme.palette.primary.main}40, ${theme.palette.secondary.main}A0)`,
                          },
                        }}
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 2 }}>
                      <Typography
                        variant="h3"
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
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: '"Poppins", sans-serif',
                          fontWeight: 400,
                          color: theme.palette.text.secondary,
                          lineHeight: 1.6,
                          fontSize: '1rem',
                          mb: 2,
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.techStack.map((tech) => (
                          <motion.div
                            key={tech}
                            whileHover={{ scale: 1.1, backgroundColor: theme.palette.secondary.main }}
                            transition={{ duration: 0.2 }}
                          >
                            <Chip
                              label={tech}
                              size="small"
                              sx={{
                                fontFamily: '"Poppins", sans-serif',
                                fontSize: '0.8rem',
                                background: theme.palette.primary.main,
                                color: theme.palette.background.paper,
                                boxShadow: `0px 4px 12px ${theme.palette.primary.main}40`,
                                transition: 'all 0.3s ease',
                              }}
                            />
                          </motion.div>
                        ))}
                      </Box>
                    </CardContent>
                  </CardActionArea>
                  {project.link && (
                    <Box sx={{ p: 2, pt: 0 }}>
                      <CustomButton
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          color: theme.palette.background.paper,
                          boxShadow: `0px 4px 12px ${theme.palette.primary.main}40`,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                            boxShadow: `0px 8px 20px ${theme.palette.secondary.main}60`,
                          },
                        }}
                      >
                        Visit Site
                      </CustomButton>
                    </Box>
                  )}
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Projects;