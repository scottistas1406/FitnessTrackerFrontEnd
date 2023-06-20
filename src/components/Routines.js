import React, { useEffect, useState } from "react";
import { callApi } from "../api";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import "../style/routines.css"; // Import the CSS file

const Routines = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    goal: ""
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await callApi({
          url: "/routines",
        });

        console.log("Response :", response);
        setData(response);

      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token'); // Get the token from local storage

      if (!token) {
        throw new Error('Token not found. Please log in.');
      }

      const response = await callApi({
        url: "/routines",
        method: "POST",
        token, // Pass the token in the request headers
        body: {
          name: formData.name,
          goal: formData.goal,
          isPublic: true
        }
      });

      console.log("Response:", response);
      // Handle the response as needed

      // Reset the form after successful submission
      setFormData({
        name: "",
        goal: ""
      });

      // Hide the form
      setShowForm(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const filteredData = data.filter((routine) =>
    routine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isLoggedIn = localStorage.getItem('token'); // Check if the user is logged in

  const handleAddRoutine = () => {
    setShowForm(true);
  };

  return (
    <div className="response-container">
     
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by routine name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div>
          <Link to="/">
            <button>Go to Home</button>
          </Link>
          {isLoggedIn && !showForm && (
            <button onClick={handleAddRoutine}>Add Routine</button>
          )}
          {showForm && (
            <div>
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Routine name"
                  value={formData.name}
                  onChange={handleFormChange}
                />
                <input
                  type="text"
                  name="goal"
                  placeholder="Routine goal"
                  value={formData.goal}
                  onChange={handleFormChange}
                />
                <button type="submit">Add Routine</button>
              </form>
            </div>
          )}
        </div>
      </div>
      {filteredData.map((routine) => (
        <div key={routine.id} className="routine-card-container">
          <div className="routine-card">
            <h3>{routine.name}</h3>
            <p className="description">Description: {routine.description}</p>
            <p className="creator">Creator: {routine.creatorName}</p>
          </div>
          <div className="activity-card-container">
            {routine.activities.map((activity) => (
              <div key={activity.id} className="activity-card">
                <h5>{activity.name}</h5>
                <p className="description">Description: {activity.description}</p>
                <p className="details">Duration: {activity.duration} minutes</p>
                <p className="details">Count: {activity.count}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Routines;




