import React from "react";
import { Box, Typography } from "@mui/material";

const info = [
  {
    field: "name",
    value: "Samuel",
  },
  {
    field: "last_name",
    value: "Bandeira",
  },
  {
    field: "email",
    value: "samuel.bandeira.oliveira@gmail.com",
  },
  {
    field: "password",
    value: "********",
  },
  {
    field: "confirm_password",
    value: "********",
  },
];
const Profile = () => {
  return (
    <Box>
      <Typography variant="h5">
        <b>Profile</b>
      </Typography>
      {info.map((el) => (
        <Typography variant="h6">
          <b>{el.field}:</b> {el.value}
        </Typography>
      ))}
    </Box>
  );
};

export default Profile;
