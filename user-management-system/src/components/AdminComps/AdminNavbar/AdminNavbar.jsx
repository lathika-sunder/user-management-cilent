import * as React from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import { Menu, ExitToApp, Dashboard, People } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import "./AdminNavbar.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

export default function AdminNavbar() {
  const theme = useTheme();
 

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "white",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      
        
        <Box role="presentation" className="nav-content">
        <List>
          <ListItem></ListItem>
          <Link to="/dashboard">
          <ListItem >
         
            <ListItemButton >
             
                <span className="icon">
                  <Dashboard />
                </span>
                <span className="text" style={{textAlign:"center"}}>Users</span>
              
            </ListItemButton>
            
          </ListItem>
          </Link>
          <Link to="/">
          <ListItem >
            
            <ListItemButton >
                <span className="icon">
                  <ExitToApp />
                </span>
                <span className="text" style={{textAlign:"center"}}> Log Out</span>
            </ListItemButton>
            
          </ListItem>
          </Link>
        </List>
          <Divider />
        </Box> 
    </Box>
  );
}
