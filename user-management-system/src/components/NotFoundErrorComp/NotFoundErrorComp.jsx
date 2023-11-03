import React from "react";
import { Box, Typography } from "@mui/material";
import { ErrorOutlineOutlined as ErrorOutlineIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import errorImage from '../../assets/images/error-img.png'

const NotFoundErrorComp = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#1976D2"
      }}
    >
        <img src={errorImage}/>
      <motion.div
       
        style={{backgroundColor:"white", padding:"5%", borderRadius:"5%", boxShadow:"2vh solid black", border:"1vh solid red"}}
      >
        <ErrorOutlineIcon
          color="error"
          sx={{ fontSize: 80, marginBottom: theme.spacing(2) }}
        />
        <Typography variant="h4" color="error" gutterBottom>
          Oops! Page not found.
        </Typography>
        <Typography variant="body1" color="textSecondary">
          The page you are looking for might be unavailable or does not exist.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default NotFoundErrorComp;
