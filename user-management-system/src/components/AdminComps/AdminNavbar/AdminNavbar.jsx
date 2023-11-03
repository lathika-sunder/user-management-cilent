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
            <ListItem>
              <div className="logo-img">
                <img src={logo} alt="logo"></img>
              </div>
            </ListItem>
            {[
              {
                text: "Users",
                icon: <Dashboard />,
                path: "/dashboard",
                className: "dashboard",
              },
             
              {
                text: "Log Out",
                icon: <ExitToApp />,
                path: "/",
                className: "logout",
              },
              
            ].map((item, index) => (
              <ListItem key={index} className={item.className}>
                <ListItemButton>
                  <Link to={item.path}>
                    <span className="icon">{item.icon}</span>
                  </Link>
                  <Link to={item.path}>
                    <span className="text">{item.text}</span>
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box> 
    </Box>
  );
}
