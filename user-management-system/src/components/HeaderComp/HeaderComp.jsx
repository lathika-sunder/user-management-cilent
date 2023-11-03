import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

import './HeaderComp.css'; // Import your CSS file
import SearchComp from '../SearchComp/SearchComp';
import { Button, Dialog, DialogContent, Grid } from '@mui/material';
import AddUser from '../AddUserComp/AddUser';

const HeaderComp = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
   
      
    <div className="header-content">
      <Typography style={{paddingLeft:15, fontWeight:'bold'}}>
        <p>Hello, <span style={{color:'#1976d2'}}>User</span></p>
      </Typography>
      <div className="">
        <SearchComp />

      </div>
      <div className="add-user-button">
      <Grid item xs={12} textAlign={"center"}>
          
          <Button
            variant="contained"
            color="primary"
            style={{ fontSize: 8, textAlign: "center" }}
            onClick={handleOpenDialog}
          >
            Add User
          </Button>
        </Grid>
      </div>
    
        <div className="buttons">
          
        <IconButton color="inherit" edge="end">
          <AccountCircleIcon />
        </IconButton>
        <IconButton color="inherit" edge="end">
          <NotificationsIcon />
        </IconButton>
        </div>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogContent>
            <AddUser onClose={handleCloseDialog} /> 
          </DialogContent>
        </Dialog>
    </div>
 
  );
};

export default HeaderComp;
