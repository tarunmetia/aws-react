import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Component/pages/Main/Home';
import About from '../Component/pages/OtherContent/About';
import Contact from '../Component/pages/OtherContent/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
