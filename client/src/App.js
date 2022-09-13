import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Staffs from "./components/Staffs.js";
import Students from "./components/Students.js";
import Courses from "./components/Courses.js";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/staffs" element={<Staffs />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/students" element={<Students />} />
        </Routes>
      </div>
    </Router>
  );
}
