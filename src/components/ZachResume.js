import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ZachResume = () => {
  return (
    <Box
      sx={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '2rem auto',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Zachary Teaford - Resume
      </Typography>
      <iframe
        src="public\assets\resume\Zachary_Teaford_Resume.pdf" // Replace with Zach's PDF
        style={{
          width: '100%',
          height: '600px',
          border: 'none',
          marginTop: '1rem',
        }}
        title="Zachary Teaford Resume"
      />
      <Button
        href="public\assets\resume\Zachary_Teaford_Resume.pdf" // Replace with Zach's PDF
        download
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: '1rem' }}
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default ZachResume;
