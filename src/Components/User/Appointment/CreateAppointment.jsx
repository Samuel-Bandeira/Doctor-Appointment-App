import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  ToggleButton,
  Paper,
} from "@mui/material";
const CreateAppointment = ({ setPage, setData, data }) => {
  const [selected, setSelected] = useState(null);
  // const [selectedDate, setSelectedDate] = useState(null);
  const [apDay, setApDay] = useState(null);
  const [indexOfSelected, setIndexOfSelected] = useState(null);
  const [apIndex, setApIndex] = useState(null);
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [appointmentHour, setAppointmentHour] = useState("");
  const [selectedDate, setSelectedDate] = useState("04/05");
  const [dateV, setDateV] = useState("");
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
              color={
                apDay == day.value && apIndex === dIndex
                  ? "secondary"
                  : "primary"
              }
              onClick={() => {
                setApDay(day.value);
                setApIndex(dIndex);
                setSelectedDate(day.value);
              }}
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
      {appointments.map((appointment, index) => (
        <Card
          elevation={3}
          sx={{ width: "max-content", p: "20px" }}
          key={index}
        >
          <Typography variant="h6">Doctor: {appointment.doctor}</Typography>
          <Box sx={{ display: "flex" }}>
            {appointment.dates.map((date) => {
              if (date.value === selectedDate) {
                return date.hours.map((hour, hourIndex) => (
                  <Button
                    variant="contained"
                    onClick={() => {
                      setSelected(hour.value);
                      setIndexOfSelected(index);
                      setDoctor(appointment.doctor);
                      setAppointmentHour(hour.value);
                    }}
                    key={hourIndex}
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
          setData({
            ...data,
            username: "Samuel",
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
