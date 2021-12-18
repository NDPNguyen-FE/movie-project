import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";

import { LIST_NEWS } from "../constant";

const CardNews = () => {
  return (
    <Row className="cardNews" gutter={[16, 16]}>
      {LIST_NEWS &&
        LIST_NEWS.map((item, index) => {
          return (
            <Col key={`card-${index}`} xs={24} sm={12} md={12} lg={6}>
              <Card hoverable cover={<img alt="example" src={item.img} />}>
                <Meta title={item.src} description={item.desscription} />
              </Card>
            </Col>
          );
        })}
    </Row>
  );
};

export default CardNews;
