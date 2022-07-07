import React,{useState,useNavigate} from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useUserAuth } from "../context/userAuthContext";

import logo from "./LOGO.png";

const Login = () => {
  
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="login">
      <div className="card  card_det">
        <div className="card-body">
          <img src={logo} alt="logo" className="logo" />
          <h5 className="card-title">Welcome to Silaan!</h5>

          <div className="inp">
            <div className="first">
              <select
                className="form-select form-select-sm country_num"
                aria-label=".form-select-sm example"
              >
                <option selected>+91</option>
                <option value="1">+123</option>
                <option value="2">+235</option>
                <option value="3">+154</option>
              </select>
            </div>

            <div className="second" onSubmit={getOtp}>
              <input type="text" placeholder="Enter Mobile Number..." required onChange={setNumber} value={number} />
            </div>
          </div>
          <br />
          <Link to="/otplogin">
            <button className="btn_getotp">Get otp</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
