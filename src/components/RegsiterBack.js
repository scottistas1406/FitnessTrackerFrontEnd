import React, { useState } from 'react';
import { callApi } from '../api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await callApi({
        url: '/users/register',
        method: 'POST',
        body: {
          user: {
            username: username,
            password: password,
          },
        },
      });

      if (response.token) {
        setToken(response.token);
        // Handle successful registration and token retrieval
      } else {
        // Handle registration error
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Register</button>
      </form>
      {token && <p>JSON Web Token: {token}</p>}
    </div>
  );
};

export default Register;
