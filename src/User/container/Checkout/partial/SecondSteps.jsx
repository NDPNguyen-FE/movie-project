import { Button, Drawer, Form, Input, Modal, Row, Space } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectChairStd,
  selectChairVIP,
} from "../../../../Redux/actions/chair.action";
import { createTicket } from "../../../../Redux/thunk/ticket.thunk";

const SecondSteps = ({ quantityVIP, quantityStandard, handleNextStep }) => {
  const dispatch = useDispatch();
  const { listChair, movieInfo, isLoading, message } = useSelector(
    (state) => state.ticket
  );
  const [visitable, setVisitable] = useState(false);
  console.log(isLoading, message);

  const listChaitSTD = JSON.parse(sessionStorage.getItem("chairSTD"));
  const listChairVIP = JSON.parse(sessionStorage.getItem("chairVIP"));

  const chairSTD = listChaitSTD
    ? listChaitSTD.map((item, index) => {
        return item.tenGhe;
      })
    : 0;

  const chairVIP = listChairVIP
    ? listChairVIP.map((item, inde) => {
        return item.tenGhe;
      })
    : 0;

  const [disableStandard, setDisableStandard] = useState(false);
  const [disableVIP, setDisableVIP] = useState(false);

  const cardLocal = JSON.parse(localStorage.getItem("cart"));
  const user = JSON.parse(localStorage.getItem("user"));

  const totalPrice = cardLocal
    ? cardLocal.reduce((total, item) => {
        total += item.price * item.quantity;
        return total;
      }, 0)
    : 0;

  const priceVIP = quantityVIP * 95000;
  const priceStandard = quantityStandard * 75000;
  const totalQuantity = quantityVIP + quantityStandard;

  const laneA = listChair.slice(0, 16);
  const laneB = listChair.slice(16, 32);
  const laneC = listChair.slice(32, 48);
  const laneD = listChair.slice(48, 64);
  const laneE = listChair.slice(64, 80);
  const laneF = listChair.slice(80, 96);
  const laneG = listChair.slice(96, 112);
  const laneH = listChair.slice(112, 128);

  const handleSelectChairVIP = (item) => {
    quantityVIP = quantityVIP - 1;
    dispatch(selectChairVIP(item));
    if (quantityVIP !== 0) {
      item.daDat = true;
      setDisableVIP(false);
    } else {
      setDisableVIP(true);
    }
  };

  const handleSelectChairStandard = (item) => {
    quantityStandard = quantityStandard - 1;
    console.log(quantityStandard);
    dispatch(selectChairStd(item));
    if (quantityStandard !== 0) {
      item.daDat = true;
      setDisableStandard(false);
    } else {
      setDisableStandard(true);
    }
  };

  useEffect(() => {
    if (quantityStandard === 0) {
      setDisableStandard(true);
    }
    if (quantityVIP === 0) {
      setDisableVIP(true);
    }
  }, []);

  const listTicketVIP = listChairVIP
    ? listChairVIP.map((item, index) => {
        return {
          maGhe: item.maGhe,
          giaVe: 90000,
        };
      })
    : [];

  const listTicketSTD = listChaitSTD
    ? listChaitSTD.map((item, inde) => {
        return {
          maGhe: item.maGhe,
          giaVe: 75000,
        };
      })
    : [];

  const handleCheckout = (value) => {
    setVisitable(true);
  };

  const handleCancel = () => {
    setVisitable(false);
  };

  const handleOk = async () => {
    const data = {
      taiKhoanNguoiDung: user.hoTen,
      maLichChieu: movieInfo.maLichChieu,
      danhsachVe: listTicketSTD.concat(listTicketVIP),
    };

    await dispatch(createTicket(data));
    sessionStorage.removeItem("chairVIP");
    sessionStorage.removeItem("chairSTD");
    localStorage.removeItem("cart");
    handleNextStep();
  };

  const renderLane = (data) => {
    return data.map((item, index) => {
      return item.loaiGhe === "Vip" ? (
        <Button
          key={`chair-${index}`}
          disabled={item.daDat || disableVIP}
          className={item.selected ? `active` : null}
          onClick={() => handleSelectChairVIP(item)}
        >
          <span
            className={`material-icons   ${
              item.loaiGhe === "Vip" &&
              item.daDat !== true &&
              item.selected !== true &&
              `chair-vip`
            } `}
          >
            chair
          </span>
        </Button>
      ) : (
        <Button
          key={`chair-${index}`}
          disabled={item.daDat || disableStandard}
          className={item.selected ? `active` : null}
          onClick={() => handleSelectChairStandard(item)}
        >
          <span className={`material-icons  `}>chair</span>
        </Button>
      );
    });
  };

  return (
    <Row className="checkout-chair">
      <div className="lane">
        <Title level={4}>A</Title>
        {renderLane(laneA)}
      </div>
      <div className="lane">
        <Title level={4}>B</Title>
        {renderLane(laneB)}
      </div>
      <div className="lane">
        <Title level={4}>C</Title>
        {renderLane(laneC)}
      </div>
      <div className="lane">
        <Title level={4}>D</Title>
        {renderLane(laneD)}
      </div>
      <div className="lane">
        <Title level={4}>E</Title>
        {renderLane(laneE)}
      </div>
      <div className="lane">
        <Title level={4}>F</Title>
        {renderLane(laneF)}
      </div>
      <div className="lane">
        <Title level={4}>G</Title>
        {renderLane(laneG)}
      </div>
      <div className="lane">
        <Title level={4}>H</Title>
        {renderLane(laneH)}
      </div>
      <Drawer
        title={
          <Title level={3} type="success">
            {totalPrice} đ
          </Title>
        }
        placement="right"
        visible={true}
        mask={false}
        closable={false}
        className="checkout-step2"
        layout="horizontal"
        footer={
          <Button onClick={handleCheckout} className="button-checkout">
            Đặt vé
          </Button>
        }
      >
        <Form
          onFinish={handleCheckout}
          initialValues={{
            email: user.email,
            hoTen: user.hoTen,
          }}
        >
          <Space direction="vertical">
            <Title level={3}>{movieInfo.tenPhim}</Title>
            <Text type="secondary">{movieInfo.tenCumRap}</Text>
            <Text type="secondary">
              {movieInfo.gioChieu} - {movieInfo.ngayChieu} - {movieInfo.tenRap}
            </Text>
          </Space>

          <div className="chair-selected">
            <Title level={5} type="danger">
              Ghế : {chairSTD.toString()}, {chairVIP.toString()}
            </Title>
            <p>{totalPrice} đ</p>
          </div>

          <Form.Item label="Email" name="email" required>
            <Input disabled />
          </Form.Item>
          <Form.Item label="Name" name="hoTen" required>
            <Input />
          </Form.Item>
        </Form>
      </Drawer>
      <Modal
        title="THÔNG TIN ĐẶT VÉ"
        visible={visitable}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Tên phim: <strong> {movieInfo.tenPhim}</strong>
        </p>
        <p>
          Suất chiếu:
          <strong>
            {movieInfo.gioChieu} - {movieInfo.tenRap} - {movieInfo.tenCumRap}
          </strong>
        </p>
        <p>
          Vị trí ngồi: Ghế số
          <strong>
            {chairSTD.toString()}, {chairVIP.toString()}
          </strong>
        </p>
        <p>
          Tổng giá tiền: <strong>{totalPrice} VNĐ</strong>{" "}
        </p>
      </Modal>
    </Row>
  );
};

export default SecondSteps;
