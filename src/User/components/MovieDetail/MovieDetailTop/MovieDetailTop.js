import React from "react";
import { Row, Col, Divider } from "antd";
import playBtn from "../../../../assets/img/play.png";
import "./MovieDetailTop.scss";
import RatingMovie from './MovieDetailTop/RatingMovie';
import Button from "../../Button/Button";
import moment from "moment";


export default function MovieDetailTop({movieInfor}) {
  return (
    <div className="movietop">
      <img
        src={movieInfor.hinhAnh}
        className="movietop_bg"
        alt="movie_bg"
      />
      <div className="movietop_content">
        <div className="movietop_content_flex">
          <div className="movietop_content_inside">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6}>
                <div className="movie_item">
                  <img className="movie_item_img"
                    src={movieInfor.hinhAnh}
                    alt="movie_item"
                  />
                  <div className="movie_item_overlay"></div>
                  <a className="open_trailer_btn">
                    <img src={playBtn} alt="play button" />
                  </a>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="movie_info">
                  <h4>
                  {moment(movieInfor.ngayKhoiChieu).format('DD/MM/YYYY')}
                  </h4>
                  <h3>{movieInfor.tenPhim}</h3>
                  <h4>
                    {movieInfor.dangChieu === true ? "Đang chiếu" : "Sắp chiếu"}
                  </h4>
                  <p>100 phút - 0 IMDb - 2D/Digital</p>
                  <Button>Mua vé</Button>
                </div>
              </Col>
              <Col className="gutter-row"  xs={0} sm={0} md={6} lg={6} xl={6}>
                
              </Col>
              <Col className="gutter-row rating_col" xs={12} sm={12} md={6} lg={6} xl={6}>
                <RatingMovie/>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}