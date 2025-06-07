import { useParams, useNavigate } from 'react-router-dom';
import { Paper, Typography, Box, Button } from '@mui/material';

export default function DetalleAlumno({ alumnos }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const alumno = alumnos.find(a => a.lu === id);
  if (!alumno) {
    navigate('/alumnos');
    return null;
  }

  return (
    <Paper sx={{ p: 3, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>Detalle del Alumno</Typography>
      {Object.entries(alumno).map(([key, value]) => (
        <Typography key={key} variant="body1"><strong>{key.toUpperCase()}:</strong> {value}</Typography>
      ))}
      <Box mt={2}>
        <Button variant="contained" onClick={() => navigate('/alumnos')}>
          Volver a la lista
        </Button>
      </Box>
    </Paper>
  );
}