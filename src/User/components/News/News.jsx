import { Tabs } from "antd";
import React from "react";
import CardNews from "./partials/CardNews";
import "./News.scss";

const { TabPane } = Tabs;

const News = () => {
  return (
    <div className="news">
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Điện ảnh 24h" key="1">
          <CardNews />
        </TabPane>
        <TabPane tab="Review" key="2">
          <CardNews />
        </TabPane>
        <TabPane tab="Khuyến mãi" key="3">
          <CardNews />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default News;
