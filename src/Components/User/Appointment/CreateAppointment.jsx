import React, { useState } from "react";
import { Box, Typography, Button, Card, Paper } from "@mui/material";
const CreateAppointment = ({ setPage, setData, data }) => {
  const [appointmentDate, setAppointmentDate] = useState(data.appointment_date);
  const [appointmentDateIndex, setAppointmentDateIndex] = useState(
    data.appointment_date_index
  );
  const [appointmentHourIndex, setAppointmentHourIndex] = useState(
    data.appointment_hour_index
  );
  const [doctor, setDoctor] = useState(data.doctor_name);
  const [appointmentHour, setAppointmentHour] = useState(data.appointment_hour);
  const appointmentPrice = 100;
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
        {
          value: "06/05",
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
        {
          value: "06/05",
          hours: [
            { value: "10:00", booked: 0 },
            { value: "10:20", booked: 0 },
            { value: "10:40", booked: 0 },
            { value: "11:00", booked: 1 },
          ],
        },
      ],
    },
  ];

  const dates = [
    {
      month: "may",
      days: [
        {
          value: "04/05",
          weekDay: "seg",
        },
        {
          value: "05/05",
          weekDay: "ter",
        },
        {
          value: "06/05",
          weekDay: "quar",
        },
      ],
    },
  ];
  return (
    <Box>
      <Typography variant="h5">Appointment</Typography>
      <Typography variant="h6">{data.specialty}</Typography>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          width: "400px",
          padding: "10px 20px 10px 20px",
          justifyContent: "space-around",
        }}
      >
        {dates.map((date, dIndex) => {
          return date.days.map((day) => (
            <Button
              variant="contained"
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              onClick={() => {
                setAppointmentDate(day.value);
                if (appointmentDate != day.value) {
                  setAppointmentHour(null);
                }
              }}
              color={appointmentDate == day.value ? "secondary" : "primary"}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  lineHeight: "1.1rem",
                }}
              >
                {day.value}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  lineHeight: "1.1rem",
                }}
              >
                {date.month}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  lineHeight: "1.1rem",
                }}
              >
                {day.weekDay}
              </Typography>
            </Button>
          ));
        })}
      </Paper>
      {appointments.map((appointment, cardIndex) => (
        <Card
          elevation={3}
          sx={{ width: "max-content", p: "20px" }}
          key={cardIndex}
        >
          <Typography variant="h6">Doctor: {appointment.doctor}</Typography>
          <Box sx={{ display: "flex" }}>
            {appointment.dates.map((date) => {
              if (date.value === appointmentDate) {
                return date.hours.map((hour, hourIndex) => {
                  return (
                    <Button
                      variant="contained"
                      onClick={() => {
                        setDoctor(appointment.doctor);
                        setAppointmentHour(hour.value);
                        setAppointmentHourIndex(cardIndex);
                        setAppointmentDateIndex(appointmentDate);
                      }}
                      key={hourIndex}
                      color={
                        appointmentHour == hour.value &&
                        appointmentHourIndex == cardIndex &&
                        appointmentDateIndex == appointmentDate
                          ? "warning"
                          : "primary"
                      }
                      disabled={hour.booked ? true : false}
                    >
                      <Typography>{hour.value}</Typography>
                    </Button>
                  );
                });
              }
            })}
          </Box>
        </Card>
      ))}
      <Button
        variant="contained"
        onClick={() => {
          setPage((actual) => actual - 1);
        }}
        color="error"
      >
        Back
      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          if (
            doctor != "" &&
            appointmentHour != "" &&
            appointmentDate != "" &&
            appointmentDateIndex != "" &&
            appointmentPrice != ""
          ) {
            setData({
              ...data,
              username: "Samuel",
              doctor_name: doctor,
              appointment_hour: appointmentHour,
              appointment_hour_index: appointmentHourIndex,
              appointment_date: appointmentDate,
              appointment_date_index: appointmentDateIndex,
              appointment_price: appointmentPrice,
            });
            setPage((actual) => actual + 1);
          } else {
            alert("fill up all info, please!");
          }
        }}
      >
        Continue
      </Button>
    </Box>
  );
};

export default CreateAppointment;
