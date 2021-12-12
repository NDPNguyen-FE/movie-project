import movieTheaterManagerApi from "../../API/movieTheaterManagerApi";

import * as action from "../actions/theater.action";

export const getTheaterByMovieId = (params) => (dispatch) => {
  dispatch(action.getInforShowtimeMovieStart());

  movieTheaterManagerApi
    .getInforShowtimeMovie({ MaPhim: params })
    .then((theater) => dispatch(action.getInforShowtimeMovieSuccess(theater)))
    .catch((err) => dispatch(action.getInforShowtimeMovieError(err)));
};

export const getListTheater = (params) => (dispatch) => {
  dispatch(action.getInforMovieTheaterStart());

  movieTheaterManagerApi
    .getInforMovieTheater(params)
    .then((theater) => dispatch(action.getInforMovieTheaterSuccess(theater)))
    .catch((err) => dispatch(action.getInforMovieTheaterError(err)));
};

export const getCalMovieTheater = (params) => (dispatch) => {
  dispatch(action.getTheaterSystemShowtimeInforStart());

  movieTheaterManagerApi
    .getTheaterSystemShowtimeInfor({ maHeThongRap: params })
    .then((theater) =>
      dispatch(action.getTheaterSystemShowtimeInforSuccess(theater))
    )
    .catch((err) => dispatch(action.getTheaterSystemShowtimeInforError(err)));
};
