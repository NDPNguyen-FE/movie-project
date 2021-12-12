import axiosClient from "./axiosClients";

const login = {
  userLogin: (taikhoan, matkhau) => {
    const url = "/login";
    return axiosClient.post(url, { taikhoan, matkhau });
  },
};

export default login;
