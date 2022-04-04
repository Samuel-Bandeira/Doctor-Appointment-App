import { Box } from "@mui/material";
import { useState } from "react";
import CreateAppointment from "./CreateAppointment";
import PayAppointment from "./PayAppointment";
const Appointment = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    username: "",
    doctor_name: "",
    specialty: "",
    appointment_date: "",
    appointment_hour: "",
    appointment_price: "",
  });

  return (
    <Box>
      {page === 0 && (
        <CreateAppointment
          setPage={setPage}
          data={data}
          setData={setData}
        ></CreateAppointment>
      )}
      {page === 1 && <PayAppointment data={data} setPage={setPage} />}
    </Box>
  );
};

export default Appointment;
