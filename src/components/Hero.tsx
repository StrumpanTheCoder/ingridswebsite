// filepath: c:\repo\ingridswebsite\src\components\Hero.tsx
import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand';

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
    Hi, I'm Ingrid {' '}
        <WavingHandIcon
          sx={{
            fontSize: '1em', // Adjust the size of the icon
            color: 'primary.light', // Use a color from your theme
          }}
        />{' '}
      </Typography>
      <Typography variant="h5" gutterBottom>
     A passionate full stack developer
      </Typography>
      <Button variant="contained" color="secondary" size="large">
        Learn More About Me
      </Button>
    </Box>
  );
};

export default Hero;