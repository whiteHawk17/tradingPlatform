import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF", borderBottom: "1px solid #e5e5e5" }}>
      <div className="container p-2">
        <div className="d-flex justify-content-between align-items-center w-100">
          <Link className="navbar-brand m-0" to="/">
            <img src="media/images/logo.svg" alt="logo" style={{ width: "25%" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: "1px solid #bbb", boxShadow: "none", padding: "6px 14px", borderRadius: 8, background: "#fff" }}
          >
            <span className="navbar-toggler-icon" style={{ width: 22, height: 22 }}></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
            {!user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    SignUp
                  </Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href={`https://trading-platform-dashboard2.vercel.app/?token=${localStorage.getItem('token')}&userName=${localStorage.getItem('userName')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link p-0" style={{ color: "#555" }} onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
