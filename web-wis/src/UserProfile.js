// UserProfile.js
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const UserProfile = () => {
  // Sample user data
  const user = {
    displayName: 'John Doe',
    points: 1200,
    avatarUrl: 'https://via.placeholder.com/150' // replace with actual image URL
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        maxWidth: 300,
        margin: 'auto',
        mt: 5,
        bgcolor: '#0076CF', // Background color for the profile card
        color: '#ffffff'     // Set default text color to white for contrast
      }}
    >
      {/* Display Picture */}
      <Avatar
        src={user.avatarUrl}
        alt={user.displayName}
        sx={{ width: 200, height: 200, mb: 2 }}
      />

      {/* Username */}
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
        {user.displayName}
      </Typography>

      {/* Points */}
      <Stack direction="row" alignItems="center" spacing={1} mt={1}>
        <Typography variant="body1" sx={{ color: '#d1e0ff' }}>
          Points:
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#ffeb3b' }}>
          {user.points}
        </Typography>
      </Stack>
    </Box>
  );
};

export default UserProfile;
