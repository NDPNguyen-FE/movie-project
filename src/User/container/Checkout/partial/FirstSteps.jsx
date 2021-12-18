import { Button, Col, InputNumber, Row, Space, Table } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../Redux/actions/cart.action";

const FirstSteps = ({ handleNextStep, quantityVIP, quantityStandard }) => {
  const dispatch = useDispatch();
  const { movieInfo, isLoading } = useSelector((state) => state.ticket);

  const { cart } = useSelector((state) => state.cart);

  const cardLocal = JSON.parse(localStorage.getItem("cart"));

  const data = [
    {
      key: "0",
      typeTicket: "Vé VIP",
      price: 90000,
    },
    {
      key: "1",
      typeTicket: "Vé Thường",
      price: 75000,
    },
  ];

  const column = [
    {
      title: "Loại Vé",
      dataIndex: "typeTicket",
      key: "type",
    },
    {
      title: "Giá Tiền",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Số Lượng",
      dataIndex: "quantily",
      render: (_, record) => {
        return (
          <Space>
            <InputNumber
              controls={true}
              size="large"
              min={0}
              max={100}
              defaultValue={record.key === "0" ? quantityVIP : quantityStandard}
              onChange={(e) => handleChangeQuantily(e, record)}
            />
          </Space>
        );
      },
    },
  ];

  const totalPrice = cardLocal
    ? cardLocal.reduce((total, item) => {
        total += item.price * item.quantity;
        return total;
      }, 0)
    : 0;

  const handleChangeQuantily = (e, value) => {
    value.quantity = e;
    dispatch(addToCart(value));
  };

  return (
    <Row className="checkout-container" gutter={[32]}>
      <Col lg={8}>
        <div className="checkout-banner">
          <div className="banner-img">
            <img src={movieInfo.hinhAnh} alt="hinhAnh-movie" />
          </div>
        </div>
      </Col>
      <Col lg={16}>
        <div className="checkout-information">
          <div className="info-detail">
            <h3>{movieInfo.tenCumRap}</h3>
            <p>
              {movieInfo.tenPhim} - {movieInfo.gioChieu} - {movieInfo.tenRap}
            </p>
          </div>
        </div>
        <div className="select-ticket">
          <Table columns={column} dataSource={data} pagination={false} />
        </div>
        <div className="checkout-total">
          <div className="total-price">
            <Text type="secondary">Tổng tiền</Text>
            <Title level={3} type="success">
              {totalPrice} đ
            </Title>
          </div>
          <div className="total-button">
            <Button
              className="Next"
              onClick={handleNextStep}
              disabled={totalPrice === 0}
            >
              CHỌN GHẾ
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default FirstSteps;
