
import React, { useState, useContext } from 'react';
import UserContext from '../../contexts/users/UserContext';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

export default function Register() {
  const userCtx = useContext(UserContext);
  const { registerUser } = userCtx;

  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const sendData = async (event) => {
    event.preventDefault();
    try {
      await registerUser(data);
      setSuccess("Registro exitoso. ¡Bienvenido!");
      setError("");
    } catch (err) {
      setError("Error al registrar. Por favor, inténtalo de nuevo.");
      setSuccess("");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
        <Typography variant="h5">Crear cuenta</Typography>
        <Box
          component="form"
          onSubmit={sendData}
          sx={{ mt: 1, width: '100%' }}
        >
          <TextField
            margin="normal"
            fullWidth
            id="username"
            name="username"
            label="Nombre de usuario"
            type="text"
            required
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            id="email"
            name="email"
            label="Email"
            type="email"
            required
            autoComplete="email"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            id="password"
            name="password"
            label="Contraseña"
            type="password"
            required
            onChange={handleChange}
          />
          {error && <Typography color="error">{error}</Typography>}
          {success && <Typography color="success">{success}</Typography>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Registrarme
          </Button>
        </Box>
      </Box>
    </Container>
  );
}