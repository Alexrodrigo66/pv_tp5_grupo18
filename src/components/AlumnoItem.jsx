import React from 'react';
import { TableRow, TableCell, Button, Stack } from '@mui/material';

const AlumnoItem = ({ alumno, onEdit, onDelete, onDetail }) => {
  return (
    <TableRow>
      <TableCell>{alumno.lu}</TableCell>
      <TableCell>{alumno.nombre}</TableCell>
      <TableCell>{alumno.apellido}</TableCell>
      <TableCell>{alumno.curso}</TableCell>
      <TableCell>{alumno.email}</TableCell>
      <TableCell>{alumno.domicilio}</TableCell>
      <TableCell>{alumno.telefono}</TableCell>
      <TableCell>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" size="small" onClick={() => onDetail(alumno)}>
            Ver Detalle
          </Button>
          <Button variant="contained" size="small" onClick={() => onEdit(alumno)}>
            Editar
          </Button>
          <Button variant="outlined" color="error" size="small" onClick={() => onDelete(alumno.lu)}>
            Eliminar
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export default AlumnoItem;