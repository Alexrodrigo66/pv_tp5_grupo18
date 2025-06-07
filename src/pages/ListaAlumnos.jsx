import { Container, Typography } from '@mui/material';
import AlumnoList from '../components/AlumnoList';
import { useNavigate } from 'react-router-dom';

export default function ListaAlumnos({ alumnos, setAlumnos }) {
  const navigate = useNavigate();

  const handleEliminar = (lu) => {
    if (window.confirm('¿Seguro que querés eliminar este alumno?')) {
      setAlumnos(alumnos.filter(a => a.lu !== lu));
    }
  };

  const handleEditar = (alumno) => {
    navigate(`/alumnos/${alumno.lu}/editar`);
  };

  const handleDetalle = (alumno) => {
    navigate(`/alumnos/${alumno.lu}`);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Lista de Alumnos</Typography>
      <AlumnoList
        alumnos={alumnos}
        onEliminar={handleEliminar}
        onEdit={handleEditar}
        onDetail={handleDetalle}
      />
    </Container>
  );
}