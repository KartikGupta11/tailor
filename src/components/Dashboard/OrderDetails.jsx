import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //
    const getProducts = async () => {
      const res = await fetch(
        `https://fake-silan-server.herokuapp.com/product_data/${id}`
      );
      const resData = await res.json();
      setProducts(resData);
    };
    getProducts();
  }, []);

  return (
    <div className="order_det">
      <div className="line"></div>

      <div className="headline">
        <span>
          <Link to="/">Dashboard {">"}</Link>
        </span>
        <span className="order_det"> OrderDetails</span>
      </div>

      <div className="card card_main">
        <div className="cont_f">
          <div className="f1">
            <p>Order Id: {products.Order_ID}</p>
            <p>Type Of Clothing: {products.Type_Of_Stitch}</p>
            <p>Type Of Slitch: {products.Type_Of_Clothing}</p>
            <p>Measurement: {products.measurement}</p>
            <p>Pick Up Date:{products.pickupDate}</p>
            <p>Delivery Time: {products.deliveryTime}</p>
          </div>
          <div className="f2">
            <p>Reference image: </p>
            <div className="im">
              <img src={products.image} alt="prod" />
            </div>
            <div className="btn_date">
              <p className="delivery_date">{products.Delivery_Date}</p>
              <button>Accept</button>
              <button>Reject</button>
            </div>
          </div>
          <div className="f3">
            <p>Comment:</p>
            <div className="comm">{products.comment}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
