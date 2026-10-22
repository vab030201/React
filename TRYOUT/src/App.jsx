
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/home';
import Course from './components/course.jsx';

function App() {
  return (
    <>
      <p>This is a simple React app.</p>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/navbar" element={<Navbar name="Vibha" />} />
        
      </Routes>
    </>
  );
}

export default App;
