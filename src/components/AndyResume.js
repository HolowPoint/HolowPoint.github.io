import React from 'react';
import { Box } from '@mui/material';

const AndyResume = () => {
  return (
    <div>
      <header
        style={{
          backgroundColor: '#f9f9f9',
          padding: '1rem 0',
          textAlign: 'center',
          borderBottom: '1px solid #ddd',
        }}
      >
        <h1 style={{ margin: 0 }}>Techwood Capital</h1>
      </header>

      <Box
        sx={{
          padding: '5rem',
          maxWidth: '800px',
          margin: '2rem auto',
        }}
      >
        <iframe
          src="/assets/AndrewZheng2025.pdf"
          style={{
            width: '100%',
            height: '100vh',
            border: 'none',
          }}
          title="Andy Zheng Resume"
        />
      </Box>
    </div>
  );
};

export default AndyResume;
