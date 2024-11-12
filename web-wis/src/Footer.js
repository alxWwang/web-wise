// Footer.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: '#0076CF', // Background color of the footer
        color: '#FFFFFF',   // Text color
        textAlign: 'center', // Center the content
        mt: 5
      }}
    >
      {/* SVG Wave */}
      <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        sx={{
          position: 'absolute',
          top: '-10px', // Adjust the wave position
          left: 0,
          right: 0,
          width: '100%',
          height: '80px',
          zIndex: 1
        }}
      >
        <path
          fill="#0076CF" // Match the footer background color
          fillOpacity="1"
          d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,90.7C672,64,768,64,864,90.7C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </Box>

      {/* Footer Content */}
      <Box sx={{ position: 'relative', zIndex: 2, py: 4 }}>
        <Typography variant="body2" component="p">
          © {new Date().getFullYear()} My Company. All rights reserved.
        </Typography>

        <Box sx={{ mt: 1 }}>
          <IconButton color="inherit" href="https://github.com" target="_blank" aria-label="GitHub">
            <GitHubIcon />
          </IconButton>
          <IconButton color="inherit" href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com" target="_blank" aria-label="Twitter">
            <TwitterIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
