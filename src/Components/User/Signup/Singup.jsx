import React from "react";
import { Button, TextField, Box, Typography } from "@mui/material";

const form = [
  {
    field: "name",
    type: "text",
  },
  {
    field: "last_name",
    type: "text",
  },
  {
    field: "email",
    type: "email",
  },
  {
    field: "password",
    type: "password",
  },
  {
    field: "confirm_password",
    type: "password",
  },
];
const Singup = () => {
  return (
    <Box>
      <Typography variant="h6">Singup</Typography>
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
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Singup;
