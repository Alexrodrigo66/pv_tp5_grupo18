import React from 'react';
import {useNavigate } from 'react-router-dom';
import {AlumnoItem} from './AlumnoItem';

const AlumnoList = ({ alumnos, onEliminar}) => {
  const navigate = useNavigate();

    const editar = (alumno) => {
    navigate(`/alumnos/${alumno.lu}/editar`);
  };

  const detalle = (alumno) => {
    navigate(`/alumnos/${alumno.lu}`);
  };

  const eliminar = (lu) => {
      onEliminar(lu);
  }

  return (
    <div>
      {alumnos.length === 0 ? (
        <p>No hay alumnos registrados.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>LU</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Curso</th>
              <th>Email</th>
              <th>Domicilio</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno) => (
              <AlumnoItem
                key={alumno.lu}
                alumno={alumno}
                onEdit={editar}
                onDelete={eliminar}
                onDetail={detalle}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default AlumnoList;
