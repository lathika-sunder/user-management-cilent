import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const LogoutDialogComp = ({ onClose }) => {
    const navigate=useNavigate()
  const handleLogout = () => {
   try {
     navigate("/")
     onClose();
   } catch (error) {
    console.log(error)
   }
  };

  return (
    <>
      <DialogTitle>Confirm Logout</DialogTitle>
      <DialogContent>
        <Typography>
        Are you sure you want to log out?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleLogout} color="error">
          Logout
        </Button>
      </DialogActions>
    </>
  );
};

export default LogoutDialogComp;
