import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Domain from './pages/Domain';
import { Milestones, Documents, Slides, About, Contact } from './pages/OtherPages';
import './styles/global.css';

function ScrollToTop() {
  const { pathname } = window.location;
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="noise-overlay" />
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/domain"     element={<Domain />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/documents"  element={<Documents />} />
          <Route path="/slides"     element={<Slides />} />
          <Route path="/about"      element={<About />} />
          <Route path="/contact"    element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
