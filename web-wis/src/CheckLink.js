// TwoBigButtons.js
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const CheckLink = ({ onFirstButtonClick, onSecondButtonClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2, // Space between the buttons
        mt: 4, // Top margin
        flexDirection: 'column', // Align buttons vertically; use 'row' for horizontal
      }}
    >
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={onFirstButtonClick}
        sx={{
          width: '250px', // Width of the button
          height: '80px', // Height of the button
          fontSize: '1.5rem', // Font size for larger text
        }}
      >
        Continue Anyway
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={onSecondButtonClick}
        sx={{
          width: '250px',
          height: '80px',
          fontSize: '1.5rem',
        }}
      >
        Stay Safe
      </Button>
    </Box>
  );
};

export default CheckLink;
