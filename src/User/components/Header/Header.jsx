import { MenuOutlined, UserOutlined } from "@ant-design/icons/lib/icons";
import { Avatar, Col, Drawer, Row, Space } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.scss";

const Header = () => {
  const { profile, isLoggedIn } = useSelector((state) => state.auth);
  console.log("profile", profile);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="header">
      <Row justify="center" align="middle" className="header-container">
        <Col xs={12} md={8} className="header-logo">
          <img
            src="https://tix.vn/app/assets/img/icons/web-logo.png"
            alt="logo"
          />
        </Col>
        <Col md={8} className="header-menu">
          <Link to="/">Lịch Chiếu</Link>
          <Link to="/">Cụm rạp</Link>
          <Link to="/">Tin tức</Link>
          <Link to="/">Ứng dụng</Link>
        </Col>
        <Col span={8} className="header-login">
          <Space>
            <Avatar size="small" icon={<UserOutlined />} />
            <Link to="/login">Đăng Nhập</Link>
          </Space>
        </Col>
        <Col xs={12} className="header-toggle">
          <MenuOutlined onClick={showDrawer} />
        </Col>
      </Row>
      <Drawer placement="right" onClose={onClose} visible={visible}>
        <Space direction="vertical">
          <Space className="drawer-item">
            {
              isLoggedIn ? <Avatar src={`https://ui-avatars.com/api/?name=${profile.taiKhoan}`} size="small" /> : <Avatar size="small" icon={<UserOutlined />} />
            }
            
            <Link to="/login">Đăng Nhập</Link>
          </Space>
          <Link to="/" className="drawer-item">
            Lịch Chiếu
          </Link>
          <Link to="/" className="drawer-item">
            Cụm rạp
          </Link>
          <Link to="/" className="drawer-item">
            Tin tức
          </Link>
          <Link to="/" className="drawer-item">
            Ứng dụng
          </Link>
        </Space>
      </Drawer>
    </div>
  );
};

export default Header;
