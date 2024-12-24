import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#f5f5f5', // Light gray background
        py: 3, // Vertical padding
        mt: 4, // Top margin
        borderTop: '1px solid #ddd', // Subtle border on top
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* Footer Links */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            <Link href="/about" underline="hover" color="inherit">
              About Us
            </Link>
            {' • '}
            <Link href="/contact" underline="hover" color="inherit">
              Contact
            </Link>
            {' • '}
            <Link href="/privacy" underline="hover" color="inherit">
              Privacy Policy
            </Link>
          </Typography>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            Follow Us:
            {' '}
            <Link href="https://twitter.com" underline="hover" color="inherit">
              Twitter
            </Link>
            {' | '}
            <Link href="https://linkedin.com" underline="hover" color="inherit">
              LinkedIn
            </Link>
          </Typography>
        </Grid>

        {/* Copyright Section */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} Techwood Capital. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
