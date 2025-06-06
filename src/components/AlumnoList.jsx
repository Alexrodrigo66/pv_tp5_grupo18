import React from 'react';
import {useNavigate } from 'react-router-dom';

const AlumnoList = ({ alumnos, onEliminar}) => {
  const navigate = useNavigate();

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
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno) => (
              <tr key={alumno.lu}>
                <td>{alumno.lu}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.curso}</td>
                <td>{alumno.email}</td>
                <td>
                  <button onClick={() => navigate(`/alumnos/${alumno.lu}`)}>Ver Detalle</button>{' '}
                  <button onClick={() => navigate(`/alumnos/${alumno.lu}/editar`)}>Editar</button>{' '}
                  <button onClick={() => eliminar(alumno.lu)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default AlumnoList;
