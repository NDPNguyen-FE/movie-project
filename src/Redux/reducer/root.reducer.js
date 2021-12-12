import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import movieReducer from "./movie.reducer";
import theaterReducer from "./theater.reducer";
import userReducer from "./user.reducer";

const rootReducer = () =>
  combineReducers({
    movie: movieReducer,
    theater: theaterReducer,
    user: userReducer,
    auth: authReducer,
  });

export default rootReducer;
