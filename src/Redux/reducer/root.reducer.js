import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import theaterReducer from "./theater.reducer";
import { modalAntdReducer } from './modalAntd.reducer';


const rootReducer = () =>
  combineReducers({
    movie: movieReducer,
    theater: theaterReducer,
    modalAntd: modalAntdReducer,
  });

export default rootReducer;
