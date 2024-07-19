import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      
      <ul>
        <li><Link to="/hospital-registration">Hospital Registration</Link></li>
        <li><Link to="/patient-registration">Patient Registration</Link></li>
        <li><Link to="/nurse-registration">Nurse Registration</Link></li>
        <li><Link to="/admin-login">Admin Login</Link></li>
        <li><Link to="/patient-login">Patient Login</Link></li>
        <li><Link to="/nurse-login">Nurse Login</Link></li>
        <li><Link to="/patient-login">Patient Login</Link></li>
      </ul>
    </div>
  );
}

export default HomePage;
