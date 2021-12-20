
import * as action from "../actions/ticket.action";
import ticketManagerApi from "../../API/ticketManagerApi";
import { showMessageAntd } from "../../util/showMessageAntd";

export const getInfoTicketRoom = (params) => {
    return (dispatch) => {
        dispatch(action.getInfoTicketRoomStart());

        ticketManagerApi
        .getInfoTicketRoomByMaLichChieu({MaLichChieu: params})
        .then((response) => dispatch(action.getInfoTicketRoomSuccess(response)))
        .catch(err => dispatch(action.getInfoTicketRoomError(err)))
    }
}




export const payTicket = (params) => {
    console.log("thongTinDatVe", params);
    return (dispatch) => {
        dispatch(action.payTicketStart());
        
        ticketManagerApi
        .orderTicket({DanhSachVe: params})
        .then((response) => {
            console.log("đặt vé thành công");
            dispatch(action.payTicketSuccess(response));
            showMessageAntd("success", "Đặt vé thành công");
            
        })
        .catch(err => dispatch(action.payTicketError(err)))
    }
}











// export const payTicket = (thongTinDatVe, setCurrentPage) => {
//     console.log("thongTinDatVe", thongTinDatVe);
//     return (dispatch) => {
//         dispatch(action.payTicketStart());
//         setCurrentPage("result");

//         ticketManagerApi
//         .orderTicket({DanhSachVe: thongTinDatVe})
//         .then((response) => {
//             console.log("đặt vé thành công");
//             dispatch(action.payTicketSuccess(response));
            
//         })
//         .catch(err => dispatch(action.payTicketError(err)))
//     }
// }





// export const getInfoTicketRoom = (params) => (dispatch) => {
//     dispatch(action.getInfoTicketRoomStart());

//         ticketManagerApi
//         .getInfoTicketRoomByMaLichChieu({MaLichChieu: params})
//         .then((response) => dispatch(action.getInfoTicketRoomSuccess(response)))
//         .catch(err => dispatch(action.getInfoTicketRoomError(err)))
//   };