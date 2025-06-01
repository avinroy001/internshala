import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/Navbar";
import JobCard from "./components/JobCard";
import FilterBar from "./components/FilterBar";

function App() {
  const [allJobs, setAllJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState({
    profile: "",
    location: "",
    duration: "",
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("https://internshala.com/hiring/search");
        const jobs = Object.values(res.data.internships_meta);
        setAllJobs(jobs);
        setFilteredJobs(jobs);
      } catch (error) {
        console.error("Error fetching internships:", error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const filtered = allJobs.filter((job) => {
      const matchesProfile = filters.profile
        ? job.title === filters.profile
        : true;
      const matchesLocation = filters.location
        ? job.location_names?.includes(filters.location)
        : true;
      const matchesDuration = filters.duration
        ? job.duration === filters.duration
        : true;

      return matchesProfile && matchesLocation && matchesDuration;
    });

    setFilteredJobs(filtered);
  }, [filters, allJobs]);

  return (
    <div>
      <NavBar />
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        allJobs={allJobs}
      />
      <JobCard jobs={filteredJobs} />
    </div>
  );
}

export default App;
