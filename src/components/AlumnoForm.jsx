import { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function AlumnoForm({ alumnoInicial, onSubmit }) {
  const [form, setForm] = useState({
    lu: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: '',
  });

  useEffect(() => {
    if (alumnoInicial) {
      setForm(alumnoInicial);
    }
  }, [alumnoInicial]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}
    >
      {Object.entries(form).map(([key, value]) => (
        <TextField
          key={key}
          label={key.toUpperCase()}
          name={key}
          value={value}
          onChange={handleChange}
          required
          disabled={key === 'lu' && alumnoInicial}
          type={key === 'email' ? 'email' : 'text'}
          fullWidth
        />
      ))}
      <Button type="submit" variant="contained">Guardar</Button>
    </Box>
  );
}