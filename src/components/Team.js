import React, { useState } from 'react';
import { Modal, Box, Typography, Button, Grid } from '@mui/material';

const Team = () => {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Andy Zheng',
      role: 'Georgia Tech CS Major',
      bio: `Andy Zheng is a Computer Science major specializing in backend development 
        and machine learning. He has experience in building scalable applications and 
        enjoys contributing to open-source projects.`,
      description: `At Techwood Capital, Andy Zheng leads the technical team, focusing on 
        developing innovative solutions for data analytics and optimizing the company's 
        digital infrastructure.`,
      image: '/assets/headshots/andy.jpeg',
      linkedin: 'https://linkedin.com/in/andyzheng', // LinkedIn URL
      resume: 'https://example.com/resume.pdf', // Resume URL
      website: 'https://andyzheng.com', // Personal Website URL
    },
    {
      id: 2,
      name: 'Zachary Teaford',
      role: 'Business Major at Georgia Tech',
      bio: `Zachary Teaford is a Business major at Georgia Tech and an executive board 
      member for the Georgia Tech Investments Committee (GTIC).`,
      description: `At Techwood Capital, Zachary provides in-depth business knowledge and 
      expertise. His exceptional skills in utilizing tools such as DCF models and the Bloomberg 
      Terminal empower strategic decision-making and enhance the firm's financial analysis 
      capabilities.`,
      image: '/assets/headshots/alaska.jpeg',
      linkedin: 'https://www.linkedin.com/in/zachary-teaford/', // LinkedIn URL
      resume: 'https://example.com/resume.pdf', // Resume URL
      website: 'https://andyzheng.com', // Personal Website URL
    },
  ];
  

  const handleOpen = (member) => {
    setSelectedMember(member);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedMember(null);
    setOpen(false);
  };

  return (
    <section
      style={{
        padding: '12rem',
        maxWidth: '800px',
        margin: '2rem auto',
        border: '2px solid #000',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        style={{ marginBottom: '2rem' }}
      >
        Team
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member) => (
          <Grid
            item
            xs={12}
            key={member.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid #ccc',
              padding: '1rem 0',
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                marginRight: '1.5rem',
              }}
            />
            <div>
              <Typography variant="h6">{member.name}</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {member.role}
              </Typography>
              <Button
                variant="text"
                onClick={() => handleOpen(member)}
                style={{
                  textTransform: 'none',
                  marginTop: '0.5rem',
                  fontSize: '14px',
                  color: '#0073e6',
                }}
              >
                Bio & More →
              </Button>
            </div>
          </Grid>
        ))}
      </Grid>
      {selectedMember && (
  <Modal open={open} onClose={handleClose}>
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'white',
        padding: '3rem',
        borderRadius: '10px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
        width: '500px',
        maxWidth: '90%',
        textAlign: 'center',
      }}
    >
      <img
        src={selectedMember.image}
        alt={selectedMember.name}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          marginBottom: '1.5rem',
        }}
      />
      <Typography variant="h3" gutterBottom>
        {selectedMember.name}
      </Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        {selectedMember.role}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}
      >
        {selectedMember.bio}
      </Typography>
      <Typography
        variant="body2"
        style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}
      >
        {selectedMember.description}
      </Typography>

      {/* Hyperlinks Section */}
      <div style={{ marginBottom: '1.5rem' }}>
  <Typography variant="body2" color="textSecondary">
    Find me on:
  </Typography>
  <div style={{ marginTop: '0.5rem' }}>
    <Button
      variant="outlined"
      color="primary"
      size="small"
      style={{ margin: '0 0.5rem' }}
      href={selectedMember.linkedin} // Use the linkedin variable
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </Button>
    <Button
      variant="outlined"
      color="primary"
      size="small"
      style={{ margin: '0 0.5rem' }}
      href={selectedMember.resume} // Use the resume variable
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </Button>
    <Button
      variant="outlined"
      color="primary"
      size="small"
      style={{ margin: '0 0.5rem' }}
      href={selectedMember.website} // Use the website variable
      target="_blank"
      rel="noopener noreferrer"
    >
      Personal Website
    </Button>
  </div>
</div>


      <Button variant="contained" onClick={handleClose}>
        Close
      </Button>
    </Box>
  </Modal>
)}




    </section>
  );
};

export default Team;
