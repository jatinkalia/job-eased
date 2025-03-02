import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyPage = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios.get('/api/candidates')
      .then(response => setCandidates(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Available Candidates</h1>
      {candidates.map(candidate => (
        <div key={candidate._id}>
          <h2>{candidate.name}</h2>
          <p>{candidate.skills.join(', ')}</p>
          <p>{candidate.experience}</p>
          <a href={candidate.linkedinProfile}>LinkedIn Profile</a>
        </div>
      ))}
    </div>
  );
};

export default CompanyPage;