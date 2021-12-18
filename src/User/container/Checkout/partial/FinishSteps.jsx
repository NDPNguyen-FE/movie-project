import { Button, Result } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

const FinishSteps = () => {
  const history = useHistory();
  const handleDirectHome = () => {
    history.push("/");
  };
  return (
    <Result
      status="success"
      title="Cảm ơn quý khách, hẹn gặp lại quý khách"
      subTitle="Order number: 2017182818828182881 "
      extra={[
        <Button type="primary" key="console" onClick={handleDirectHome}>
          Go Home
        </Button>,
        <Button key="buy" onClick={handleDirectHome}>
          Buy Again
        </Button>,
      ]}
    />
  );
};

export default FinishSteps;
