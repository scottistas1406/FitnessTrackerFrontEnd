import React, { useEffect, useState } from 'react';
import { callApi } from '../api';
import { Link } from 'react-router-dom';

const MyRoutines = ({ creatorId }) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await callApi({
          url: '/routines',
        });

        console.log('Response:', response);
        console.log('creatorid',creatorId)
        // Filter the data based on the creatorId
        const filteredData = response.filter((routine) => routine.creatorId === creatorId);
        setData(filteredData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [creatorId]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((routine) =>
    routine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
console.log('creatorId',creatorId)
  return (
  
  <div>
      <h1>My Routines</h1>
      <input
        type="text"
        placeholder="Search by routine name"
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredData.map((routine) => (
        <div key={routine.id}>
          <h3>{routine.name}</h3>
          <p>Description: {routine.description}</p>
          <p>Creator: {routine.creatorName}</p>
        </div>
      ))}
      <Link to="/routines">Go to All Routines</Link>
    </div>
  );
};

export default MyRoutines;

