// filepath: c:\repo\ingridswebsite\src\components\Hero.tsx
import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '64px 16px',
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Typography variant="h2" gutterBottom>
        Hi, I'm Ingrid!
      </Typography>
      <Typography variant="h5" gutterBottom>
        A passionate developer and designer.
      </Typography>
      <Button variant="contained" color="secondary" size="large">
        Learn More About Me
      </Button>
    </Box>
  );
};

export default Hero;