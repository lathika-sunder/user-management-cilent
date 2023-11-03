import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DeleteUserComp = ({ userId, open, handleClose,onDeleteUser }) => {
  

  const confirmDelete = async () => {
    try {
      console.log(`http://localhost:3000/users/${userId}`)
      await handleDelete(userId);
      toast.success("Deleted User Successfully");
      onDeleteUser(userId)
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error deleting user");
      handleClose()
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error; 
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <ToastContainer></ToastContainer>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this user?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={confirmDelete} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteUserComp;
