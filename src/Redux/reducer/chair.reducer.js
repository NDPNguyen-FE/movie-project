import { selectChairType } from "../actionType/actionType";

const initialState = {
  listSTDSelect: [],
  listVipSelect: [],
};

const chairReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case selectChairType.SELECT_CHAIR_STD: {
      let listChaitSTD = JSON.parse(sessionStorage.getItem("chairSTD")) || [];

      const indexProduct = listChaitSTD.findIndex(
        (item) => item.maGhe === payload.key
      );

      console.log(indexProduct);
      if (indexProduct === -1) {
        listChaitSTD.push(payload);
      }

      sessionStorage.setItem("chairSTD", JSON.stringify(listChaitSTD));

      return {
        ...state,
        listSTDSelect: listChaitSTD,
      };
    }

    case selectChairType.SELECT_CHAIR_VIP: {
      let listChairVIP = JSON.parse(sessionStorage.getItem("chairVIP")) || [];

      const indexProduct = listChairVIP.findIndex(
        (item) => item.maGhe === payload.maGhe
      );

      console.log(indexProduct);
      if (indexProduct === -1) {
        listChairVIP.push(payload);
      }

      sessionStorage.setItem("chairVIP", JSON.stringify(listChairVIP));

      return {
        ...state,
        listSTDSelect: listChairVIP,
      };
    }

    default:
      return state;
  }
};

export default chairReducer;
