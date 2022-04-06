import React from "react";
import { Box, Typography, Button } from "@mui/material";
const PayAppointment = ({ data, setPage }) => {
  return (
    <Box>
      <Typography variant="h6">Specialty: {data.specialty}</Typography>
      <Typography variant="h6">Name: {data.username}</Typography>
      <Typography variant="h6">Doctor: {data.doctor_name}</Typography>
      <Typography variant="h6">
        Appointment Date: {data.appointment_date}
      </Typography>
      <Typography variant="h6">
        Appointment Hour: {data.appointment_hour}AM
      </Typography>
      <Typography variant="h6">
        Appointment Price: R${data.appointment_price}
      </Typography>

      <Button
        variant="contained"
        onClick={() => {
          setPage((actual) => actual - 1);
        }}
      >
        Back
      </Button>
    </Box>
  );
};

export default PayAppointment;
