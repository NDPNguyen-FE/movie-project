import { ticketType } from "../actionType/actionType";

export const createTicketStart = () => ({
  type: ticketType.CREATE_TICKET_START,
});

export const createTicketSuccess = (payload) => ({
  type: ticketType.CREATE_TICKET_SUCCESS,
  payload: payload,
});

export const createTicketError = () => ({
  type: ticketType.CREATE_TICKET_ERROR,
});

export const getTicketRoomByIdStart = () => ({
  type: ticketType.GET_TICKET_ROOM_START,
});

export const getTicketRoomByIdSuccess = (payload) => ({
  type: ticketType.GET_TICKET_ROOM_SUCCESS,
  payload: payload.data,
});

export const getTicketRoomByIdError = (payload) => ({
  type: ticketType.GET_TICKET_ROOM_ERROR,
  payload: payload,
});
