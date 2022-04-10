import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <Button component={Link} to="/login" variant="contained" color="success">
        <Typography>Login</Typography>
      </Button>

      <Button component={Link} to="/sign-up" variant="contained">
        <Typography>Sign-up</Typography>
      </Button>
    </Box>
  );
};

export default Home;
