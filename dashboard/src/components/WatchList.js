import React, { useContext, useState } from "react";
import GeneralContext from "./GeneralContext";
import DounbtChart from "./DounbtChart";

import { Tooltip, Grow } from "@mui/material";

import { watchlist } from "../data/data";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

const WatchList = ({ isMobile, isWatchlistOpen }) => {
  if (isMobile && !isWatchlistOpen) return null;
  return (
    <div className={`watchlist-container${isMobile ? ' mobile' : ''}${isMobile && isWatchlistOpen ? ' open' : ''}`}>
      {isMobile && (
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
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length}/50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem
            stock={stock}
            key={index}
          />
        ))}
      </ul>

      <div className="watchlist-chart-title" style={{ textAlign: 'center', margin: '24px 0 8px 0', fontWeight: 600, fontSize: '1.1rem' }}>
        Watchlist Stock Price Distribution
      </div>
      <div className="watchlist-chart-container">
        <DounbtChart watchlistData={watchlist} />
      </div>
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };
  const handleMouseLeave = () => {
    setShowWatchlistActions(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'pointer' }}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = (e) => {
    e.stopPropagation();
    generalContext.openBuyWindow(uid);
  };
  const handleSellClick = (e) => {
    e.stopPropagation();
    generalContext.openSellWindow(uid);
  };
  const handleAnalyticsClick = (e) => {
    e.stopPropagation();
    // Analytics logic here
  };
  const handleMoreClick = (e) => {
    e.stopPropagation();
    // More logic here
  };
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="buy" onClick={handleBuyClick}>Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="sell" onClick={handleSellClick}>Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="action" onClick={handleAnalyticsClick}>
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip
          title="More"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="action" onClick={handleMoreClick}>
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

export default WatchList;
