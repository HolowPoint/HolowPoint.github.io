import React, { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';

const AndyResume = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      style={{
        backgroundColor: '#fff', // White background
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        overflow: 'hidden', // Prevent scrolling
        padding: '3.5rem',
      }}
    >
      <Box
        sx={{
          maxWidth: '90%',
          textAlign: 'center',
          marginBottom: '1.5rem',
        }}
      >
        <img
          src="/assets/resume/AndrewZheng2025-1.png" // Path to Andy's resume image
          alt="Andy Zheng Resume"
          style={{
            width: '35%', // Slightly larger size
            height: 'auto',
            marginBottom: '1.5rem',
            cursor: 'pointer', // Pointer to indicate clickable
            boxShadow: '0 8px 20px rgba(0,0,0,0.3)', // Enhanced shadow for aesthetics
            borderRadius: '8px', // Rounded edges for a modern look
          }}
          onClick={handleOpen} // Open modal on click
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Button
          href="/assets/resume/AndrewZheng2025.pdf" // Path to Andy's resume PDF
          download="AndrewZhengResume"
          variant="contained"
          sx={{
            backgroundColor: '#1976d2',
            color: '#fff',
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            textTransform: 'none',
            borderRadius: '25px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#145a9e',
              transform: 'scale(1.05)', // Subtle hover effect
            },
          }}
        >
          Download PDF
        </Button>
      </Box>

      {/* Modal for Full-Screen View */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)', // Dark background
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/assets/resume/AndrewZheng2025-1.png" // Full-screen image
            alt="Andy Zheng Resume"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              border: '2px solid #fff',
              borderRadius: '8px',
            }}
            onClick={handleClose} // Close modal on click
          />
        </Box>
      </Modal>
    </div>
  );
};

export default AndyResume;
