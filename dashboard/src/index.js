import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// --- Token transfer from URL to localStorage (for dev multi-port login) ---
const params = new URLSearchParams(window.location.search);
const token = params.get('token');
const userName = params.get('userName');
if (token) localStorage.setItem('token', token);
if (userName) localStorage.setItem('userName', userName);
// --- End token transfer ---

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
