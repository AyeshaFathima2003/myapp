
import React, { useState } from 'react';
import './Registration.css';
//import axios from 'axios';
import '../index.css'; // Import the CSS file
//import { useNavigate } from 'react-router-dom';
const NurseRegistration = () => {
  //const navigate = useNavigate();
  const [nurseId, setNurseId] = useState('');
  const [name, setName] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*const nurse = { nurseId, name, hospitalName, password };
    try {
      const response = await axios.post('/api/register/nurse', nurse);
      alert('Nurse registered successfully');
    } catch (error) {
      console.error('Error registering nurse', error);
    }
    
    navigate('/admin-login'); */
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nurse Registration</h2>
      <label>Nurse ID</label>
      <input type="text" value={nurseId} onChange={(e) => setNurseId(e.target.value)} required />
      <label>Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Hospital Name</label>
      <input type="text" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} required />
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default NurseRegistration;
