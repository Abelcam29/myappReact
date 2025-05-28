import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="center"
          sx={{ fontWeight: 500 }}
        >
          &copy; 2025 Frumen App. Todos los derechos reservados.
        </Typography>
        <Typography 
          variant="caption" 
          color="text.secondary" 
          align="center" 
          display="block"
          sx={{ mt: 1, opacity: 0.7 }}
        >
          Desarrollado con React y Material-UI
        </Typography>
      </Container>
    </Box>
  );
}