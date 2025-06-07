import { AppBar, Toolbar, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={RouterLink} to="/">Inicio</Button>
        <Button color="inherit" component={RouterLink} to="/alumnos">Lista de Alumnos</Button>
        <Button color="inherit" component={RouterLink} to="/nuevo">Nuevo Alumno</Button>
        <Button color="inherit" component={RouterLink} to="/acerca">Acerca de</Button>
      </Toolbar>
    </AppBar>
  );
}