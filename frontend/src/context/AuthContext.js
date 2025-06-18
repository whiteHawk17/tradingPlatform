import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "../utils/axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");
    if (token && userName) {
      setUser({ token, name: userName });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      });
      const { token, user: userData } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userName", userData.name);
      setUser({ token, name: userData.name });
      return true;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const signup = async (name, email, password) => {
    try {
      const response = await axios.post("/auth/signup", {
        name,
        email,
        password,
      });
      const { token, user: userData } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userName", userData.name);
      setUser({ token, name: userData.name });
      return true;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setUser(null);
    window.location.replace("https://trading-paltform.vercel.app/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
