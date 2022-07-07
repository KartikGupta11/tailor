import React from "react";
import logo from "../Login/LOGO.png";
import "../Dashboard/dashboard.css";
import { NavLink } from "react-router-dom";
import Chart from "../chart/Chart";
import "../Dashboard/dashboard.css";
const ReportTotal = () => {
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
      <div className="filter">
        <div className="btn-group dropdown fil">
          <button
            className="btn btn-secondary btn_impo dropdown-toggle btn_pink"
            type="button"
            // id="dropdownMenu2"
            data-bs-toggle="dropdown"
            data-bs-auto-close="false"
            id="dropdownMenuClickable"
            aria-expanded="false"
          >
            filter
          </button>
          <ul
            className="dropdown-menu drop_width_imp"
            style={{ width: "540px" }}
            aria-labelledby="dropdownMenuClickable"
          >
            {/* start */}

            <div className="collp">
              {/* collapse start   className="bt_toggle coll_tog " <span className="date">20 May 2022</span> */}
              <a
                className="btn btn_collap bt_imp"
                data-bs-toggle="collapse"
                href="#collapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample1"
              >
                accepted orders
              </a>
              <br />

              {/* collapse end */}

              {/* collapse start */}
              <a
                className="btn btn_collap bt_imp"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Decline Orders
              </a>

              {/* start */}
              <a
                className="btn btn_collap bt_imp"
                data-bs-toggle="collapse"
                href="#collapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample2"
              >
                Return Orders
              </a>
            </div>

            {/* end */}
          </ul>
        </div>
        <div className="total_order">Total orders:300</div>
      </div>
      <Chart />
    </div>
  );
};

export default ReportTotal;
