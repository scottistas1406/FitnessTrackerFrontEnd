import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Fitness Tracker</h1>
      <p></p>
      <p></p>
      <Link to="/routines">
        <button>Go to Routines</button>
      </Link>
    </div>
  );
};

export default Home;
