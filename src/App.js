import Login from "./Components/User/Login/Login";
import Navbar from "./Components/User/Navbar/Navbar";
import Profile from "./Components/User/Profile/Profile";
import Appointment from "./Components/User/Appointment/Appointment";
import Specialties from "./Components/User/Specialties/Specialties";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Both/Home/Home";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="App">
      {/* <Signup></Signup> */}
      {/* <Login></Login> */}
      {/* <Navbar></Navbar> */}
      {/* <Profile></Profile> */}
      {/* <Appointment></Appointment> */}
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      {/* <Specialties></Specialties> */}
    </div>
  );
}

export default App;
