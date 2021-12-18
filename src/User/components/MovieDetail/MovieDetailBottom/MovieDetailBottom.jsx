import { Tabs } from "antd";
import React from "react";
import DanhGia from "./DanhGia/DanhGia";
import LichChieu from "./LichChieu/LichChieu";
import "./MovieDetailBottom.scss";
import ThongTin from "./ThongTin/ThongTin";

const { TabPane } = Tabs;

export default function MovieDetailBottom() {
  return (
    <div className="moviebottom">
      <div className="custom_container moviebottom_container">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="LỊCH CHIẾU" key="1">
            <LichChieu />
          </TabPane>
          <TabPane tab="THÔNG TIN" key="2">
            <ThongTin />
          </TabPane>
          <TabPane tab="ĐÁNH GIÁ" key="3">
            <DanhGia />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
