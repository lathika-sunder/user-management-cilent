import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

import './HeaderComp.css'; // Import your CSS file
import SearchComp from '../SearchComp/SearchComp';

const HeaderComp = () => {
  return (
   
      
    <div className="header-content">
      <Typography style={{paddingLeft:15, fontWeight:'bold'}}>
        <p>Hello, <span style={{color:'#1976d2'}}>User</span></p>
      </Typography>
      <div className="">
        <SearchComp />
      </div>
        <div className="buttons">
        <IconButton color="inherit" edge="end">
          <AccountCircleIcon />
        </IconButton>
        <IconButton color="inherit" edge="end">
          <NotificationsIcon />
        </IconButton>
        </div>
    </div>
 
  );
};

export default HeaderComp;
