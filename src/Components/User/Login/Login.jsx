import React, { useState } from "react";
import { Button, TextField, Box, Typography, Modal } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const signInForm = [
  {
    field: "email",
    type: "email",
  },
  {
    field: "password",
    type: "password",
  },
];

const signUpForm = [
  {
    field: "name",
    type: "text",
  },
  {
    field: "last_name",
    type: "text",
  },
  {
    field: "email",
    type: "email",
  },
  {
    field: "password",
    type: "password",
  },
  {
    field: "confirm_password",
    type: "password",
  },
];

const users = [
  {
    email: "samuel@gmail.com",
    password: "samuel123",
  },
];
const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handler = (data) => {
    const user = users.find((el) => el.email === data.email);
    if (user.password === data.password) {
      navigate("/appointment");
    }
  };
  return (
    <Box>
      <Typography variant="h6">Login</Typography>
      <form onSubmit={handleSubmit(handler)}>
        {signInForm.map((el) => (
          <Box>
            <Typography>{el.field}</Typography>
            <TextField
              {...register(el.field)}
              variant="standard"
              name={el.field}
              type={el.type}
            />
          </Box>
        ))}
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>

      <Button variant="contained" color="secondary" onClick={handleOpen}>
        Sign-Up
      </Button>

      <Modal
        open={openModal}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            background: "white",
            width: "max-content",
            padding: "20px",
          }}
        >
          <Typography variant="h6">Sing Up</Typography>
          <form>
            {signUpForm.map((el) => (
              <Box>
                <Typography>{el.field}</Typography>
                <TextField
                  variant="standard"
                  name={el.field}
                  type={el.type}
                ></TextField>
              </Box>
            ))}
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default Login;
