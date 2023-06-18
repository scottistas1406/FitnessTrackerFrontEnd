import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { callApi } from '../api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const response = await callApi({
        url: '/users/login',
        method: 'POST',
        body: {
          username,
          password,
        },
      });

      alert(response.message); // Display login success message
      // Store the token in local storage or state for further use
      localStorage.setItem('token', response.token); // Save the token in local storage

      // Redirect to the home page
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Login failed. Please try again.'); // Display login failure message
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
      <button onClick={loginUser}>Login</button>
    </div>
  );
};

export default Login;
