import React from 'react'
import './App.css';
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import ScrollToTop from './pages/ScrollToTop';
import Contact from './pages/Contact/Contact';
import About from './pages/About US/About';
import Services from './pages/Services/Services';
import Light from './pages/Services/Lighting';
import Interior from './pages/Services/Interior';
import Products from './pages/Products/Products';
import Project from './pages/Project/Project';

const App = () => {
  return (

    <>
      <Router>
        {/* <Media/> */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Products/>} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lighting" element={<Light />} />
          <Route path="/interior" element={<Interior />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
