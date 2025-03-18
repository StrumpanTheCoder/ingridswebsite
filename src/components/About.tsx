// filepath: c:\repo\ingridswebsite\src\components\About.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const About = () => {
  return (
    <Card sx={{ margin: '16px', padding: '16px' }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
          I'm a software developer with a passion for creating beautiful and functional web applications. I love working with modern technologies like React, Material-UI, and more!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default About;