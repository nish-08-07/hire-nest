// // src/pages/Dashboard.jsx
// function Dashboard() {
//   return <h1>Dashboard Page</h1>;
// }
// export default Dashboard;

// src/pages/Dashboard.jsx
import { Link } from "react-router-dom";

function Dashboard() {
  // Dummy data for demo
  const appliedJobs = [
    { id: 1, title: "Frontend Developer", company: "TechCorp", status: "Applied" },
    { id: 3, title: "Backend Developer", company: "FinTech", status: "Shortlisted" },
  ];

  const savedJobs = [
    { id: 2, title: "Full Stack Developer", company: "StartupXYZ" },
  ];

  return (
    <div className="dashboard-page">
      <div className="container">
        {/* Welcome header */}
        <div className="dashboard-header">
          <div>
            <h1>Welcome back, John Doe!</h1>
            <p className="dashboard-subtitle">Here's what's happening with your job applications</p>
          </div>
          <Link to="/post-job" className="btn btn-primary">
            Post a Job (Recruiter)
          </Link>
        </div>

        {/* Stats cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>2</h3>
            <p>Applied Jobs</p>
          </div>
          <div className="stat-card">
            <h3>1</h3>
            <p>Shortlisted</p>
          </div>
          <div className="stat-card">
            <h3>1</h3>
            <p>Saved Jobs</p>
          </div>
        </div>

        {/* Applied Jobs section */}
        <div className="dashboard-section">
          <h2>Applied Jobs</h2>
          {appliedJobs.length === 0 ? (
            <p className="empty-state">No applied jobs yet. Start applying!</p>
          ) : (
            <div className="jobs-table">
              {appliedJobs.map((job) => (
                <div key={job.id} className="table-row">
                  <div className="table-cell">
                    <h4>{job.title}</h4>
                    <span>{job.company}</span>
                  </div>
                  <div className="table-cell status">
                    <span className={`status-badge status-${job.status.toLowerCase()}`}>
                      {job.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Saved Jobs section */}
        <div className="dashboard-section">
          <h2>Saved Jobs</h2>
          {savedJobs.length === 0 ? (
            <p className="empty-state">No saved jobs. Save some jobs to view here!</p>
          ) : (
            <div className="jobs-grid">
              {savedJobs.map((job) => (
                <div key={job.id} className="job-card saved-job">
                  <h4>{job.title}</h4>
                  <span>{job.company}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
