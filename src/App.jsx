// src/App.jsx

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Action from './pages/Action';
import Timeline from './pages/Timeline';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact'; // Reflections and Speakers are removed
import PrintExport from './components/PrintExport';

// Import admin data
import adminData from './admin.json';

// Helper to scroll to top on page change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header data={adminData} />
      <main id="main-content">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home data={adminData} />} />
          <Route path="/about" element={<About data={adminData} />} />
          <Route path="/research" element={<Research data={adminData} />} />
          <Route path="/action" element={<Action data={adminData} />} />
          <Route path="/timeline" element={<Timeline data={adminData} />} />
          <Route path="/gallery" element={<Gallery data={adminData} />} />
          <Route path="/contact" element={<Contact data={adminData} />} />
          {/* Routes for /reflections and /speakers are now removed */}
        </Routes>
      </main>
      <PrintExport />
      <Footer data={adminData} />
    </div>
  );
}

export default App;