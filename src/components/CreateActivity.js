import React, { useState } from 'react';
import { callApi } from '../api';
import Navbar from './Navbar';

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
      const token = localStorage.getItem('token');
  
      if (!token) {
        throw new Error('Token not found. Please log in.');
      }
  
      const response = await callApi({
        url: '/activities',
        method: 'POST',
        token,
        body: activityData,
      });
  
      console.log(response); // Handle the response as needed
  
      // Reset the form by clearing the activityData state
      setActivityData({
        name: '',
        description: '',
        duration: '',
      });
  
      // Display a success message to the user
      alert('Activity posted successfully');
  
      // Optionally, navigate back to the activities page or refresh the page
      // Add the necessary code here for navigation or page refresh
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
   
    <div>
      <Navbar />
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
