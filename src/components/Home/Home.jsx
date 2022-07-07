import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Allorders";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
