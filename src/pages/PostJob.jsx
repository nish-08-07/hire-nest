// // src/pages/PostJob.jsx
// function PostJob() {
//   return <h1>Post Job Page</h1>;
// }
// export default PostJob;

// src/pages/PostJob.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PostJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    salaryRange: "",
    description: ""
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Job title is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.salaryRange.trim()) newErrors.salaryRange = "Salary range is required";
    if (!formData.description.trim()) newErrors.description = "Description is required (min 20 chars)";
    else if (formData.description.length < 20) newErrors.description = "Description must be at least 20 characters";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log("Job posted:", formData);
      alert("Job posted successfully! (Demo)");
      navigate("/dashboard");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="post-job-page">
      <div className="container">
        <div className="page-header">
          <Link to="/dashboard" className="back-btn">
            ← Back to Dashboard
          </Link>
          <h1>Post a New Job</h1>
        </div>

        <form onSubmit={handleSubmit} className="post-job-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="title">Job Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={errors.title ? "input-error" : ""}
                placeholder="e.g. Senior Frontend Developer"
              />
              {errors.title && <span className="error-message">{errors.title}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="company">Company Name *</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={errors.company ? "input-error" : ""}
                placeholder="e.g. TechCorp"
              />
              {errors.company && <span className="error-message">{errors.company}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="location">Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={errors.location ? "input-error" : ""}
                placeholder="e.g. Bangalore, KA or Remote"
              />
              {errors.location && <span className="error-message">{errors.location}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="salaryRange">Salary Range *</label>
              <input
                type="text"
                id="salaryRange"
                name="salaryRange"
                value={formData.salaryRange}
                onChange={handleChange}
                className={errors.salaryRange ? "input-error" : ""}
                placeholder="e.g. ₹8-12 LPA"
              />
              {errors.salaryRange && <span className="error-message">{errors.salaryRange}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="type">Job Type</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Remote">Remote</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Job Description *</label>
            <textarea
              id="description"
              name="description"
              rows="6"
              value={formData.description}
              onChange={handleChange}
              className={errors.description ? "input-error" : ""}
              placeholder="Describe the job requirements, responsibilities, skills needed..."
            />
            {errors.description && <span className="error-message">{errors.description}</span>}
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary btn-large">
              Post Job
            </button>
            <Link to="/dashboard" className="btn btn-outline">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostJob;
