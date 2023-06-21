import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import '../style/home.css'; // Import the CSS file

const Home = ({ token, onLogout, creatorId }) => {
  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');
    window.location.reload();
  };
  
  console.log('creatorid', creatorId);

  return (
    <div>
      <div className="home-container">
        <Typography variant="h1">Welcome to the Fitness Tracker, where your mom comes to train</Typography>
        <div className={token ? 'logged-in' : 'not-logged-in'}>
          {token ? (
            <>
              <Typography variant="body1">User is logged in.</Typography>
              <Button variant="contained" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Typography variant="body1">User is not logged in.</Typography>
              <Link to="/login">
                <Button variant="contained">Go to Login</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
