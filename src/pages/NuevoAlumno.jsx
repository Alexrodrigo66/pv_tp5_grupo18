import { useNavigate } from 'react-router-dom';
import AlumnoForm from '../components/AlumnoForm';

export default function NuevoAlumno({ setAlumnos }) {
  const navigate = useNavigate();

  const handleSubmit = (alumno) => {
    setAlumnos(prev => [...prev, alumno]);
    navigate('/alumnos');
  };

  return (
    <div>
      <h2>Nuevo Alumno</h2>
      <AlumnoForm onSubmit={handleSubmit} />
    </div>
  );
}