import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../../../Redux/thunk/movie.thunk';
import MovieDetailTop from '../../components/MovieDetail/MovieDetailTop/MovieDetailTop';
import "./MovieDetail.scss"
import MovieDetailBottom from './../../components/MovieDetail/MovieDetailBottom/MovieDetailBottom';

export default function MovieDetail(props) {

    // console.log("props in MovieDetail", props);
    // const {movieInfor} = useSelector(state => state.movieReducer);
    const {movieInfor} = useSelector((state) => state.movie);
    console.log("movieInfor", movieInfor);

    const dispatch = useDispatch();

    useEffect(() => {
        const {movieId} = props.match.params;
        console.log("movieId",movieId);
        dispatch(getMovieDetail(movieId));
    },[])

    return (
        <div className="movie_detail">
            
            <MovieDetailTop movieInfor={movieInfor}/>
            <MovieDetailBottom movieInfor={movieInfor}/>
        </div>
    )
}
