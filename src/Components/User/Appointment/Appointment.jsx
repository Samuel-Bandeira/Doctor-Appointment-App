import { Box } from "@mui/material";
import { useState } from "react";
import CreateAppointment from "./CreateAppointment";
import PayAppointment from "./PayAppointment";
import Specialties from "../Specialties/Specialties";
const Appointment = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    username: "",
    doctor_name: "",
    specialty: "",
    appointment_date: "",
    appointment_date_index: "",
    appointment_hour: "",
    appointment_hour_index: "",
    appointment_price: "",
  });
  return (
    <Box>
      {page === 0 && (
        <Specialties data={data} setPage={setPage} setData={setData} />
      )}
      {page === 1 && (
        <CreateAppointment
          setPage={setPage}
          data={data}
          setData={setData}
        ></CreateAppointment>
      )}
      {page === 2 && <PayAppointment data={data} setPage={setPage} />}
    </Box>
  );
};

export default Appointment;
