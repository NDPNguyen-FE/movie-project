import movieTheaterManagerApi from "../../API/movieTheaterManagerApi";

import * as action from "../actions/theater.action";

export const getTheaterByMovieId = (params) => (dispatch) => {
  dispatch(action.getInforShowtimeMovieStart());

  movieTheaterManagerApi
    .getInforShowtimeMovie({ MaPhim: params })
    .then((theater) => dispatch(action.getInforShowtimeMovieSuccess(theater)))
    .catch((err) => dispatch(action.getInforShowtimeMovieError(err)));
};


export const getTheaterInfoByMaHtr = (params) => (dispatch) => {
  dispatch(action.getTheaterInfoStart());

  movieTheaterManagerApi
    .getInforMovieTheater({ maHtr: params })
    .then((response) => dispatch(action.getTheaterInfoSuccess(response)))
    .catch((err) => dispatch(action.getTheaterInfoError(err)));
};



export const getTheaterSystemShowtimeInfor = (params) => (dispatch) => {
  dispatch(action.getTheaterSystemShowtimeInforStart());

  movieTheaterManagerApi
    .getTheaterSystemShowtimeInfor({ maHtr: params })
    .then((response) => dispatch(action.getTheaterSystemShowtimeInforSuccess(response)))
    .catch((err) => dispatch(action.getTheaterSystemShowtimeInforError(err)));
};
