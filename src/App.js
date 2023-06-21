import React, { useState, useEffect } from 'react';
import { Home, Routines, Activities, Register, Login, CreateActivity, Navbar, MyRoutines } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [creatorId, setCreatorId] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogin = async (newToken, creatorId) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
    setCreatorId(creatorId);
    console.log('Logged in with token:', newToken);
    console.log('Creator ID:', creatorId);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setCreatorId(null);
  };

  const onLogin = (newToken, creatorId) => {
    handleLogin(newToken, creatorId); // Call handleLogin with newToken and creatorId
  };

  return (
    <Router>
      <Navbar token={token} />
      <Routes>
        <Route path="/" element={<Home token={token} creatorId={creatorId} onLogout={handleLogout} />} />
        <Route path="/routines" element={<Routines />} />
        <Route path="/activities" element={<Activities token={token} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={React.cloneElement(<Login />, { onLogin })}
        />
        <Route path="/createactivity" element={<CreateActivity />} />
        <Route path="/myroutines" element={<MyRoutines creatorId={creatorId} />} />
      </Routes>
    </Router>
  );
}

export default App;

