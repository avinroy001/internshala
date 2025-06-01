import React from "react";
import "./FilterBar.css";

import { MdLocationOn, MdAccessTime } from "react-icons/md";
import { IoBriefcase } from "react-icons/io5";
const FilterBar = ({ filters, setFilters, allJobs }) => {
  const getUniqueValues = (key) => {
    const values = allJobs.flatMap((job) =>
      key === "location_names" ? job[key] || [] : [job[key]]
    );
    return [...new Set(values)].filter(Boolean);
  };

  const profiles = getUniqueValues("title");
  const locations = getUniqueValues("location_names");
  const durations = getUniqueValues("duration");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <IoBriefcase className="filter-icon" />
        <select name="profile" value={filters.profile} onChange={handleChange}>
          <option value="">All Profiles</option>
          {profiles.map((p, i) => (
            <option key={i} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <MdLocationOn className="filter-icon" />
        <select
          name="location"
          value={filters.location}
          onChange={handleChange}
        >
          <option value="">All Locations</option>
          {locations.map((l, i) => (
            <option key={i} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <MdAccessTime className="filter-icon" />
        <select
          name="duration"
          value={filters.duration}
          onChange={handleChange}
        >
          <option value="">All Durations</option>
          {durations.map((d, i) => (
            <option key={i} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
