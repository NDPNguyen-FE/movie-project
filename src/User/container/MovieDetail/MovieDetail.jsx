import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../../../Redux/thunk/movie.thunk";
import MovieDetailBottom from "../../components/MovieDetail/MovieDetailBottom/MovieDetailBottom";
import MovieDetailTop from "../../components/MovieDetail/MovieDetailTop/MovieDetailTop";
import "./MovieDetail.scss";

export default function MovieDetail(props) {
  const { movieInfor } = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    const { movieId } = props.match.params;

    dispatch(getMovieDetail(movieId));
  }, []);

  return (
    <div className="movie_detail">
      <MovieDetailTop movieInfor={movieInfor} />
      <MovieDetailBottom movieInfor={movieInfor} />
    </div>
  );
}
