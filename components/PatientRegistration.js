import React, { useState } from 'react';
import './Registration.css';

const PatientRegistration = () => {
  const [patientId, setPatientId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [occupation, setOccupation] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [priorPregnancies, setPriorPregnancies] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission and save to database
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Patient Registration</h2>
        <label>Patient ID</label>
        <input type="text" value={patientId} onChange={(e) => setPatientId(e.target.value)} required />
      </div>
      <div>
        <label>First Name</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div>
        <label>Address</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </div>
      <div>
        <label>Occupation</label>
        <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} required />
      </div>
      <div>
        <label>Date of Birth</label>
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
      </div>
      <div>
        <label>Age</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} required />
      </div>
      <div>
        <label>Gender</label>
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} required />
      </div>
      <div>
        <label>Blood Type</label>
        <input type="text" value={bloodType} onChange={(e) => setBloodType(e.target.value)} required />
      </div>
      <div>
        <label>Prior Pregnancies</label>
        <input type="text" value={priorPregnancies} onChange={(e) => setPriorPregnancies(e.target.value)} required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default PatientRegistration;
