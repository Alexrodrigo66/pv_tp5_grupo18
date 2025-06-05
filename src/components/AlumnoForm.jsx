import { useState, useEffect } from 'react';

export default function AlumnoForm({ alumnoInicial, onSubmit }) {
  const [form, setForm] = useState({
    lu: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: '',
  });

  useEffect(() => {
    if (alumnoInicial) {
      setForm(alumnoInicial);
    }
  }, [alumnoInicial]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(form).map(([key, value]) => (
        <div key={key}>
          <label>{key.toUpperCase()}</label>
          <input
            type={key === 'email' ? 'email' : 'text'}
            name={key}
            value={value}
            onChange={handleChange}
            required
            disabled={key === 'lu' && alumnoInicial}
          />
        </div>
      ))}
      <button type="submit">Guardar</button>
    </form>
  );
}