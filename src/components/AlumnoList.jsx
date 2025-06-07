import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

const AlumnoList = ({ alumnos, onEliminar, onEdit, onDetail }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>LU</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Curso</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Domicilio</TableCell>
            <TableCell>Teléfono</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alumnos.map((alumno) => (
            <TableRow key={alumno.lu}>
              <TableCell>{alumno.lu}</TableCell>
              <TableCell>{alumno.nombre}</TableCell>
              <TableCell>{alumno.apellido}</TableCell>
              <TableCell>{alumno.curso}</TableCell>
              <TableCell>{alumno.email}</TableCell>
              <TableCell>{alumno.domicilio}</TableCell>
              <TableCell>{alumno.telefono}</TableCell>
              <TableCell>
                <Button variant="outlined" size="small" onClick={() => onDetail(alumno)}>Ver Detalle</Button>{' '}
                <Button variant="contained" size="small" onClick={() => onEdit(alumno)} sx={{ mx: 1 }}>Editar</Button>{' '}
                <Button variant="outlined" size="small" color="error" onClick={() => onEliminar(alumno.lu)}>Eliminar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AlumnoList;