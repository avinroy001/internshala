import React from 'react';
import './FilterBar.css';

const FilterBar = ({ filters, setFilters, allJobs }) => {
  const getUniqueValues = (key) => {
    const values = allJobs.flatMap(job =>
      key === 'location_names'
        ? job[key] || []
        : [job[key]]
    );
    return [...new Set(values)].filter(Boolean);
  };

  const profiles = getUniqueValues('title');
  const locations = getUniqueValues('location_names');
  const durations = getUniqueValues('duration');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="filter-bar">
      <select name="profile" value={filters.profile} onChange={handleChange}>
        <option value="">All Profiles</option>
        {profiles.map((p, i) => (
          <option key={i} value={p}>{p}</option>
        ))}
      </select>

      <select name="location" value={filters.location} onChange={handleChange}>
        <option value="">All Locations</option>
        {locations.map((l, i) => (
          <option key={i} value={l}>{l}</option>
        ))}
      </select>

      <select name="duration" value={filters.duration} onChange={handleChange}>
        <option value="">All Durations</option>
        {durations.map((d, i) => (
          <option key={i} value={d}>{d}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
