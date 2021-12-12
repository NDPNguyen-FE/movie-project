import movieTheaterManagerApi from "../../API/movieTheaterManagerApi";

import * as action from "../actions/theater.action";

export const getTheaterByMovieId = (params) => (dispatch) => {
  dispatch(action.getInforShowtimeMovieStart());

  movieTheaterManagerApi
    .getInforShowtimeMovie({ MaPhim: params })
    .then((theater) => dispatch(action.getInforShowtimeMovieSuccess(theater)))
    .catch((err) => dispatch(action.getInforShowtimeMovieError(err)));
};
