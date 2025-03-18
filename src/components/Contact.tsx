// filepath: c:\repo\ingridswebsite\src\components\Contact.tsx
import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ padding: '16px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <form>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '16px' }}
        />
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '16px' }}
        />
        <TextField
          label="Your Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          sx={{ marginBottom: '16px' }}
        />
        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default Contact;