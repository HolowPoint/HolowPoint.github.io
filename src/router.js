import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import AndyResume from './components/AndyResume';
import ZachResume from './components/ZachResume';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/andyresume" element={<AndyResume />} />
      <Route path="/zachresume" element={<ZachResume />} />
    </Routes>
  );
}

export default AppRoutes;
