// function JobsList() {
//   return (
//     <div>
//       <h1>Jobs List Page</h1>
//       <p>Jobs will be listed here</p>
//     </div>
//   );
// }

// export default JobsList;  // ← Ye line add karo (sabse important!)
// src/pages/JobsList.jsx
import { useState, useMemo } from "react";
import { dummyJobs } from "../data/jobs";
import JobCard from "../components/JobCard";
import JobFilter from "../components/JobFilter";

function JobsList() {
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    type: ""
  });


  // Filtered jobs logic
  const filteredJobs = useMemo(() => {
    return dummyJobs.filter(job => {
      // Search filter (title OR company)
      const matchesSearch = 
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.search.toLowerCase());

      // Location filter
      const matchesLocation = !filters.location || job.location === filters.location;

      // Type filter
      const matchesType = !filters.type || job.type === filters.type;

      return matchesSearch && matchesLocation && matchesType;
    });
    } , [filters]);

  return (
    <div className="jobs-page">
      <div className="container">
        <div className="page-header">
          <div className="page-header-left"></div>
          <h1>Latest Jobs ({filteredJobs.length})</h1>
          <p>Discover amazing opportunities near you</p>
        </div>
        
        {/* Filters */}
        <JobFilter 
          jobs={dummyJobs}
          onFilterChange={setFilters}
        />

        {/* Jobs grid */}
        {filteredJobs.length === 0 ? (
          <div className="no-jobs">
            <h3>No jobs found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="jobs-grid">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default JobsList;
