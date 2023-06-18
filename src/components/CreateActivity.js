import React, { useState } from 'react';
import { callApi } from '../api';

const CreateActivity = () => {
  const [activityData, setActivityData] = useState({
    name: '',
    description: '',
    duration: '',
  });

  const handleInputChange = (event) => {
    setActivityData({
      ...activityData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token'); // Get the token from local storage

      if (!token) {
        throw new Error('Token not found. Please log in.');
      }

      const response = await callApi({
        url: '/activities',
        method: 'POST',
        token, // Pass the token in the request headers
        body: activityData,
      });

      console.log(response); // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Create Activity</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={activityData.name} onChange={handleInputChange} />

        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" value={activityData.description} onChange={handleInputChange} />

        <label htmlFor="duration">Duration:</label>
        <input type="text" id="duration" name="duration" value={activityData.duration} onChange={handleInputChange} />

        <button type="submit">Create Activity</button>
      </form>
    </div>
  );
};

export default CreateActivity;
