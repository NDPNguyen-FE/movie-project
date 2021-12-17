import filmManagerApi from "../../API/filmManagerApi";
import * as action from "../actions/movie.action";

export const getListBanner = () => (dispatch) => {
  dispatch(action.getBannerStart());

  filmManagerApi
    .getListBanner()
    .then((banner) => dispatch(action.getBannerSuccess(banner)))
    .catch((err) => dispatch(action.getBannerError(err)));
};

export const getListMovie = (params) => (dispatch) => {
  dispatch(action.getListMovieStart());

  filmManagerApi
    .getListFilm(params)
    .then((movie) => dispatch(action.getListMovieSuccess(movie)))
    .catch((err) => dispatch(action.getListMovieError(err)));
};


export const getMovieDetail = (params) => (dispatch) => {
  console.log("params in thunk", params);
  dispatch(action.getMovieDetailStart());

  filmManagerApi
  .getInforFilm({ maPhim: params })
  .then((response) => dispatch(action.getMovieDetailSuccess(response)))
  .catch((err) => dispatch(action.getMovieDetailError(err)))
}



