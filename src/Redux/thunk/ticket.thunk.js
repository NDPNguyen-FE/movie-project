import ticketManagerApi from "../../API/ticketManagerApi";

import * as action from "../actions/ticket.action";

export const getTicketRoomById = (params) => (dispatch) => {
  dispatch(action.getTicketRoomByIdStart());

  ticketManagerApi
    .getRoomTicket({ MaLichChieu: params })
    .then((ticket) => dispatch(action.getTicketRoomByIdSuccess(ticket)))
    .catch((err) => dispatch(action.getTicketRoomByIdError(err)));
};

export const createTicket = (params) => (dispatch) => {
  dispatch(action.createTicketStart());

  ticketManagerApi
    .orderTicket(params)
    .then((ticket) => dispatch(action.createTicketSuccess(ticket)))
    .catch((err) => dispatch(action.createTicketError(err)));
};
