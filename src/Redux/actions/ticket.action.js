import { ticketType } from "../actionType/actionType";


export const getInfoTicketRoomStart = () => ({
    type: ticketType.GET_TICKET_ROOM_INFO_START,
  });
  
  export const getInfoTicketRoomSuccess = (payload) => ({
    type: ticketType.GET_TICKET_ROOM_INFO_SUCCESS,
    payload: payload,
  });
  
  
  export const getInfoTicketRoomError = () => ({
    type: ticketType.GET_TICKET_ROOM_INFO_ERROR,
  });



  
  export const chonGheAction = (gheSelect,letter) => {
    return {
        type: ticketType.CHON_GHE,
        payload: {
          gheSelect: gheSelect,
          letter: letter,
        }
    }
}




export const payTicketStart = () => {
  return {
    type: ticketType.PAY_TICKET_START,
  }
}


export const payTicketSuccess = (payload) => ({
  type: ticketType.PAY_TICKET_SUCCESS,
  payload: payload,
});


export const payTicketError = () => ({
  type: ticketType.PAY_TICKET_ERROR,
});

