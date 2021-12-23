import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import OrderTicker from "../../components/OrderTicket/OrderTicket";
import Tab from "../../components/Tabs/Tab";
import MultiTab from "../../components/MultiTab/MultiTab";
import "./HomePage.scss";
import AppTix from './../../components/AppTix/AppTix';

const HomePage = () => {
  return (
    <div className="homepage">
      <Carousel />
      <OrderTicker />
      <Tab />
      <MultiTab />
      <AppTix/>
    </div>
  );
};

export default HomePage;
