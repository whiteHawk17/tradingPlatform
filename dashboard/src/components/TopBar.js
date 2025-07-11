import React, { useEffect, useState } from "react";
import Menu from "./Menu";

const TopBar = ({ isWatchlistOpen, onHamburgerClick }) => {
  const [userName, setUserName] = useState('USERID'); // Default to USERID
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = window.innerWidth <= 600;

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  // On mobile, if Watchlist is open, only show hamburger (close icon)
  if (isMobile && isWatchlistOpen) {
    return (
      <div className="topbar-container">
        <button className="hamburger" onClick={onHamburgerClick} aria-label="Close Watchlist" style={{marginLeft: 8}}>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>
    );
  }

  return (
    <div className="topbar-container">
      {isMobile && (
        <img src="/logo192.png" alt="Logo" className="topbar-logo" style={{height: 40, width: 40, marginRight: 16, marginLeft: 8, verticalAlign: 'middle'}} />
      )}
      {!isMobile && (
        <div className="indices-container">
          <div className="nifty">
            <p className="index">NIFTY 50</p>
            <p className="index-points">{100.2} </p>
            <p className="percent"> </p>
          </div>
          <div className="sensex">
            <p className="index">SENSEX</p>
            <p className="index-points">{100.2}</p>
            <p className="percent"></p>
          </div>
        </div>
      )}
      <button className="hamburger" onClick={() => setIsMenuOpen((prev) => !prev)} aria-label="Open navigation">
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="user-info hide-on-mobile">
        <p>Hi {userName}</p>
      </div>
    </div>
  );
};

export default TopBar;
