
import React, { useState } from 'react';
import './Registration.css';

const HospitalRegistration = () => {
  const [hospitalId, setHospitalId] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [hospitalLocation, setHospitalLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission and save to database
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Hospital Registration</h2>
        <label>Hospital ID</label>
        <input type="text" value={hospitalId} onChange={(e) => setHospitalId(e.target.value)} required />
      </div>
      <div>
        <label>Hospital Name</label>
        <input type="text" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} required />
      </div>
      <div>
        <label>Hospital Location</label>
        <input type="text" value={hospitalLocation} onChange={(e) => setHospitalLocation(e.target.value)} required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default HospitalRegistration;
