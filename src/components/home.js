import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import '../style/home.css'; // Import the CSS file

const Home = ({ token }) => {
  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');
    window.location.reload();
  };
  console.log('homepage',token); // Console.log the token

  return (
    <div>
     {/* Pass the token prop to the Navbar component */}
      <div className="home-container">
        <h1>Welcome to the Fitness Tracker, where your mom comes to train</h1>
        {/* Render different content based on whether the user is logged in */}
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
