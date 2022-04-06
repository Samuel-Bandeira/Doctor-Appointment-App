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
  console.log(data);

  const [specialtyValue, setSpecialtyValue] = useState("");
  const [clicked, setClicked] = useState(null);
  const [indexCompare, setIndexCompare] = useState(null);
  return (
    <Box>
      <Typography variant="h4">Specialties</Typography>
      {SpecialtiesList.map((specialty, index) => (
        <Box key={index}>
          <Button
            variant="contained"
            value={specialty.name}
            onClick={(event) => {
              setSpecialtyValue(event.currentTarget.value);
              setClicked(specialty.name);
              setIndexCompare(index);
            }}
            color={
              clicked == specialty.name && indexCompare == index
                ? "secondary"
                : "primary"
            }
          >
            <Typography>{specialty.name}</Typography>
          </Button>
          <br />
          <br />
        </Box>
      ))}
      <Button
        variant="contained"
        color="success"
        size="large"
        onClick={() => {
          setData({
            ...data,
            specialty: specialtyValue,
          });
          setPage((actual) => actual + 1);
        }}
      >
        Continue
      </Button>
    </Box>
  );
};

export default Specialties;
