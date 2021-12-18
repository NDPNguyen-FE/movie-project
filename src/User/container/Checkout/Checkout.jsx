import { Spin, Steps } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getTicketRoomById } from "../../../Redux/thunk/ticket.thunk";
import "./Checkout.scss";
import FinishSteps from "./partial/FinishSteps";
import FirstSteps from "./partial/FirstSteps";
import SecondSteps from "./partial/SecondSteps";

const { Step } = Steps;

const Checkout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const code = location.pathname.split("/")[2];
  const [step, setStep] = useState(0);
  const [quantityVIP, setQuantityVIP] = useState(0);
  const [quantityStandard, setQuantityStandard] = useState(0);
  console.log(quantityStandard);

  const { isLoading } = useSelector((state) => state.ticket);

  const cardLocal = JSON.parse(localStorage.getItem("cart"));

  console.log(quantityStandard, quantityVIP);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    dispatch(getTicketRoomById(code));
  }, [dispatch, code]);

  useEffect(() => {
    if (cardLocal) {
      cardLocal.map((product) => {
        return product.key === "0"
          ? setQuantityVIP(product.quantity)
          : setQuantityStandard(product.quantity);
      });
    }
  }, []);

  const steps = [
    {
      title: "CHỌN LOẠI VÉ",
      content: (
        <FirstSteps
          handleNextStep={handleNextStep}
          quantityVIP={quantityVIP}
          quantityStandard={quantityStandard}
        />
      ),
    },
    {
      title: "CHỌN GHÉ VÀ THANH TOÁN",
      content: (
        <SecondSteps
          quantityVIP={quantityVIP}
          quantityStandard={quantityStandard}
          handleNextStep={handleNextStep}
        />
      ),
    },
    {
      title: "KẾT QUẢ ĐẶT VÉ",
      content: <FinishSteps />,
    },
  ];

  return (
    <section className="checkout">
      <div className="checkout-steps">
        <Steps current={step}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
      </div>
      {isLoading ? (
        <Spin className="spinner" />
      ) : (
        <div className="steps-content">{steps[step].content}</div>
      )}
    </section>
  );
};

export default Checkout;
