import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import ListaAlumnos from './pages/ListaAlumnos';
import NuevoAlumno from './pages/NuevoAlumno';
import EditarAlumno from './pages/EditarAlumno';
import DetalleAlumno from './pages/DetalleAlumno';
import AcercaDe from './pages/AcercaDe';

export default function App() {
  const [alumnos, setAlumnos] = useState([
    {
      lu: 'APU00999',
      nombre: 'María Eugenia',
      apellido: 'Diaz',
      curso: 'Tercero',
      email: 'mariadiaz@mail.com',
      domicilio: 'Av. Congreso 125',
      telefono: '3884895999',
    },
  ]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumnos" element={<ListaAlumnos alumnos={alumnos} setAlumnos={setAlumnos} />} />
        <Route path="/nuevo" element={<NuevoAlumno setAlumnos={setAlumnos} />} />
        <Route path="/alumnos/:id/editar" element={<EditarAlumno alumnos={alumnos} setAlumnos={setAlumnos} />} />
        <Route path="/alumnos/:id" element={<DetalleAlumno alumnos={alumnos} />} />
        <Route path="/acerca" element={<AcercaDe />} />
      </Routes>
    </BrowserRouter>
  );
}
