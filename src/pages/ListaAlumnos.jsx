import AlumnoList from '../components/AlumnoList';

export default function ListaAlumnos({ alumnos, setAlumnos }) {
  const handleEliminar = (lu) => {
    setAlumnos(alumnos.filter(a => a.lu !== lu));
  };

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <AlumnoList alumnos={alumnos} onEliminar={handleEliminar} />
    </div>
  );
}