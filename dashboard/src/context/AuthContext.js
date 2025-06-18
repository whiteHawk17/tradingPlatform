// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from '../utils/axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');
    console.log('Dashboard AuthContext: Token from localStorage', token);
    console.log('Dashboard AuthContext: UserName from localStorage', userName);

    if (!token) {
      setLoading(false);
      console.log('Dashboard AuthContext: No token found, redirecting to login');
      window.location.href = `https://trading-paltform.vercel.app?token=${localStorage.getItem('token')}&userName=${localStorage.getItem('userName')}`;
      return;
    }

    const checkAuth = async () => {
      try {
        console.log('Dashboard AuthContext: Verifying token...');
        const response = await axios.get('/auth/verify', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        console.log('Dashboard AuthContext: Verify response:', response.data);

        if (response.data?.user) {
          setUser(response.data.user);
          console.log('Dashboard AuthContext: User authenticated successfully');
        } else {
          throw new Error('No user data received');
        }
      } catch (error) {
        console.error("Dashboard AuthContext: Auth check failed:", error.response?.data || error.message);
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        window.location.href = `https://trading-paltform.vercel.app?token=${localStorage.getItem('token')}&userName=${localStorage.getItem('userName')}`;
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    setUser(null);
    window.location.href = `https://trading-paltform.vercel.app?token=${localStorage.getItem('token')}&userName=${localStorage.getItem('userName')}`;
  };

  const value = {
    user,
    loading,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
