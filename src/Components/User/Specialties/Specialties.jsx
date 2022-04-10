import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
const SpecialtiesList = [
  {
    name: "Oncology",
  },
  {
    name: "Ophthalmology",
  },
  {
    name: "Pediatrics",
  },
  {
    name: "Pathology",
  },
  {
    name: "Cardiology",
  },
  {
    name: "Pharmacology",
  },
];
const Specialties = ({ data, setData, setPage }) => {
  const [clickedSpecialty, setClickedSpecialty] = useState(data.specialty);

  return (
    <Box>
      <Typography variant="h4">Specialties</Typography>
      {SpecialtiesList.map((specialty, index) => {
        return (
          <Box key={index}>
            <Button
              variant="contained"
              value={specialty.name}
              onClick={() => {
                setClickedSpecialty(specialty.name);
              }}
              color={
                clickedSpecialty == specialty.name ? "secondary" : "primary"
              }
            >
              <Typography>{specialty.name}</Typography>
            </Button>
            <br />
            <br />
          </Box>
        );
      })}
      <Button
        variant="contained"
        color="success"
        size="large"
        onClick={() => {
          if (clickedSpecialty != "") {
            setData({
              ...data,
              specialty: clickedSpecialty,
            });
            setPage((actual) => actual + 1);
          } else {
            alert("select a specialty please!");
          }
        }}
      >
        Continue
      </Button>
    </Box>
  );
};

export default Specialties;
