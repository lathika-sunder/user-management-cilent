import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';

const AddUser = () => {
  const [user, setUser] = useState({
    userId: '',
    password: '',
    email: '',
    name: '',
    contactNumber: {
      countryCode: '',
      phoneNumber: '',
    },
    userType: 'user',
    roleId: null,
    isActive: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleContactNumberChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      contactNumber: {
        ...prevUser.contactNumber,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/users', user); 
      console.log('User added successfully!');
      
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="User ID"
            name="userId"
            value={user.userId}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Country Code"
            name="countryCode"
            value={user.contactNumber.countryCode}
            onChange={handleContactNumberChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={user.contactNumber.phoneNumber}
            onChange={handleContactNumberChange}
            fullWidth
            margin="normal"
          />
        </Grid>
       
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add User
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddUser;
