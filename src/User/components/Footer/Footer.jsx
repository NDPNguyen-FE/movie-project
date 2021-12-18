import {
  AndroidFilled,
  AppleFilled,
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
} from "@ant-design/icons/lib/icons";
import { Col, Row, Space } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { listImage, menu } from "./constant";
import "./Footer.scss";

const Footer = () => {
  const renderListFooter = (data) => {
    return data.map((item, index) => {
      return <p key={`link-${index}`}>{item.title}</p>;
    });
  };

  const renderListImage = (data) => {
    return data.map((item) => {
      return item;
    });
  };

  return (
    <div className="footer">
      <Row className="footer-container">
        <Col md={24}>
          <Row gutter={[64, 32]}>
            <Col>
              <Space direction="vertical">
                <Title level={4} style={{ color: "white" }}>
                  Tix
                </Title>
                {renderListFooter(menu)}
              </Space>
            </Col>

            <Col>
              <Space direction="vertical">
                <Title level={4} style={{ color: "white" }}>
                  ĐỐI TÁC
                </Title>

                <div className="footer-company">
                  {renderListImage(listImage)}
                </div>
              </Space>
            </Col>

            <Col>
              <Row gutter={[64, 32]}>
                <Col md={24}>
                  <Space direction="vertical">
                    <Title level={4} style={{ color: "white" }}>
                      MOBILE APP
                    </Title>
                    <div className="logo-app">
                      <AndroidFilled style={{ color: "green" }} />
                      <AppleFilled />
                    </div>
                  </Space>
                </Col>

                <Col md={24}>
                  <Space direction="vertical">
                    <Title level={4} style={{ color: "white" }}>
                      SOCIAL
                    </Title>
                    <div className="logo-app">
                      <FacebookFilled />
                      <TwitterCircleFilled />
                      <InstagramFilled />
                    </div>
                  </Space>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="footer-container footer-bottom" gutter={[200, 32]}>
        <Col md={24} lg={4}>
          <div className="footer-logo">
            <img
              src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI"
              alt="footer-logo"
            />
          </div>
        </Col>

        <Col md={24} lg={15}>
          <Space direction="vertical">
            <p>TIX – Dự án cuối khóa Lập trình Frontend [CYBERSOFT-ACADEMY]</p>
            <p>Số Điện Thoại (Hotline): 19006868</p>
          </Space>
        </Col>

        <Col md={24} lg={3}>
          <div className="footer-logo">
            <img
              src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png"
              alt="bôcngthuong"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
