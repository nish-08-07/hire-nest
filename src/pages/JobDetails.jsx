// // src/pages/JobDetails.jsx
// function JobDetails() {
//   return <h1>Job Details Page</h1>;
// }
// export default JobDetails;

// src/pages/JobDetails.jsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { dummyJobs } from "../data/jobs";
import { useEffect, useMemo } from "react";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // useMemo se directly job find karo (effect ki zaroorat nahi)
  const job = useMemo(() => {
    return dummyJobs.find((j) => j.id === parseInt(id));
  }, [id]);

  // Job na mile to redirect
  useEffect(() => {
    if (!job) {
      const timer = setTimeout(() => {
        navigate("/jobs");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [job, navigate]);

  if (!job) {
    return (
      <div className="job-detail-loading">
        <div className="container">
          <h2>Job not found</h2>
          <p>Redirecting to jobs list...</p>
          <Link to="/jobs" className="btn btn-primary">
            Go to Jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="job-detail-page">
      <div className="container">
        {/* Header */}
        <div className="job-detail-header">
          <Link to="/jobs" className="back-btn">
            ← Back to Jobs
          </Link>
          <div className="job-detail-meta">
            <span className="job-company">{job.company}</span>
            <span className="job-posted">{job.postedAt}</span>
          </div>
        </div>

        {/* Job content */}
        <div className="job-detail-content">
          <div className="job-main-info">
            <h1>{job.title}</h1>
            <div className="job-meta">
              <span className="job-location">{job.location}</span>
              <span className="job-type">{job.type}</span>
              <span className="job-salary">{job.salaryRange}</span>
            </div>
            <p className="job-description-full">
              {job.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="job-actions">
            <button className="btn btn-primary btn-large apply-btn">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
