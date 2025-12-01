import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Action from './pages/Action';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Research from './pages/Research';
import Timeline from './pages/Timeline';
import Analytics from './pages/Analytics';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // FIXED: Default is now 'light'
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <ScrollToTop />
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/action" element={<Action />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/research" element={<Research />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;
