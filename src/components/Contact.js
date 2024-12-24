import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';

function Contact() {
  return (
    <section>
      <Box
        sx={{
          padding: '3rem',
          backgroundColor: '#f9f9f9', // Change this to your color scheme
          borderRadius: '10px',
          maxWidth: '800px',
          margin: '0 auto',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#333' }} // Adjust for your brand
        >
          Contact
        </Typography>

        <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
          {/* Email Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{ fontWeight: '500', marginBottom: '0.5rem', color: '#000' }}
            >
              Email
            </Typography>
            <Link
              href="mailto:techwoodcapitalpartners@gmail.com"
              underline="hover"
              sx={{ color: '#0073e6', fontSize: '1rem' }}
            >
              techwoodcapitalpartners@gmail.com
            </Link>
          </Grid>

          {/* Phone Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{ fontWeight: '500', marginBottom: '0.5rem', color: '#000' }}
            >
              Phone
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#0073e6', fontSize: '1rem' }}
            >
              (860) 967-6128
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default Contact;
