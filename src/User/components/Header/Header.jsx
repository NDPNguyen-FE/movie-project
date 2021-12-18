import { MenuOutlined, UserOutlined } from "@ant-design/icons/lib/icons";
import { Avatar, Col, Drawer, Dropdown, Menu, Row, Space } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../../Redux/actions/auth.action";
import { getProfileByToken } from "../../../Redux/thunk/auth.thunk";
import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { profile, isLoggedIn } = useSelector((state) => state.auth);
  const accessToken = localStorage.getItem("accessToken");

  const history = useHistory();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  const handleDirectInfo = async () => {
    await dispatch(getProfileByToken(accessToken));
    history.push("/user-profile");
  };

  const menu = (
    <Menu>
      <Menu.Item key={1} onClick={() => handleDirectInfo()}>
        Thông tin cá nhân
      </Menu.Item>
      <Menu.Item onClick={() => handleLogout()} key={2}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="header">
      <Row justify="center" align="middle" className="header-container">
        <Col xs={12} md={8} className="header-logo">
          <img
            src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI"
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
          {isLoggedIn ? (
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
              <Space className="drawer-item">
                <Avatar size="small" icon={<UserOutlined />} />
                {profile.taiKhoan}
              </Space>
            </Dropdown>
          ) : (
            <Space className="drawer-item">
              <Avatar size="small" icon={<UserOutlined />} />
              <Link to="/login">Đăng Nhập</Link>
            </Space>
          )}
        </Col>
        <Col xs={12} className="header-toggle">
          <MenuOutlined onClick={showDrawer} />
        </Col>
      </Row>
      <Drawer placement="right" onClose={onClose} visible={visible}>
        <Space direction="vertical">
          {isLoggedIn ? (
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
              <Space className="drawer-item">
                <Avatar size="small" icon={<UserOutlined />} />
                <Link to="/login">Đăng Nhập</Link>
              </Space>
            </Dropdown>
          ) : (
            <Space className="drawer-item" onClick={handleDirectInfo}>
              <Avatar size="small" icon={<UserOutlined />} />
              {profile.taiKhoan}
            </Space>
          )}

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
