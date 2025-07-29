import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";
import jwt_decode from "jwt-decode";

const API_BASE_URL = "https://trading-platform-backend2.vercel.app";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeSellWindow, notifyHoldingsUpdate } = useContext(GeneralContext);

  const handleSellClick = () => {
    console.log("handleSellClick called");
    // Get the token from localStorage
    const token = localStorage.getItem('token');
    console.log("Token from localStorage:", token);
    if (!token) {
      alert('Please login to place an order');
      return;
    }

    try {
      // Decode the token to get user information
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId; // Changed from id to userId to match backend

      console.log("Decoded Token:", decodedToken);
      console.log("Extracted UserId:", userId);

      axios.post(`${API_BASE_URL}/sellStock`, {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
        userId: userId
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((res) => {
        notifyHoldingsUpdate();
        closeSellWindow();
      })
      .catch((err) => {
        console.error("Sell error:", err);
        if (err.response?.status === 401) {
          alert("Session expired. Please login again.");
        } else {
          alert("Sell order failed! Please try again.");
        }
      });
    } catch (error) {
      console.error("Token decode error:", error);
      alert("Authentication error. Please login again.");
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="sell-container" id="sell-window" draggable="true">
      <div className="sell-regular-order">
        <div className="sell-inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="sell-buttons">
        <span>Margin required ₹140</span>
        <div>
          <button className="sell-btn sell-btn-red" onClick={handleSellClick}>
            Sell
          </button>
          <Link className="sell-btn sell-btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow; 