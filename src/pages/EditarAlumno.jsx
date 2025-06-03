import { useParams, useNavigate } from 'react-router-dom';
import AlumnoForm from '../components/AlumnoForm';

export default function EditarAlumno({ alumnos, setAlumnos }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const alumno = alumnos.find(a => a.lu === id);
  if (!alumno) {
    navigate('/alumnos');
    return null;
  }

  const handleSubmit = (alumnoEditado) => {
    setAlumnos(alumnos.map(a => (a.lu === id ? alumnoEditado : a)));
    navigate('/alumnos');
  };

  return (
    <div>
      <h2>Editar Alumno</h2>
      <AlumnoForm alumnoInicial={alumno} onSubmit={handleSubmit} />
    </div>
  );
}