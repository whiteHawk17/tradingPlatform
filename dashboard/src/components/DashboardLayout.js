import React from "react";
import { Outlet } from "react-router-dom";
import WatchList from "./WatchList";
import TopBar from "./TopBar";
import { GeneralContextProvider } from "./GeneralContext";

const DashboardLayout = () => {
  return (
    <GeneralContextProvider>
      <TopBar />
      <div className="dashboard-container">
        <WatchList />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </GeneralContextProvider>
  );
};

export default DashboardLayout; 