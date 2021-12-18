import axiosClient from "./axiosClient";

const login = {
  userLogin: (params) => {
    console.log(params);
    const url = "/api/QuanLyNguoiDung/DangNhap";
    return axiosClient.post(url, params);
  },
};

export default login;
