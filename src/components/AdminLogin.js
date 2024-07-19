import React, { useState } from 'react';

const AdminLogin = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission and save to database
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Admin Login</h2>
        <label>User ID</label>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
      <div>
        <a href="/forgot-password">Forgot Password?</a>
      </div>
    </form>
  );
};

export default AdminLogin;
