import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/aboutus';
import Contact from './pages/contact';
import License from './pages/license';
import Seminar from './pages/siminar';
import Training from './pages/training';
import Gettingstarted from './pages/gettingstarted';
import Funding from './pages/funding';
import Header from './components/Header';

function App() {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const toggleMobileMenu = () => {
     console.log("Toggle function called");
     setIsMobileMenuOpen(!isMobileMenuOpen);
   };
//    const toggleMobileMenu = () => {
//     console.log("Toggle function called");
//     setIsMobileMenuOpen(false); // Always close the menu
//  };

  return (
    <div className={`page-wrapper`}>
      <Router>

        <Header />

        {/* Mobile wrapper */}
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/aboutus" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/license" element={<License />} />
          <Route exact path="/seminar" element={<Seminar />} />
          <Route exact path="/training_programmes" element={<Training />} />
          <Route exact path="/getting_started" element={<Gettingstarted />} />
          <Route exact path="/funding" element={<Funding />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
