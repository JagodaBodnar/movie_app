import { actionTypes } from "./actionTypes";

const {
  FETCH_MOVIES,
  FETCH_POPULAR_MOVIES,
  FETCH_TV_SHOWS,
  FETCH_NOW_PLAYING,
  ADD_MOVIE_TO_FAVOURITE,
  REMOVE_MOVIE_FROM_FAVOURITE,
  ADD_POPULAR_MOVIE_TO_FAVOURITE,
  ADD_TV_SHOW_TO_FAVOURITE,
  ADD_NOW_PLAYING_TO_FAVOURITE,
} = actionTypes;

export const fetchMovies = (response) => {
  return {
    type: FETCH_MOVIES,
    payload: response,
  };
};
export const fetchPopularMovies = (response) => {
  return {
    type: FETCH_POPULAR_MOVIES,
    payload: response,
  };
};

export const fetchTVShows = (response) => {
  return {
    type: FETCH_TV_SHOWS,
    payload: response,
  };
};
export const fetchNowPlaying = (response) => {
  return {
    type: FETCH_NOW_PLAYING,
    payload: response,
  };
};

export const addMovieToFavourite = (movieName) => {
  return {
    type: ADD_MOVIE_TO_FAVOURITE,
    payload: movieName,
  };
};
export const addPopularMovieToFavourite = (movieName) => {
  return {
    type: ADD_POPULAR_MOVIE_TO_FAVOURITE,
    payload: movieName,
  };
};

export const addTVShowToFavourite = (tvShow) => {
  return {
    type: ADD_TV_SHOW_TO_FAVOURITE,
    payload: tvShow,
  };
};
export const addNowPlayingToFavourite = (tvShow) => {
  return {
    type: ADD_NOW_PLAYING_TO_FAVOURITE,
    payload: tvShow,
  };
};

export const removeMovieFromFavourite = (tvShow) => {
  return {
    type: REMOVE_MOVIE_FROM_FAVOURITE,
    payload: tvShow,
  };
};
