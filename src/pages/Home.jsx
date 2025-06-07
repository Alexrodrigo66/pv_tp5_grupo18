import { Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>Bienvenidos al sistema de gestión de alumnos</Typography>
      <Typography>Usa el menú para navegar.</Typography>
    </Container>
  );
}