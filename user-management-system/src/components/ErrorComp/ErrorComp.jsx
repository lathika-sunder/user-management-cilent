import React, { useState } from "react";
import { Alert, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./ErrorComp.css";

const ErrorComp = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate(-1); // Go back in history when the user clicks "Go Back"
  };

  if (!open) {
    return null; // Do not render the component if open is false
  }

  return (
    <div>
      <Alert variant="outlined" severity="error">
        <div className="error-dialog">
          Invalid login credentials. Please try again.
          <Button
            variant="text"
            color="error"
            style={{ marginTop: 20, textAlign: "end" }}
            onClick={handleClose}
          >
            Go Back
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default ErrorComp;
