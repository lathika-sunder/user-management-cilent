import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Button,
  Divider,
  TextField,
  Autocomplete,
  Dialog,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";
import { Delete } from "@mui/icons-material";
import DeleteUserComp from "../DeleteUserComp/DeleteUserComp";

const ViewUser = ({ userId }) => {

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3000/users/${userId}`, user);
      setIsEditing(false);
    } catch (error) {
      console.log("Error saving user data", error);
    }
  };


  const [roles, setRoles] = useState([]);
  const [user, setUser] = useState({
    userId: "",
    email: "",
    name: "",
    phoneNumber: "",
    userType: "",
    role: "",
    isActive: true,
  });
  const [isEditing, setIsEditing] = useState(false);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`http://localhost:3000/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    const fetchRolesData = async () => {
      try {
        let response = await axios.get("http://localhost:3000/roles");
        setRoles(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchRolesData();

    fetchData();
  }, [userId]);

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };



  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Grid
      container
      spacing={2}
      style={{
        backgroundColor: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Divider />
      <Grid item xs={12}>
        <Typography variant="h6">
          <strong>User ID:</strong> {user.userId}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">
          <strong>Name:</strong>{" "}
          {isEditing ? (
            <TextField
              name="name"
              value={user.name}
              onChange={handleInputChange}
              fullWidth
            />
          ) : (
            user.name
          )}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">
          <strong>Email:</strong>{" "}
          {isEditing ? (
            <TextField
              name="email"
              value={user.email}
              onChange={handleInputChange}
              fullWidth
            />
          ) : (
            user.email
          )}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">
          <strong>Phone Number:</strong>{" "}
          {isEditing ? (
            <TextField
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={handleInputChange}
              fullWidth
            />
          ) : (
            user.phoneNumber
          )}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">
          <strong>User Role:</strong>{" "}
          {isEditing ? (
            <Grid item xs={12}>
              <Autocomplete
                options={roles.map((option) => option.label)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="User Role"
                    size="small"
                    style={{ marginTop: "4vh", marginBottom: "4vh" }}
                  />
                )}
                ListboxComponent={({ children, ...props }) => (
                  <ul {...props} style={{ fontSize: 8 }}>
                    {children}
                  </ul>
                )}
              />
            </Grid>
          ) : (
            user.role
          )}
        </Typography>
      </Grid>
      <Divider />
      <Grid item xs={12} textAlign="center">
        {isEditing ? (
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            onClick={handleSave}
          >
            Save
          </Button>
        ) : (
          <Grid>
            <Button
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
              onClick={() => setIsEditing(true)}
            >
              Edit User
            </Button>
          </Grid>
        )}
      </Grid>

    </Grid>
  );
};

export default ViewUser;
