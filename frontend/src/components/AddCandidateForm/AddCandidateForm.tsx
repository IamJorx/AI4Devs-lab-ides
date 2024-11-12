import React, { useState } from 'react';
import './AddCandidateForm.css';

const AddCandidateForm: React.FC = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name) newErrors.name = 'El nombre es obligatorio';
    if (!lastName) newErrors.lastName = 'El apellido es obligatorio';
    if (!email || !validateEmail(email)) newErrors.email = 'Correo electrónico no válido';
    if (!phone) newErrors.phone = 'El teléfono es obligatorio';
    if (!address) newErrors.address = 'La dirección es obligatoria';
    if (!education) newErrors.education = 'La educación es obligatoria';
    if (!experience) newErrors.experience = 'La experiencia es obligatoria';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Aquí puedes manejar el envío del formulario
      console.log('Formulario enviado');
    }
  };

  return (
    <div>
      <h2>Formulario de Inscripción de Candidato</h2> {/* Cambiar el título del formulario */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="lastName">Apellido:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div>
          <label htmlFor="address">Dirección:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div>
          <label htmlFor="education">Educación:</label>
          <input
            type="text"
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
          {errors.education && <span className="error">{errors.education}</span>}
        </div>
        <div>
          <label htmlFor="experience">Experiencia:</label>
          <input
            type="text"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
          {errors.experience && <span className="error">{errors.experience}</span>}
        </div>
        <button type="submit">Guardar Candidato</button> {/* Cambiar el texto del botón */}
      </form>
    </div>
  );
};

export default AddCandidateForm;