// src/components/JobCard.jsx
import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className="job-header">
        <h3 className="job-title">{job.title}</h3>
        <span className="job-company">{job.company}</span>
      </div>
      
      <div className="job-meta">
        <span className="job-location">{job.location}</span>
        <span className="job-type">{job.type}</span>
        <span className="job-salary">{job.salaryRange}</span>
      </div>
      
      <p className="job-description">{job.description}</p>
      
      <div className="job-footer">
        <span className="job-posted">{job.postedAt}</span>
        <Link to={`/jobs/${job.id}`} className="btn btn-primary btn-small">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default JobCard;
