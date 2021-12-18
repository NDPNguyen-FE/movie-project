import { Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import "../UserProfile.scss";

const NetesdTableHistory = () => {
  const { infoTicket } = useSelector((state) => state.auth);

  const expandedRowRender = () => {
    const columns = [
      { title: "Mã Ghế", dataIndex: "date", key: "date" },
      { title: "Tên ghế", dataIndex: "name", key: "name" },
      { title: "Tên cụm rạp", dataIndex: "upgradeNum", key: "upgradeNum" },
      { title: "Tên Hệ thống rạp", dataIndex: "upgradeNum", key: "upgradeNum" },
    ];

    return <Table columns={columns} />;
  };

  const columns = [
    { title: "Ngày Đặt", dataIndex: "ngayDat", key: "ngayDat" },
    { title: "Giờ chiếu", dataIndex: "gioChieu", key: "gioChieu" },
    { title: "Mã vé", dataIndex: "maVe", key: "maVe" },
    { title: "Tên Phim", dataIndex: "tenPhim", key: "tenPhim" },
    { title: "Thời lượng", dataIndex: "thoiLuongPhim", key: "thoiLuongPhim" },
    { title: "Giá vé", dataIndex: "giaVe", key: "giaVe" },
  ];

  console.log(infoTicket);
  return (
    <Table
      className="components-table-demo-nested"
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={infoTicket}
    />
  );
};

export default NetesdTableHistory;
