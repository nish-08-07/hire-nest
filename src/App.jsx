// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { BrowserRouter ,  Routes, Route } from "react-router-dom";
// Pages import
import { Routes, Route } from "react-router-dom";  
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import JobsList from "./pages/JobsList";
import JobDetails from "./pages/JobDetails";
import Dashboard from "./pages/Dashboard";
import PostJob from "./pages/PostJob";
import NotFound from "./pages/NotFound";

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
  return (
       <div className= "App">
            <Routes>
      
                 <Route path="/" element={<Home />} />
                 <Route path="/login" element={<Login />} />
                 <Route path="/signup" element={<Signup />} />
                 <Route path="/jobs" element={<JobsList />} />
                       {/* :id = dynamic route for specific job */}
                 <Route path="/jobs/:id" element={<JobDetails />} />
                 <Route path="/dashboard" element={<Dashboard />} />
                 <Route path="/post-job" element={<PostJob />} />
                       {/* catch-all for 404 */}
                 <Route path="*" element={<NotFound />} />
             </Routes>
               

        </div>
  );
}

export default App

