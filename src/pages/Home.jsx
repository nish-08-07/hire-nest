// // src/pages/Home.jsx
// function Home() {
//   return <h1>Home Page</h1>;
// }
// export default Home;

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>Find Your Dream Job</h1>
          <p className="hero-subtitle">
            Discover thousands of job opportunities across various industries. 
            Start your career journey today!
          </p>
          <Link to="/jobs" className="btn btn-primary btn-large hero-btn">
            Browse Jobs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
