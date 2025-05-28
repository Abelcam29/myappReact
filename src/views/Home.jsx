import React, { useState } from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';
import CustomButton from '../components/CustomButtons';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2, textAlign: 'center' }}>
        <Typography variant="h4" mb={3}>
          Contador Interactivo
        </Typography>
        <Typography variant="h6" mb={2} color="text.secondary">
          Has hecho clic
        </Typography>
        <Chip
          label={`${count} ${count === 1 ? 'vez' : 'veces'}`}
          color="primary"
          variant="filled"
          sx={{ mb: 3, fontSize: '1.2rem', p: 2 }}
        />
        <Box>
          <CustomButton
            onClick={() => setCount(count + 1)}
            size="large"
          >
            Incrementar contador
          </CustomButton>
        </Box>
      </Paper>
    </Box>
  );
}