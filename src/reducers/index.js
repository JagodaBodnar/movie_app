import { actionTypes } from "../actions/actionTypes";

const initialState = {
  movies: [],
  popularMovies: [],
  nowPlaying: [],
  tvShows: [],
  comingSoon: [],
  favourite: [],
  currentPage: 1,
  moviesPerPage: 8,
  isMenuOpen: false,
  moviesFour: 4,
  moviesEight: 8,
  moviesTen: 10,
};

const moviesReducer = (state = initialState, action) => {
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
    PAGINATE,
    SET_CURRENT_PAGE,
    SET_PATH,
    TOGGLE_MENU,
    CHANGE_MOVIES_PER_PAGE,
  } = actionTypes;
  const { type, payload } = action;

  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: [...payload],
      };
    case FETCH_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: [...payload],
      };
    case FETCH_TV_SHOWS:
      return {
        ...state,
        tvShows: [...payload],
      };
    case FETCH_NOW_PLAYING:
      return {
        ...state,
        nowPlaying: [...payload],
      };
    case ADD_MOVIE_TO_FAVOURITE:
      const addedMovie = state.movies.filter((item) => {
        if (item.title === payload) {
          item.adult = true;
        }
        return item.title === payload;
      });
      return {
        ...state,
        favourite: [...new Set([...state.favourite, ...addedMovie])],
        movies: [...state.movies],
      };
    case ADD_POPULAR_MOVIE_TO_FAVOURITE:
      const addedPopularMovie = state.popularMovies.filter((item) => {
        if (item.title === payload) {
          item.adult = true;
        }
        return item.title === payload;
      });
      return {
        ...state,
        favourite: [...new Set([...state.favourite, ...addedPopularMovie])],
        popularMovies: [...state.popularMovies],
      };
    case ADD_TV_SHOW_TO_FAVOURITE:
      const addedTVShow = state.tvShows.filter((item) => {
        return item.original_name === payload;
      });
      return {
        ...state,
        favourite: [...new Set([...state.favourite, ...addedTVShow])],
      };
    case ADD_NOW_PLAYING_TO_FAVOURITE:
      const addedNowPlaying = state.nowPlaying.filter((item) => {
        if (item.title === payload) {
          item.adult = true;
        }
        return item.title === payload;
      });
      return {
        ...state,
        favourite: [...new Set([...state.favourite, ...addedNowPlaying])],
        nowPlaying: [...state.nowPlaying],
      };
    case REMOVE_MOVIE_FROM_FAVOURITE:
      const remainedMovies = state.favourite.filter((item) => {
        if (item.title) {
          if (item.title === payload) {
            item.adult = false;
          }
          return item.title !== payload;
        } else if (item.original_name) {
          return item.original_name !== payload;
        }
        return item;
      });
      return {
        ...state,
        favourite: [...new Set([...remainedMovies])],
        movies: [...state.movies],
        popularMovies: [...state.popularMovies],
        nowPlaying: [...state.nowPlaying],
      };
    case PAGINATE:
      return {
        ...state,
        currentPage: payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: 1,
      };
    case SET_PATH:
      return {
        ...state,
        path: payload,
      };
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    case CHANGE_MOVIES_PER_PAGE:
      return {
        ...state,
        moviesPerPage: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default moviesReducer;
