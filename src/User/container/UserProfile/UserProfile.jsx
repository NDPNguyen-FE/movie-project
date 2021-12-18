import {
  AutoComplete,
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Spin,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileByToken } from "../../../Redux/thunk/auth.thunk";
import { updateCustomers } from "../../../Redux/thunk/user.thunk";
import NetesdTableHistory from "./partial/TableHistory";
import "./UserProfile.scss";

const { Option } = Select;

const validPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

const validPhone =
  /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

const validEmail =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const UserProfile = () => {
  const dispatch = useDispatch();
  const [result, setResult] = useState([]);
  const { isLoading, profileToken } = useSelector((state) => state.auth);
  const accessToken = localStorage.getItem("accessToken");

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const handleSearch = (value) => {
    let res = [];

    if (!value || value.indexOf("@") >= 0) {
      res = [];
    } else {
      res = ["gmail.com", "163.com", "qq.com"].map(
        (domain) => `${value}@${domain}`
      );
    }

    setResult(res);
  };

  useEffect(() => {
    dispatch(getProfileByToken(accessToken));
  }, []);

  const handleUpdate = (value) => {
    console.log(value);
    const data = {
      taiKhoan: value.taiKhoan,
      matKhau: value.matKhau,
      email: value.email,
      soDt: value.soDt,
      maNhom: profileToken.maNhom,
      maLoaiNguoiDung: profileToken.maLoaiNguoiDung,
      hoTen: value.hoTen,
    };
    dispatch(updateCustomers(data));
  };

  return (
    <section className="profile">
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <Row className="profile-container" gutter={[64, 64]}>
            <Col className="profile-content" lg={12}>
              <div className="profile-title">
                {profileToken && (
                  <p>
                    {` “ Hi,  ${profileToken.taiKhoan} Từ bảng thông tin tài khoản, bạn có thể xem bản
            sao các hoạt động của tài khoản bạn trong thời gian gần đây và cập
            nhật thông tin tài khoản của bạn. Chọn liên kết bên dưới để xem
            hoặc chỉnh sửa thông tin”`}
                  </p>
                )}
              </div>
              <Row className="profile-detail">
                <div className="profile-image">
                  <img
                    src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/avatar.png"
                    alt="profileImage"
                  />
                </div>
                <div className="profile-point">
                  <p>{profileToken.taiKhoan}</p>
                  <p>Tổng visit: 0</p>
                  <p>Active visit: 0</p>
                  <p>Expried visit: 0</p>
                  <p>Điểm thưởng: 0</p>
                </div>
              </Row>
            </Col>
            <Col className="profile-account" lg={12}>
              <Form
                className="profile-form"
                initialValues={{
                  taiKhoan: profileToken.taiKhoan,
                  matKhau: profileToken.matKhau,
                  email: profileToken.email,
                  soDt: profileToken.soDT,
                  hoTen: profileToken.hoTen,
                }}
                onFinish={handleUpdate}
              >
                <Form.Item
                  name="hoTen"
                  label="Fullname"
                  rules={[
                    {
                      required: true,
                      message: "Please input your fullname!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Username"
                  name="taiKhoan"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="matKhau"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                    () => ({
                      validator(_, value) {
                        if (!value || value.match(validPass)) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          new Error(
                            "The password that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Please input your E-mail!",
                    },
                    () => ({
                      validator(_, value) {
                        if (!value || value.match(validEmail)) {
                          return Promise.resolve();
                        }

                        return Promise.reject();
                      },
                    }),
                  ]}
                >
                  <AutoComplete onSearch={handleSearch}>
                    {result.map((email) => (
                      <Option key={email} value={email}>
                        {email}
                      </Option>
                    ))}
                  </AutoComplete>
                </Form.Item>

                <Form.Item
                  name="soDt"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                    () => ({
                      validator(_, value) {
                        if (!value || value.match(validPhone)) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          new Error(
                            "The two phone number that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input
                    style={{
                      width: "100%",
                    }}
                    placeholder="Please input your phone number"
                  />
                </Form.Item>

                <Form.Item
                  {...tailFormItemLayout}
                  style={{ textAlign: "right" }}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="form-button"
                  >
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <NetesdTableHistory />
        </>
      )}
    </section>
  );
};

export default UserProfile;
