import React from "react";
import NavigationBar from "../../pages/Shared/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
