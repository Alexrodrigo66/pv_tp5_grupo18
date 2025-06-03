import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> |{' '}
      <Link to="/alumnos">Lista de Alumnos</Link> |{' '}
      <Link to="/nuevo">Nuevo Alumno</Link> |{' '}
      <Link to="/acerca">Acerca de</Link>
    </nav>
  );
}