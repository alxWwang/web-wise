// Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

const Header = ({currentView, setCurrentView}) => {
  return (
    <AppBar position="static" elevation={0} sx={{
        bgcolor: '#0076CF',
        color: '#FFFFFF',
        boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16
         }}>
      <Toolbar sx={{justifyContent: 'center'}}>    
          <Button onClick={()=>{setCurrentView(0); }} color="inherit" sx={{ textTransform: 'none' }}>Profile</Button>
          <Button onClick={()=>{setCurrentView(1); }} color="inherit" sx={{ textTransform: 'none' }}>Check link</Button>
          <Button onClick={()=>{setCurrentView(2); }} color="inherit" sx={{ textTransform: 'none' }}>Information</Button>
          
        {/* User Profile Avatar */}
        <IconButton color="inherit" sx={{ ml: 2 }}>
          <Avatar src="https://via.placeholder.com/150" alt="User Profile" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
