import React, { useState } from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";
import landingImage from "../../assets/images/login-image.png";
import "./LoginPage.css";
import logo from "../../assets/images/logo.png";
import DashboardPage from "../DashboardPage/DashboardPage";
import ErrorComp from "../../components/ErrorComp/ErrorComp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import axios from "axios";

export default function LoginPage() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const navigate = useNavigate();
  const user={mail,password}

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleMailChange = (event) => {
    const inputEmail = event.target.value;
    setMail(inputEmail);
    setEmailError(!isValidEmail(inputEmail));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", { mail, password });
  
      if (response.status === 200 && response.data.success) {
        // Successfully logged in
        setIsLoggedIn(true);
        navigate("/dashboard");
      } else {
        // Display error toast
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  
  
if(isLoggedIn)
{
  navigate("/dashboard");
}
  return (
    <div className="login-page" style={{backgroundColor:" #1976d2"}}>
      <ToastContainer />
      <CssVarsProvider>
      <main className="login-container">
        <div className="image-container">
          <img src={landingImage} alt="Login Image" />
        </div>
        <div className="form-container">
          <Sheet
            sx={{
              width: 250,
              mx: "auto",
              border: "10px",
              py: 8,
              px: 3,
              display: "flex",
              flexDirection: "column",
            backgroundColor:"white"
              
            }}
            variant="outlined"
          >
           
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                style={{ fontSize: 10, color: "black" }}
                name="email"
                type="email"
                placeholder="name@email.com"
                onChange={handleMailChange}
                error={emailError}
              />
              {emailError && (
                <Typography
                  variant="caption"
                  color="error"
                  fontSize={10}
                  fontStyle={"italic"}
                >
                  Enter a valid mail id
                </Typography>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                style={{ fontSize: 10 }}
                name="password"
                type="password"
                onChange={handlePasswordChange}
                placeholder="password"
              />
            </FormControl>

            <Button sx={{ mt: 1 }} onClick={handleSubmit}>
              Login
            </Button>
          </Sheet>
        </div>
      </main>
      <ToastContainer position="top-right" autoClose={3000} />
    </CssVarsProvider>
    </div>
  );
}
