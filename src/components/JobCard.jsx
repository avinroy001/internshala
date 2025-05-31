import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './JobCard.css';

const JobCard = () => {
  const [jobs, setJobs] = useState([]);
  
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://internshala.com/hiring/search', {
          headers: {
            'Content-Type': 'application/json',
          }
        });

        console.log(response.data); 
        setJobs(response.data.jobs || []); 

      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);


  return (
    <div className="jobcard">
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        jobs.map((job, index) => (
          <div key={index} className="job-item">
            <h3>{job.title}</h3>
            <p>{job.company_name}</p>
            <p>{job.location}</p>
            <p>{job.stipend || 'N/A'}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default JobCard;
