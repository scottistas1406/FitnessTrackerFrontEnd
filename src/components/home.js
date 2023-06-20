import React from 'react';

import { Link } from 'react-router-dom';
import '../style/home.css'; // Import the CSS file

const Home = ({ token, onLogout, creatorId }) => {
  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');
    window.location.reload();
  };
console.log('creatorid',creatorId)
  return (
    <div>
      
      <div className="home-container">
        <h1>Welcome to the Fitness Tracker, where your mom comes to train</h1>
        <div className={token ? 'logged-in' : 'not-logged-in'}>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
