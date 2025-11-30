import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- PAGE IMPORTS ---
import Home from './pages/Home';
import About from './pages/About';
import Action from './pages/Action';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Research from './pages/Research';
import Timeline from './pages/Timeline';
// Removed: Speakers & Reflections

// --- COMPONENTS ---
import Analytics from './components/Analytics';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
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