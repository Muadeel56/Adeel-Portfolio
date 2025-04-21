import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';
import emailjs from '@emailjs/browser';
import CardContainer from '../common/CardContainer';
import CustomButton from '../common/CustomButton';
import CustomTextField from '../common/CustomTextField';
import SectionTitle from '../common/SectionTitle';
import SocialLinks from '../common/SocialLinks';

const ContactUs = () => {
  const { mode, theme } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [feedback, setFeedback] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFeedback({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFeedback({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsLoading(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.send(serviceId, templateId, {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }, userId)
      .then((response) => {
        setFeedback({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setFeedback({ type: 'error', message: 'Failed to send message. Please try again later.' });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  // LinkedIn link to be added
  const linkedInUrl = 'https://www.linkedin.com/in/muhammad-adeel-b7224a319/';

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
      id="contact"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle title="Contact Me" />

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
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
                Get in Touch
              </Typography>
              {feedback && (
                <Alert severity={feedback.type} sx={{ mb: 2 }}>
                  {feedback.message}
                </Alert>
              )}
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
              >
                <CustomTextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: theme.palette.primary.main },
                      '&:hover fieldset': { borderColor: theme.palette.secondary.main },
                      '&.Mui-focused fieldset': { borderColor: theme.palette.secondary.main },
                    },
                    '& .MuiInputLabel-root': { color: theme.palette.text.secondary },
                    '& .MuiInputLabel-root.Mui-focused': { color: theme.palette.secondary.main },
                  }}
                />
                <CustomTextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: theme.palette.primary.main },
                      '&:hover fieldset': { borderColor: theme.palette.secondary.main },
                      '&.Mui-focused fieldset': { borderColor: theme.palette.secondary.main },
                    },
                    '& .MuiInputLabel-root': { color: theme.palette.text.secondary },
                    '& .MuiInputLabel-root.Mui-focused': { color: theme.palette.secondary.main },
                  }}
                />
                <CustomTextField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: theme.palette.primary.main },
                      '&:hover fieldset': { borderColor: theme.palette.secondary.main },
                      '&.Mui-focused fieldset': { borderColor: theme.palette.secondary.main },
                    },
                    '& .MuiInputLabel-root': { color: theme.palette.text.secondary },
                    '& .MuiInputLabel-root.Mui-focused': { color: theme.palette.secondary.main },
                  }}
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <CustomButton
                    type="submit"
                    disabled={isLoading}
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
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </CustomButton>
                </motion.div>
              </Box>
            </CardContainer>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <SocialLinks custom={1} linkedInUrl={linkedInUrl} />
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default ContactUs;