import { useState } from 'react';
import NavBar from './components/NavBar';
import {AppRouter} from './Router/approuter';

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
    <>
      <NavBar />
      <AppRouter alumnos={alumnos} setAlumnos={setAlumnos} />
    </>
  );
}
