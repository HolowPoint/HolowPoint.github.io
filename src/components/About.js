import React from 'react';
import { Grid, Card, CardContent, Typography, Container } from '@mui/material';

const AboutUs = () => {
  const data = [
    {
      title: 'Industry Leaders with Moats',
      description:
        'We prioritize investments in industry-leading companies that possess significant competitive advantages. These businesses have strong barriers to entry and a proven ability to sustain profitability over time. Our focus ensures a stable foundation for long-term growth.',
    },
    {
      title: 'High-Tech Innovation',
      description:
        'Our portfolio emphasizes investments in cutting-edge technology sectors, particularly those advancing artificial intelligence and robust technological infrastructure. We seek companies driving innovation and shaping the future. These investments are positioned to capitalize on transformative trends.',
    },
    {
      title: 'Undervalued Opportunities with High Growth Potential',
      description:
        'We identify undervalued stocks with strong five-year growth projections. Our approach leverages state-of-the-art data analysis and up-to-date discounted cash flow (DCF) models. These investments are chosen for their potential to deliver exceptional returns while minimizing risk.',
    },
  ];

  return (
    <Container style={{ padding: '2rem 0' }}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        style={{ marginBottom: '2rem', fontWeight: 'bold', color: '#333' }}
      >
        About Us
      </Typography>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  style={{ fontWeight: 'bold', color: '#1a73e8' }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body1" style={{ color: '#555', lineHeight: 1.6 }}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutUs;
