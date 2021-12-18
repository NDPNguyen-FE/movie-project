import { LoadingOutlined } from "@ant-design/icons/lib/icons";
import { Popover, Space } from "antd";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./DetailCalMovie.scss";

const DetailCalMovie = ({ movie }) => {
  const lichChieuTheoPhim = movie.lstLichChieuTheoPhim.slice(0, 4);
  const history = useHistory();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleDirectCheckout = (value) => {
    history.push(`/checkout/${value.maLichChieu}`);
  };

  const content = (
    <div>
      <LoadingOutlined />
      Vui lòng đăng nhập để mua vé
    </div>
  );

  return (
    <div className="detailCalMovie">
      <div className="detailCalMovie-container">
        <Space className="detailCalMovie-infor">
          <img
            src={movie.hinhAnh}
            alt={movie.tenPhim}
            className="detailCalMovie-image"
          />
          <div className="detailCalMovie-content">
            <Space>
              <h3>{movie.tenPhim}</h3> {movie.hot && <span>HOT</span>}
            </Space>
            <p>120 phút - TIX 9.1 - IMDb 0</p>

            <div className="detailCalMovie-time">
              {lichChieuTheoPhim &&
                lichChieuTheoPhim.map((item, index) =>
                  isLoggedIn ? (
                    <p
                      key={`item-${index}`}
                      onClick={() => handleDirectCheckout(item)}
                    >
                      {item.tenRap}:
                      {moment(item.ngayChieuGioChieu).format("hh~mm ")}
                    </p>
                  ) : (
                    <Popover
                      content={content}
                      trigger="hover"
                      key={`item-${index}`}
                    >
                      <p>
                        {item.tenRap}:
                        {moment(item.ngayChieuGioChieu).format("hh~mm ")}
                      </p>
                    </Popover>
                  )
                )}
            </div>
          </div>
        </Space>
      </div>
    </div>
  );
};

export default DetailCalMovie;
