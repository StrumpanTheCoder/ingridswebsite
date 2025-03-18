// filepath: c:\repo\ingridswebsite\src\components\Projects.tsx
import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const Projects = () => {
  const projectList = [
    { title: 'Project 1', description: 'A cool project I worked on.', link: '#' },
    { title: 'Project 2', description: 'Another awesome project.', link: '#' },
  ];

  return (
    <Grid container spacing={2} sx={{ padding: '16px' }}>
      {projectList.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {project.description}
              </Typography>
              <Button variant="contained" color="primary" href={project.link}>
                View Project
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;