import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Auth/Login';
import Signup from './components/Signup';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import './styles/auth.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <main className="flex-grow-1">
            <Routes>
              {/* Landing Page Routes */}
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<div>Home Page</div>} />
              <Route path="/about" element={<div>About Page</div>} />
              <Route path="/product" element={<div>Products Page</div>} />
              <Route path="/pricing" element={<div>Pricing Page</div>} />
              <Route path="/support" element={<div>Support Page</div>} />

              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* No catch-all route here to allow window.location.href to work */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 