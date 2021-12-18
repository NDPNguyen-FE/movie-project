import axiosClient from "./axiosClient";

const ticketManagerApi = {
  getRoomTicket: (params) => {
    const url = "/api/QuanLyDatVe/LayDanhSachPhongVe";
    return axiosClient.get(url, { params });
  },

  createCalendarMovie: (params) => {
    const url = "/api/QuanLyDatVe/TaoLichChieu";
    return axiosClient.post(url, params);
  },

  orderTicket: (params) => {
    const url = "/api/QuanLyDatVe/DatVe";
    return axiosClient.post(url, params);
  },
};

export default ticketManagerApi;
