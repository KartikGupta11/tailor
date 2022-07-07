import React from "react";
import { NavLink } from "react-router-dom";
import Chart from "../chart/Chart";
import ChartReport from "../chart/ChartReport";
import "./report.css";
const ReportReturn = () => {
  return (
    <div className="dashboard2">
      <div className="line"></div>
      {/* category navigation */}
      <div className="category_nav">
        <div>
          <NavLink to="/report/totalorders"> Total Orders</NavLink>
        </div>

        <div>
          <NavLink to="/report/return">Return</NavLink>
        </div>
      </div>
      <ChartReport />
    </div>
  );
};

export default ReportReturn;
