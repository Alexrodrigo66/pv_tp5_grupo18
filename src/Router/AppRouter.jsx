import { Routes,Route } from "react-router-dom"
import Home from '../pages/Home';
import ListaAlumnos from '../pages/ListaAlumnos';
import NuevoAlumno from '../pages/NuevoAlumno';
import EditarAlumno from '../pages/EditarAlumno';
import DetalleAlumno from '../pages/DetalleAlumno';
import AcercaDe from '../pages/AcercaDe';

export const AppRouter = ({ alumnos, setAlumnos }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alumnos" element={<ListaAlumnos alumnos={alumnos} setAlumnos={setAlumnos} />} />
      <Route path="/nuevo" element={<NuevoAlumno setAlumnos={setAlumnos} />} />
      <Route path="/alumnos/:id/editar" element={<EditarAlumno alumnos={alumnos} setAlumnos={setAlumnos} />} />
      <Route path="/alumnos/:id" element={<DetalleAlumno alumnos={alumnos} />} />
      <Route path="/acerca" element={<AcercaDe />} />
    </Routes>
  );
};


