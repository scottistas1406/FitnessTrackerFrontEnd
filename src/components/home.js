import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ token }) => {
  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');
    // Perform any additional logout actions if needed
  };

  return (
    <div>
      <h1>Welcome to the Fitness Tracker, where your mom comes to train</h1>
      {/* Render different content based on whether the user is logged in */}
      {token ? (
        <>
          <p>User is logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>User is not logged in.</p>
          <Link to="/login">
            <button>Go to Login</button>
          </Link>
        </>
      )}
      <Link to="/routines">
        <button>Go to Routines</button>
      </Link>
      <Link to="/activities">
        <button>Go to Activities</button>
      </Link>
      <Link to="/register">
        <button>Go to Register New Account</button>
      </Link>
    </div>
  );
};

export default Home;
