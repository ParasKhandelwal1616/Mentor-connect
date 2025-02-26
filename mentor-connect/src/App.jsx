import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { TeacherLogin, StudentLogin } from './components/LoginComponents.jsx';
import StudentDashboard from './components/StudentDashboard'; // Import StudentDashboard

const App = () => {
  const [showLogin, setShowLogin] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className={showLogin ? "blur-sm bg-gray-100 min-h-screen" : "bg-gray-100 min-h-screen"}>
        <Navbar isScrolled={isScrolled} setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Stats />
              <Features />
              <Testimonials />
              <Pricing />
              <FAQ />
            </>
          } />
          <Route path="/about" element={<div className="pt-32 px-8">About Page Content</div>} />
          <Route path="/team" element={<div className="pt-32 px-8">Team Page Content</div>} />
          <Route path="/contact" element={<div className="pt-32 px-8">Contact Page Content</div>} />
          <Route path="/dashboard" element={<StudentDashboard />} /> {/* Add route for StudentDashboard */}
        </Routes>
        <Footer />
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center z-50" onClick={() => setShowLogin(null)}>
          <div className="max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            {showLogin === "/teacher-login" ? <TeacherLogin /> : <StudentLogin />}
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
