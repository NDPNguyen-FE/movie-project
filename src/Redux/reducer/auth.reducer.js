import { authTypes } from "../actionType/actionType";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  profile: user || {},
  profileToken: {},
  isAuthenticated:
    (user && user.maLoaiNguoiDung === "QuanTri" ? true : false) || false,
  isLoggedIn: user ? true : false,
  isLoading: false,
  status: "",
  infoTicket: [],
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authTypes.USER_LOGIN_START: {
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
        profile: {},
        status: "",
      };
    }

    case authTypes.USER_LOGIN_SUCCESS: {
      const profile = payload.content;
      const accessToken = payload.content.accessToken;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(profile));

      state = {
        profile: profile,
        isAuthenticated: payload.content.maLoaiNguoiDung,
        isLoggedIn: true,
        isLoading: false,
        status: payload.statusCode,
      };

      return { ...state };
    }

    case authTypes.USER_LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        profile: {},
        status: "login_fail",
      };
    }

    case authTypes.USER_LOGOUT: {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      localStorage.removeItem("profileToken");

      return {
        ...state,
        isLoading: false,
        profile: {},
        isLoggedIn: false,
      };
    }

    case authTypes.GET_PROFILE_BY_TOKEN_START: {
      return {
        ...state,
        profileToken: {},
        profile: {},
        infoTicket: [],
        isLoading: true,
        isLoggedIn: false,
      };
    }

    case authTypes.GET_PROFILE_BY_TOKEN_SUCCESS: {
      const profileToken = payload.content;

      localStorage.setItem("profileToken", JSON.stringify(profileToken));

      state = {
        profileToken: profileToken,
        profile: profileToken,
        infoTicket: profileToken.thongTinDatVe,
        isLoggedIn: true,
        isLoading: false,
      };

      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};
