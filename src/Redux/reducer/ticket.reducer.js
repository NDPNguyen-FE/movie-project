import { ticketType } from "../actionType/actionType";

const initialState = {
  orderTicket: {},
  listChair: [],
  movieInfo: {},
  calTicket: {},
  isLoading: false,
  error: null,
  message: "",
};

const ticketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ticketType.GET_TICKET_ROOM_START: {
      return {
        ...state,
        listChair: [],
        movieInfo: {},
        isLoading: true,
        error: null,
      };
    }

    case ticketType.GET_TICKET_ROOM_SUCCESS: {
      return {
        ...state,
        listChair: payload.content.danhSachGhe,
        movieInfo: payload.content.thongTinPhim,
        isLoading: false,
      };
    }

    case ticketType.GET_TICKET_ROOM_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload.message,
      };
    }

    case ticketType.CREATE_TICKET_START: {
      return {
        ...state,
        message: "",
        isLoading: true,
      };
    }

    case ticketType.CREATE_TICKET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        message: payload.message,
      };
    }

    case ticketType.CREATE_TICKET_ERROR: {
      return {
        ...state,
        message: payload.message,
      };
    }

    default:
      return state;
  }
};

export default ticketReducer;
