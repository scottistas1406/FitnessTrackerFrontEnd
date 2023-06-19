import React, { useState, useEffect } from 'react';
import { Home, Routines, Activities, Register, Login, CreateActivity} from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home token={token} onLogout={handleLogout} />}
        />
        <Route path="/routines" element={<Routines />} />
        <Route path="/activities" element={<Activities token={token} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/createactivity" element={<CreateActivity/>} />
      </Routes>
    </Router>
  );
}

export default App;



