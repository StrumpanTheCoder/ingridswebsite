// filepath: c:\repo\ingridswebsite\src\components\About.tsx
import React, {useState} from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const About = () => {
  const [response, setResponse] = useState('');

  const handleAskAI = async () => {
    try {
      const res = await fetch('http://127.0.0.1:5000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: 'What is your name?' }),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse('Something went wrong. Please try again later.');
    }
  };

  return (
    <Card sx={{ margin: '16px', padding: '16px' }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
        I'm a software developer with a background in Medicine. I love the straightforwardness of computers, and the complexity of humans - and few things excite me more than AI at the moment! Want to know more? Feel free to reach out 🤲
        </Typography>
        <Button variant="contained" color="primary" onClick={handleAskAI} sx={{ marginTop: '16px' }}>
          Ask AI
        </Button>
        {response && (
          <Typography variant="body2" sx={{ marginTop: '16px' }}>
            AI Response: {response}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default About;