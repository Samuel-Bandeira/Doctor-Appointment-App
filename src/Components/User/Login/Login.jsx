import React from "react";
import { Button, TextField, Box, Typography } from "@mui/material";

const form = [
  {
    field: "email",
    type: "email",
  },
  {
    field: "password",
    type: "password",
  },
];
const Login = () => {
  return (
    <Box>
      <Typography variant="h6">Login</Typography>
      <form action="">
        {form.map((el) => (
          <Box>
            <Typography>{el.field}</Typography>
            <TextField
              variant="standard"
              name={el.field}
              type={el.type}
            ></TextField>
          </Box>
        ))}
        <Button variant="contained" type='submit'>Submit</Button>
      </form>
    </Box>
  );
};

export default Login;
