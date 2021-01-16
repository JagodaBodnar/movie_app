import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  fetchMovies,
  fetchPopularMovies,
  fetchTVShows,
  fetchNowPlaying,
} from "./actions";
import { BrowserRouter } from "react-router-dom";
import Router from "./routing/Router";
import MainTemplate from "./templates/MainTemplate";
import { useDispatch, useSelector } from "react-redux";
import { setPath } from "./actions";

const App = ({
  fetchMovies,
  fetchPopularMovies,
  fetchTVShows,
  fetchNowPlaying,
}) => {
  const getTopRatedMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_DATABASE_KEY}`
      )
      .then((response) => {
        const { results } = response.data;
        fetchMovies(results);
      });
  };
  const getPopularMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_DATABASE_KEY}`
      )
      .then((response) => {
        const { results } = response.data;
        fetchPopularMovies(results);
      });
  };
  const getPopularTVShows = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIE_DATABASE_KEY}`
      )
      .then((response) => {
        const { results } = response.data;
        fetchTVShows(results);
      });
  };
  const getNowPlaying = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DATABASE_KEY}`
      )
      .then((response) => {
        const { results } = response.data;
        fetchNowPlaying(results);
      });
  };

  const dispatch = useDispatch();
  const checkPath = () => {
    window.location.pathname === "/movies_top_rated" ||
    window.location.pathname === "/movies_popular"
      ? dispatch(setPath(true))
      : dispatch(setPath(false));
  };

  useEffect(() => {
    getTopRatedMovies();
    getPopularMovies();
    getPopularTVShows();
    getNowPlaying();
    checkPath();
  }, []);

  return (
    <>
      <BrowserRouter>
        <MainTemplate>
          <Router />
        </MainTemplate>
      </BrowserRouter>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (response) => dispatch(fetchMovies(response)),
    fetchPopularMovies: (response) => dispatch(fetchPopularMovies(response)),
    fetchTVShows: (response) => dispatch(fetchTVShows(response)),
    fetchNowPlaying: (response) => dispatch(fetchNowPlaying(response)),
  };
};

export default connect(null, mapDispatchToProps)(App);
