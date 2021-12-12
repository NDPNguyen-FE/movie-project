import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import OrderTicker from "../../components/OrderTicket/OrderTicket";
import Tab from "../../components/Tabs/Tab";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <Carousel />
      <OrderTicker />
      <Tab />
    </div>
  );
};

export default HomePage;
