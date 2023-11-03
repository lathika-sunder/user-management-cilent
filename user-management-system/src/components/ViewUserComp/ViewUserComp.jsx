import React, { useEffect, useState } from "react";
import { Typography, Grid, Button } from "@mui/material";
import axios from "axios";

const ViewUser = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`http://localhost:3000/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, [userId]);

  if (!user) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Grid container spacing={2} style={{ backgroundColor: "white", padding: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        User Details
      </Typography>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">
          <strong>User ID:</strong> {user.userId}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">
          <strong>Name:</strong> {user.name}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">
          <strong>Email:</strong> {user.email}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">
          <strong>Phone Number:</strong> {user.contactNumber.phoneNumber}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">
          <strong>User Role:</strong> {user.role}
        </Typography>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Button variant="contained" color="primary">
          Edit User
        </Button>
      </Grid>
    </Grid>
  );
};

export default ViewUser;
