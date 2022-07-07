import React from "react";
import logo from "../Login/LOGO.png";
import "../Dashboard/dashboard.css";
import "./profile.css";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="dashboard2">
      <div className="line"></div>
      <div className="prof_cont">
        <div className="ft_1">
          <div className="name">
            <p className="name_first name_cl1">
              Name <i className="bx bx-edit-alt"></i>
            </p>
            <p className="name_first name_cl">lorem ipsum</p>
          </div>
          <div className="collp">
            <h4 className="avail">Availability</h4>

            <div className="check">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Available
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Not Available
                </label>
              </div>
              <br />
            </div>

            {/* collapse start   className="bt_toggle coll_tog " <span className="date">20 May 2022</span> */}
            <a
              className="btn btn_collap"
              data-bs-toggle="collapse"
              href="#collapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample1"
            >
              Monday<span className="date">20 May 2022</span>
            </a>

            <div className="collapse " id="collapseExample1">
              <div className="card card-body card_body1">
                <table>
                  <tr>
                    <th>Time</th>
                    <th>status</th>
                  </tr>
                  <tr>
                    <td>9:00 am - 12:00 pm</td>
                    <td>Available</td>
                  </tr>
                  <tr>
                    <td>12:00 pm - 3:00 pm</td>
                    <td>UnAvailable</td>
                  </tr>
                  <tr>
                    <td>3:00 pm - 6:00 pm</td>
                    <td>Available</td>
                  </tr>
                </table>
              </div>
            </div>

            {/* collapse end */}

            {/* collapse start */}
            <a
              className="btn btn_collap"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Tuesday<span className="date">20 May 2022</span>
            </a>
            <div className="collapse" id="collapseExample">
              <div className="card card-body card_body1">
                <table>
                  <tr>
                    <th>Time</th>
                    <th>status</th>
                  </tr>
                  <tr>
                    <td>9:00 am - 12:00 pm</td>
                    <td>Available</td>
                  </tr>
                  <tr>
                    <td>12:00 pm - 3:00 pm</td>
                    <td>UnAvailable</td>
                  </tr>
                  <tr>
                    <td>3:00 pm - 6:00 pm</td>
                    <td>Available</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="ft_2">
          <div className="name2">
            <p className="name_first name_cl1">
              Address <i className="bx bx-edit-alt"></i>
            </p>
            <p className="name_first name_cl">25/1 Geetanjali Apartment,</p>
          </div>
          <div className="name2">
            <p className="name_first name_cl1">Terms & Conditions</p>
            <p className="name_first name_cl">lorem ipsum</p>
          </div>
          <div className="name2">
            <p className="name_first name_cl1">About Us</p>
            <p className="name_first name_cl">lorem ipsum</p>
          </div>
          <div className="name2">
            <p className="name_first name_cl1">Logout</p>
            <p className="name_first name_cl">lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
