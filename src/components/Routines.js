import React, { useEffect, useState } from "react";
import { callApi } from "../api";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import "./Routines.css"; 

const Routines = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredData = data.filter((routine) =>
    routine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="response-container">
      <Navbar />
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

