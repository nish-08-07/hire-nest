// src/components/JobFilter.jsx
import { useState } from "react";

function JobFilter({ jobs, onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  // Unique locations and types
  const locations = Array.from(new Set(jobs.map(job => job.location)));
  const types = Array.from(new Set(jobs.map(job => job.type)));

  const handleFilterChange = () => {
    onFilterChange({
      search: searchTerm,
      location: locationFilter,
      type: typeFilter
    });
  };

  return (
    <div className="job-filter">
      <div className="filter-group">
        <label>Search</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleFilterChange();
          }}
          placeholder="Search by title or company..."
          className="filter-input"
        />
      </div>

      <div className="filter-group">
        <label>Location</label>
        <select
          value={locationFilter}
          onChange={(e) => {
            setLocationFilter(e.target.value);
            handleFilterChange();
          }}
          className="filter-input"
        >
          <option value="">All Locations</option>
          {locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Type</label>
        <select
          value={typeFilter}
          onChange={(e) => {
            setTypeFilter(e.target.value);
            handleFilterChange();
          }}
          className="filter-input"
        >
          <option value="">All Types</option>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <button 
        className="btn btn-outline filter-clear"
        onClick={() => {
          setSearchTerm("");
          setLocationFilter("");
          setTypeFilter("");
          onFilterChange({ search: "", location: "", type: "" });
        }}
      >
        Clear All
      </button>
    </div>
  );
}

export default JobFilter;
