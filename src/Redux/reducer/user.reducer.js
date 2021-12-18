import { userType } from "../actionType/actionType";

const initialState = {
  isLoading: false,
  status: "",
  user: {},
  users: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userType.CREAT_USER_START: {
      return {
        ...state,
        isLoading: true,
        status: "",
      };
    }
    case userType.CREAT_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        status: "Register_Success",
      };
    }
    case userType.CREAT_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        status: "Register_Failure",
      };
    }

    case userType.UPDATE_USER_START: {
      return {
        ...state,
        isLoading: true,
        status: "",
      };
    }

    case userType.UPDATE_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        status: "Update_Success",
      };
    }

    case userType.UPDATE_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        status: "Update_Failure",
      };
    }

    default:
      return state;
  }
};

export default userReducer;
