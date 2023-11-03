import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, Autocomplete, Stack, Typography, Pagination } from "@mui/material";
import axios from "axios";
import "./AddUser.css";

const AddUser = ({onClose}) => {
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("http://localhost:3000/roles");
        setRoles(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, []);

  const [user, setUser] = useState({
    userId: "",
    password: "",
    email: "",
    name: "",
    contactNumber:"",
    userType: "user",
    role: null,
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
      console.error("Error adding user:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ backgroundColor: "white", fontSize: 3 ,width:300, padding:10}}
    >
      <Typography >
      <h4>Add User</h4>
      </Typography>
      <Grid >
        <Grid item xs={5}>
          <TextField
            label="User ID"
            name="userId"
            value={user.userId}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            InputProps={{
              style: { fontSize: 8 },
            }}
            InputLabelProps={{
              style: { fontSize: 10 },
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            label="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputProps={{
              style: { fontSize: 8 },
            }}
            InputLabelProps={{
              style: { fontSize: 10 },
            }}
          />
        </Grid>

        <Grid item xs={5}>
          <TextField
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            InputProps={{
              style: { fontSize: 8 },
            }}
            InputLabelProps={{
              style: { fontSize: 10 },
            }}
          />
        </Grid>

        <Grid item xs={5}>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={user.contactNumber.phoneNumber}
            onChange={handleContactNumberChange}
            fullWidth
            margin="normal"
            InputProps={{
              style: { fontSize: 8 },
            }}
            InputLabelProps={{
              style: { fontSize: 10 },
            }}
          />
        </Grid>
        <Grid item xs={5} >
          <Autocomplete
            options={roles.map((option) => option.label)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="User Role"
                InputLabelProps={{
                  style: { fontSize: 10 },
                }}
                size="small"
                style={{marginTop:"2.5vh",}}
                sx={{
                  "& .MuiAutocomplete-input": {
                    height: "5vh",
                    
                    fontSize: 8,
                  },
                }}
              />
            )}
            ListboxComponent={({ children, ...props }) => (
              <ul {...props} style={{ fontSize: 8 }}>
                {children}
              </ul>
            )}
          />
        </Grid>
        <Grid item xs={5} >
          <TextField
            label="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            InputProps={{
              style: { fontSize: 8 },
            }}
            InputLabelProps={{
              style: { fontSize: 10 },
            }}
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
