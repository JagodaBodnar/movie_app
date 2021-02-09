import { actionTypes } from "../actions/actionTypes";
import { getSelectedArticleFromLocalStorage } from "../utils/localStorageGetters";

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
  articles: [],
  selectedArticle: getSelectedArticleFromLocalStorage(),
};

const moviesReducer = (state = initialState, action) => {
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
    CANCEL_ANSWER,
    HANDLE_ANSWER_CHANGE,
    HANDLE_ANSWER_EDIT_CANCEL,
    SAVE_ANSWER_CHANGE,
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
    case ADD_COMMENT:
      console.log(payload.id);

      const selectedArticleWithComment = {
        ...state.selectedArticle,
        comments: [...state.selectedArticle.comments, payload],
      };
      console.log(selectedArticleWithComment);

      const addCommentToArticle = state.articles.map((article) => {
        if (article.id === state.selectedArticle.id) {
          article.comments = [...article.comments, payload];
        }
        return article;
      });

      return {
        ...state,
        selectedArticle: { ...selectedArticleWithComment },
        articles: [...addCommentToArticle],
      };
    case CANCEL_COMMENT:
      const cancelingComments = state.selectedArticle.comments.map(
        (comment) => {
          if (comment.commentId === payload.commentId) {
            console.log(payload.oldValue);
            comment.comment = payload.oldValue;
            comment.edit = false;
          }
          return comment;
        }
      );
      const articlesAfterCancelingComment = state.articles.map((article) => {
        if (article.id === state.selectedArticle.id) {
          article.comments = [...cancelingComments];
        }
        return article;
      });
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          comments: [...cancelingComments],
        },
        articles: [...articlesAfterCancelingComment],
      };
    case EDIT_COMMENT:
      const editingComments = state.selectedArticle.comments.map((comment) => {
        if (comment.commentId === payload) {
          comment.edit = true;
        }
        return comment;
      });

      const articlesWhileEditComment = state.articles.map((article) => {
        if (article.id === state.selectedArticle.id) {
          article.comments = [...editingComments];
        }
        return article;
      });

      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          comments: [...editingComments],
        },
        articles: [...articlesWhileEditComment],
      };
    case HANDLE_COMMENT_CHANGE:
      const commentChange = state.selectedArticle.comments.map((comment) => {
        if (comment.commentId === payload.id) {
          comment.comment = payload.comment;
        }
        return comment;
      });
      return {
        ...state,
      };
    case SAVE_EDITED_COMMENT:
      const editedComments = state.selectedArticle.comments.map((comment) => {
        if (comment.commentId === payload.commentId) {
          comment.comment = payload.comment;
          comment.edit = false;
        }
        return comment;
      });

      const articlesAfterEditComment = state.articles.map((article) => {
        if (article.id === state.selectedArticle.id) {
          article.comments = [...editedComments];
        }
        return article;
      });

      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          comments: [...editedComments],
        },
        articles: [...articlesAfterEditComment],
      };

    case ANSWER_COMMENT:
      const answeringToComments = state.selectedArticle.comments.map(
        (comment) => {
          if (comment.commentId === payload) {
            comment.answer = true;
          }
          return comment;
        }
      );

      const articlesWhileAnsweringToComment = state.articles.map((article) => {
        if (article.id === state.selectedArticle.id) {
          article.comments = [...answeringToComments];
        }
        return article;
      });

      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          comments: [...answeringToComments],
        },
        articles: [...articlesWhileAnsweringToComment],
      };
    case ADD_NEW_ANSWER:
      const addingNewAnswerToComments = state.selectedArticle.comments.map(
        (comment) => {
          if (comment.commentId === payload.commentId) {
            comment.answerArray = [...comment.answerArray, payload.newAnswer];
            comment.answer = false;
          }
          return comment;
        }
      );
      const articlesWhileAddingAnswerToComment = state.articles.map(
        (article) => {
          if (article.id === state.selectedArticle.id) {
            article.comments = [...addingNewAnswerToComments];
          }
          return article;
        }
      );
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          comments: [...addingNewAnswerToComments],
        },
        articles: [...articlesWhileAddingAnswerToComment],
      };

    case CANCEL_ANSWER:
      const cancelingAnswer = state.selectedArticle.comments.map((comment) => {
        if (comment.commentId === payload) {
          comment.answer = false;
        }
        return comment;
      });

      const articlesAfterCancelingAnswer = state.articles.map((article) => {
        if (article.id === state.selectedArticle.id) {
          article.comments = [...cancelingAnswer];
        }
        return article;
      });

      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          comments: [...cancelingAnswer],
        },
        articles: [...articlesAfterCancelingAnswer],
      };
    case EDIT_ANSWER:
      const editingAnswer = state.selectedArticle.comments.map((comment) => {
        comment.answerArray.map((answer) => {
          if (answer.answerId === payload) {
            answer.edit = true;
          }
          return answer;
        });
        return comment;
      });
      const articlesWhileEditAnswer = state.articles.map((article) => {
        if (article.id === state.selectedArticle.id) {
          article.comments.answerArray = [...editingAnswer];
        }
        return article;
      });

      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          comments: [...editingAnswer],
        },
        articles: [...articlesWhileEditAnswer],
      };
    case HANDLE_ANSWER_CHANGE:
      const answerChange = state.selectedArticle.comments.map((comment) => {
        comment.answerArray.map((answer) => {
          if (answer.answerId === payload.answerId) {
            answer.answerContent = payload.answerContent;
          }
          return answer;
        });
        return comment;
      });
      return {
        ...state,
      };
    case HANDLE_ANSWER_EDIT_CANCEL:
      const cancelingAnswerChange = state.selectedArticle.comments.map(
        (comment) => {
          comment.answerArray.map((answer) => {
            if (answer.answerId === payload.answerId) {
              answer.answerContent = payload.answerContent;
              answer.edit = false;
            }
            return answer;
          });
          return comment;
        }
      );
      const articlesAfterCancelingAnswerChange = state.articles.map(
        (article) => {
          if (article.id === state.selectedArticle.id) {
            article.comments.answerArray = [...cancelingAnswerChange];
          }
          return article;
        }
      );
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          comments: [...cancelingAnswerChange],
        },
        articles: [...articlesAfterCancelingAnswerChange],
      };
    case SAVE_ANSWER_CHANGE:
      const editedAnswer = state.selectedArticle.comments.map((comment) => {
        comment.answerArray.map((answer) => {
          if (answer.answerId === payload.answerId) {
            answer.answerContent = payload.answerContent;
            answer.edit = false;
          }
          return answer;
        });
        return comment;
      });

      const articlesAfterEditAnswer = state.articles.map((article) => {
        if (article.id === state.selectedArticle.id) {
          article.comments.answerArray = [...editedAnswer];
        }
        return article;
      });

      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          comments: [...editedAnswer],
        },
        articles: [...articlesAfterEditAnswer],
      };

    case GET_ARTICLES_DATA:
      return {
        ...state,
        articles: payload,
      };

    case SELECT_ARTICLE:
      const selectedArticle = state.articles.find((article) => {
        return article.id === payload;
      });
      return {
        ...state,
        selectedArticle,
      };
    default:
      return {
        ...state,
      };
  }
};

export default moviesReducer;
