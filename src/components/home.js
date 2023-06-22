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
        <Typography variant="h1">Welcome to the Fitness Tracker, where your Mom comes to train</Typography>
        <img src="https://media.istockphoto.com/id/672837092/photo/happy-grandmother-in-fitness-center.jpg?s=612x612&w=0&k=20&c=QjxMUuY3OS1V6Q4AaLort19G61YdiuHFyj-1hV6Fekw=" alt="Grandmother in fitness center" />
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
