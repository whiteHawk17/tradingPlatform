import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import WatchList from "./WatchList";
import TopBar from "./TopBar";
import { GeneralContextProvider } from "./GeneralContext";

const DashboardLayout = () => {
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);
  const isMobile = window.innerWidth <= 600;
  const handleWatchlistToggle = () => setIsWatchlistOpen((prev) => !prev);

  return (
    <GeneralContextProvider>
      <TopBar isWatchlistOpen={isWatchlistOpen} onHamburgerClick={handleWatchlistToggle} />
      <div className="dashboard-container">
        {isMobile && !isWatchlistOpen && (
          <button
            className="watchlist-toggle-btn"
            onClick={handleWatchlistToggle}
            aria-label="Open Watchlist"
            style={{ position: 'fixed', left: 0, top: '50%', zIndex: 1200, transform: 'translateY(-50%)' }}
          >
            {'>'}
          </button>
        )}
        {isMobile && (
          <WatchList isMobile={isMobile} isWatchlistOpen={isWatchlistOpen} />
        )}
        {!isMobile && <WatchList isMobile={false} isWatchlistOpen={true} />}
        <div className={`content${isMobile && isWatchlistOpen ? ' shift-right' : ''}`}>
          <Outlet />
        </div>
      </div>
    </GeneralContextProvider>
  );
};

export default DashboardLayout; 