import React, { useState } from 'react';
import Navbar from './Navbar';
import { callApi } from '../api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    try {
      const response = await callApi({
        url: '/users/register',
        method: 'POST',
        body: {
          username,
          password,
        },
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Register</h1>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={registerUser}>Register User</button>
    </div>
  );
};

export default Register;
