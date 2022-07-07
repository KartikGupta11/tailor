import React, { useEffect, useState } from "react";
import logo from "../Login/LOGO.png";
import "./dashboard.css";
import { Link, NavLink } from "react-router-dom";
const product_data = [
  {
    Order_ID: "OX23345002Z",
    Type_Of_Clothing: "Blouse",
    Type_Of_Stitch: "Basic",
    Delivery_Date: "25-06-2022",
    Status: "incomplete",
    image:
      "https://cdn.pixabay.com/photo/2015/04/13/15/30/saree-720716_960_720.jpg",
  },
  {
    Order_ID: "OX23345002Z",
    Type_Of_Clothing: "Blouse",
    Type_Of_Stitch: "Basic",
    Delivery_Date: "25-06-2022",
    Status: "incomplete",
    image:
      "https://cdn.pixabay.com/photo/2014/06/05/14/38/saree-362755_960_720.jpg",
  },
  {
    Order_ID: "OX23345002Z",
    Type_Of_Clothing: "Blouse",
    Type_Of_Stitch: "Basic",
    Delivery_Date: "25-06-2022",
    Status: "incomplete",
    image:
      "https://cdn.pixabay.com/photo/2015/04/13/15/30/saree-720716_960_720.jpg",
  },
  {
    Order_ID: "OX23345002Z",
    Type_Of_Clothing: "Blouse",
    Type_Of_Stitch: "Basic",
    Delivery_Date: "25-06-2022",
    Status: "incomplete",
    image:
      "https://cdn.pixabay.com/photo/2014/06/05/14/38/saree-362755_960_720.jpg",
  },
  {
    Order_ID: "OX23345002Z",
    Type_Of_Clothing: "Blouse",
    Type_Of_Stitch: "Basic",
    Delivery_Date: "25-06-2022",
    Status: "incomplete",
    image:
      "https://cdn.pixabay.com/photo/2015/04/13/15/30/saree-720716_960_720.jpg",
  },
];
const RejectedOrder = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(
        `https://fake-silan-server.herokuapp.com/product_data`
      );
      const data = await res.json();
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <div className="dashboard">
      {/* dashboard navigation */}

      {/* line */}
      <div className="line"></div>

      {/* category navigation */}
      <div className="category_nav">
        <div>
          <NavLink to="/"> All Orders</NavLink>
        </div>

        <div>
          <NavLink to="/dashboard/accepted">Accepted Orders</NavLink>
        </div>

        <div>
          <NavLink to="/dashboard/rejected">Rejected Orders</NavLink>
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
            className="dropdown-menu drop_width"
            style={{ width: "540px" }}
            aria-labelledby="dropdownMenuClickable"
          >
            {/* start */}

            <div className="collp">
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

              {/* start */}
              <a
                className="btn btn_collap"
                data-bs-toggle="collapse"
                href="#collapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample2"
              >
                Wednesday<span className="date2">20 May 2022</span>
              </a>
              <div className="collapse" id="collapseExample2">
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

            {/* end */}
          </ul>
        </div>
        <div className="total_order">Total orders:300</div>
      </div>

      <div className="products">
        {products.map((item) => {
          return (
            <>
              <div className="div_item">
                <div className="first_prod">
                  <img src={item.image} alt="prod_img" />
                </div>
                <div className="second_prod">
                  <p>Order Id: {item.Order_ID}</p>
                  <p>Type Of Clothing: {item.Type_Of_Clothing}</p>
                  <p>Type of Slitch: {item.Type_Of_Stitch}</p>
                </div>
                <div className="third_prod check_prod">
                  <span className="ready">Status: {item.Status}</span>
                </div>
                <div className="fourth_prod reject">
                  <p>
                    <Link to={`/dashboard/orderDetails/${item.id}`}>
                      View Details
                    </Link>
                  </p>
                </div>
              </div>
            </>
          );
        })}
        <div className="more">view more</div>
      </div>
    </div>
  );
};

export default RejectedOrder;
