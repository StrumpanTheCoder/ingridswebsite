// filepath: c:\repo\ingridswebsite\src\components\Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '16px',
        backgroundColor: 'primary.dark',
        color: 'white',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Ingrid's Website. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;