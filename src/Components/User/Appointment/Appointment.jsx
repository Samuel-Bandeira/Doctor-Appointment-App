import React, { useState } from "react";
import { Box, Typography, Button, Card, ToggleButton } from "@mui/material";
const Appointment = () => {
  const [tag, setTag] = useState(false);
  const handleTag = () => {
    setTag(!tag);
  };
  const appointments = [
    {
      doctor: "Carlos Cesár Ribeiro",
      hours: ["10:00", "10:20", "10:40", "11:00"],
    },
    {
      doctor: "Roberto Carlos Coelho",
      hours: ["10:00", "10:20", "10:40", "11:00"],
    },
  ];
  return (
    <Box>
      <Typography variant="h5">Appointment</Typography>
      <Typography variant="h6">Cardiology</Typography>
      <Typography variant="h6">Data: 4 de abril</Typography>
      {appointments.map((el) => (
        <Card elevation={3} sx={{ width: "400px", p: "20px" }}>
          <Typography variant="h6">Doctor: {el.doctor}</Typography>
          <Box sx={{ display: "flex" }}>
            {el.hours.map((hour) => (
              <Button
                variant="outlined"
                onClick={handleTag}
                color={tag ? "primary" : "secondary"}
              >
                <Typography>{hour}</Typography>
              </Button>
            ))}
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default Appointment;
