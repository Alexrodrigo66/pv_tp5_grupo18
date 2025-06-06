import React from 'react';

export const AlumnoItem = ({alumno,onEdit,onDelete}) => {
  return (
    <tr className="alumno-item">
      <td>{alumno.lu}</td>
      <td>{alumno.nombre}</td>
      <td>{alumno.apellido}</td>
      <td>{alumno.curso}</td>
      <td>{alumno.email}</td>
      <td>{alumno.domicilio}</td>
      <td>{alumno.telefono}</td>
      <td>
        <button onClick={() => onEdit(alumno)}>Editar</button>
        <button onClick={() => onDelete(alumno.lu)}>Eliminar</button>
      </td>
    </tr>
  )
}
