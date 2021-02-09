import { actionTypes } from "./actionTypes";

const {
  FETCH_MOVIES,
  FETCH_POPULAR_MOVIES,
  FETCH_NOW_PLAYING,
  ADD_MOVIE_TO_FAVOURITE,
  REMOVE_MOVIE_FROM_FAVOURITE,
  ADD_POPULAR_MOVIE_TO_FAVOURITE,
  ADD_NOW_PLAYING_TO_FAVOURITE,
  PAGINATE,
  SET_CURRENT_PAGE,
  SET_PATH,
  TOGGLE_MENU,
  CHANGE_MOVIES_PER_PAGE,
  ADD_COMMENT,
  EDIT_COMMENT,
  SAVE_EDITED_COMMENT,
  HANDLE_COMMENT_CHANGE,
  ANSWER_COMMENT,
  ADD_NEW_ANSWER,
  SELECT_ARTICLE,
  GET_ARTICLES_DATA,
  CANCEL_COMMENT,
  EDIT_ANSWER,
  ANSWER_TO_ANSWER,
  CANCEL_ANSWER,
  HANDLE_ANSWER_CHANGE,
  HANDLE_ANSWER_EDIT_CANCEL,
  SAVE_ANSWER_CHANGE,
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

export const addNowPlayingToFavourite = (tvShow) => {
  return {
    type: ADD_NOW_PLAYING_TO_FAVOURITE,
    payload: tvShow,
  };
};

export const removeMovieFromFavourite = (movie) => {
  return {
    type: REMOVE_MOVIE_FROM_FAVOURITE,
    payload: movie,
  };
};

export const paginate = (pageNumber) => {
  return {
    type: PAGINATE,
    payload: pageNumber,
  };
};

export const setCurrentPage = () => {
  return {
    type: SET_CURRENT_PAGE,
  };
};

export const setPath = (boolean) => {
  return {
    type: SET_PATH,
    payload: boolean,
  };
};

export const toggleMenu = () => {
  return {
    type: TOGGLE_MENU,
  };
};
export const changeMoviesPerPage = (val) => {
  return {
    type: CHANGE_MOVIES_PER_PAGE,
    payload: val,
  };
};

export const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};

export const editComment = (commentId) => {
  return {
    type: EDIT_COMMENT,
    payload: commentId,
  };
};

export const saveEditedComment = (commentId, comment) => {
  return {
    type: SAVE_EDITED_COMMENT,
    payload: { commentId, comment },
  };
};

export const handleCommentChange = (comment, id) => {
  return {
    type: HANDLE_COMMENT_CHANGE,
    payload: { comment, id },
  };
};

export const answerComment = (commentId) => {
  return {
    type: ANSWER_COMMENT,
    payload: commentId,
  };
};

export const addAnswer = (newAnswer, commentId) => {
  return {
    type: ADD_NEW_ANSWER,
    payload: { newAnswer, commentId },
  };
};

export const selectArticle = (articleId) => ({
  type: SELECT_ARTICLE,
  payload: articleId,
});

export const editComment2 = (commentId, commentContent) => ({
  type: "EDIT_COMMENT_2",
  payload: { commentId, commentContent },
});

export const getArticlesData = (articlesData) => ({
  type: GET_ARTICLES_DATA,
  payload: articlesData,
});

export const cancelComment = (commentId, oldValue) => ({
  type: CANCEL_COMMENT,
  payload: { commentId, oldValue },
});
export const cancelAnswer = (commentId) => ({
  type: CANCEL_ANSWER,
  payload: commentId,
});

export const editAnswer = (answerId) => {
  return {
    type: EDIT_ANSWER,
    payload: answerId,
  };
};

export const answerToAnswer = (answerId) => {
  return {
    type: ANSWER_TO_ANSWER,
    payload: answerId,
  };
};

export const handleAnswerChange = (answerId, answerContent) => {
  return {
    type: HANDLE_ANSWER_CHANGE,
    payload: { answerId, answerContent },
  };
};

export const cancelAnswerChange = (answerId, answerContent) => {
  return {
    type: HANDLE_ANSWER_EDIT_CANCEL,
    payload: { answerId, answerContent },
  };
};

export const saveAnswerChange = (answerId, answerContent) => {
  return {
    type: SAVE_ANSWER_CHANGE,
    payload: { answerId, answerContent },
  };
};
