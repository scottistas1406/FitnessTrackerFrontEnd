import React, { useEffect, useState } from 'react';
import { callApi } from '../api';
import '../style/activities.css'; // Import the CSS file

import { Link } from 'react-router-dom';

const Activities = ({ token }) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await callApi({
          url: '/activities',
        });

        setData(response);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredActivities = data.filter((activity) =>
    activity.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('activities', token); // Log the token value for troubleshooting

  return (
    <div className="activities-container">
     
      <div>
        <input
          type="text"
          placeholder="Search activities..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      {token && (
        <Link to="/CreateActivity">
          <button className="create-activity-button">Create Activity</button>
        </Link>
      )}

      <div className="activities-list">
        {filteredActivities.map((activity) => {
          return (
            <div className="activity-card" key={activity.id}>
              <h3>{activity.name}</h3>
              <p>Description: {activity.description}</p>
              <p>Duration: {activity.duration}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;





  





