import React, { useState } from "react";
import { Box, Typography, Button, Card, ToggleButton } from "@mui/material";
const CreateAppointment = ({ setPage, setData, data }) => {
  const [selected, setSelected] = useState(null);
  const [indexOfSelected, setIndexOfSelected] = useState(null);
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [appointmentHour, setAppointmentHour] = useState("");
  const [selectedDate, setSelectedDate] = useState("04/05");
  const appointmentPrice = 100;
  const specialty = "Cardiology";
  const appointments = [
    {
      doctor: "Carlos Cesár Ribeiro",
      dates: [
        {
          value: "04/05",
          hours: [
            { value: "10:00", booked: 0 },
            { value: "10:20", booked: 0 },
            { value: "10:40", booked: 0 },
            { value: "11:00", booked: 1 },
          ],
        },
        {
          value: "05/05",
          hours: [
            { value: "14:00", booked: 0 },
            { value: "14:20", booked: 1 },
            { value: "14:40", booked: 0 },
            { value: "15:00", booked: 1 },
          ],
        },
      ],
    },
    {
      doctor: "Roberto Carlos Coelho",
      dates: [
        {
          value: "04/05",
          hours: [
            { value: "10:00", booked: 0 },
            { value: "10:20", booked: 1 },
            { value: "10:40", booked: 0 },
            { value: "11:00", booked: 1 },
          ],
        },
        {
          value: "05/05",
          hours: [
            { value: "14:00", booked: 0 },
            { value: "14:20", booked: 1 },
            { value: "14:40", booked: 0 },
            { value: "15:00", booked: 1 },
          ],
        },
      ],
    },
  ];
  return (
    <Box>
      <Typography variant="h5">Appointment</Typography>
      <Typography variant="h6">{specialty}</Typography>
      <Typography variant="h6">Data: 4 de abril</Typography>
      {appointments.map((appointment, index) => (
        <Card elevation={3} sx={{ width: "max-content", p: "20px" }}>
          <Typography variant="h6">Doctor: {appointment.doctor}</Typography>
          <Box sx={{ display: "flex" }}>
            {appointment.dates.map((date) => {
              if (date.value === selectedDate) {
                return date.hours.map((hour) => (
                  <Button
                    variant="contained"
                    onClick={() => {
                      setSelected(hour.value);
                      setIndexOfSelected(index);
                      setDoctor(appointment.doctor);
                      setAppointmentHour(hour.value);
                    }}
                    color={
                      selected == hour.value && indexOfSelected == index
                        ? "warning"
                        : "primary"
                    }
                    disabled={hour.booked ? true : false}
                  >
                    <Typography>{hour.value}</Typography>
                  </Button>
                ));
              }
            })}
          </Box>
        </Card>
      ))}
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          setData({
            ...data,
            username: "Samuel",
            specialty: specialty,
            doctor_name: doctor,
            appointment_hour: appointmentHour,
            appointment_date: selectedDate,
            appointment_price: appointmentPrice,
          });
          setPage((actual) => actual + 1);
        }}
      >
        Continue
      </Button>
    </Box>
  );
};

export default CreateAppointment;
//   <Button
//     variant="contained"
//     // onClick={() => {
//     //   setTag(hour.value);
//     //   setIndexS(index);
//     //   setDoctor(el.doctor);
//     // // }}
//     // color={
//     //   tag == hour.value && indexS == index
//     //     ? "warning"
//     //     : "primary"
//     // }
//     // disabled={hour.booked ? true : false}
//   >
//     <Typography>{hour.value}</Typography>
//   </Button>
