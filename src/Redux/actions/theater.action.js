import { theaterType } from "../actionType/actionType";

export const getInforShowtimeMovieStart = () => ({
  type: theaterType.GET_INFOR_SHOWTIME_MOVIE_START,
});

export const getInforShowtimeMovieSuccess = (payload) => ({
  type: theaterType.GET_INFOR_SHOWTIME_MOVIE_SUCCESS,
  payload: payload,
});

export const getInforShowtimeMovieError = () => ({
  type: theaterType.GET_INFOR_SHOWTIME_MOVIE_ERROR,
});
