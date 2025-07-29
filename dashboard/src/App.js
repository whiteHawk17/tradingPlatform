import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './components/Dashboard';
import Holdings from './components/Holdings';
import Orders from './components/Orders';
import Positions from './components/Positions';
import Funds from './components/Funds';
import Summary from './components/Summary';
import Apps from './components/Apps';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner
  }

  if (!isAuthenticated) {
    // Redirect to the deployed frontend login page
    window.location.replace('https://trading-platform-landing-page.vercel.app/login');
    return null; // Return null to prevent further rendering of this component
  }

  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="holdings" element={<Holdings />} />
            <Route path="orders" element={<Orders />} />
            <Route path="positions" element={<Positions />} />
            <Route path="funds" element={<Funds />} />
            <Route path="summary" element={<Summary />} />
            <Route path="apps" element={<Apps />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App; 