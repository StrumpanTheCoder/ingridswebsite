// filepath: c:\repo\ingridswebsite\src\components\About.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
const About = () => {
  return (
    <Card sx={{ margin: '16px', padding: '16px' }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
        I'm a software developer with a background in Medicine. I love the straightforwardness of computers, and the complexity of humans - and few things excite me more than AI at the moment! Want to know more? Feel free to reach out &nbsp;{' '}
          <VolunteerActivismIcon
            sx={{
              fontSize: '1em', // Adjust the size of the icon
              color: 'primary.light', // Use your theme's color
            }}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default About;