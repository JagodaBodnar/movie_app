import React from "react";
import {
  addMovieToFavourite,
  removeMovieFromFavourite,
  paginate,
} from "../actions";
import { FaHeart } from "react-icons/fa";
import {
  StyledMovieImage,
  StyledMoviesListContainer,
  StyledImg,
  StyledMoviesList,
  StyledDetails,
  StyledButton,
  StyledDetailsContainer,
  StyledTitleContainer,
  StyledSectionTitle,
  StyledVoteParagraph,
  StyledStarIcon,
  StyledDetailsTitle,
  StyledFavouriteOn,
} from "./ViewsStyles";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import AmountOfMovies from "../components/AmountOfMovies";

const TopRatedMovies = () => {
  const movies = useSelector((state) => state.movies);
  const currentPage = useSelector((state) => state.currentPage);
  const moviesPerPage = useSelector((state) => state.moviesPerPage);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const dispatch = useDispatch();
  const paginateMovies = (pageNumber) => {
    dispatch(paginate(pageNumber));
  };
  const handleFavourite = (title) => {
    movies.map((item) => {
      if (item.title === title) {
        if (item.adult === true) {
          return dispatch(removeMovieFromFavourite(title));
        } else if (item.adult === false) {
          return dispatch(addMovieToFavourite(title));
        }
      }
      return item;
    });
  };

  return (
    <>
      <StyledTitleContainer>
        <StyledSectionTitle>Top rated movies</StyledSectionTitle>
        <AmountOfMovies />
        <Pagination
          moviesPerPage={moviesPerPage}
          totalMovies={movies.length}
          paginate={paginateMovies}
          currentPage={currentPage}
        />
      </StyledTitleContainer>
      <StyledMoviesList>
        {currentMovies.map((item) => {
          const {
            title,
            release_date,
            vote_average,
            poster_path,
            id,
            overview,
            adult,
          } = item;
          return (
            <StyledMoviesListContainer key={id}>
              <StyledMovieImage
                to={{
                  pathname: `/movie/${title}`,
                  state: {
                    title,
                    release_date,
                    vote_average,
                    poster_path,
                    overview,
                    id,
                  },
                }}
              >
                <StyledImg
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt="movie img"
                />
              </StyledMovieImage>
              <StyledDetailsContainer>
                <StyledDetailsTitle>{title}</StyledDetailsTitle>
                <StyledDetails>
                  <StyledVoteParagraph>
                    <StyledStarIcon />
                    {vote_average}
                  </StyledVoteParagraph>
                  <StyledButton
                    onClick={() => {
                      handleFavourite(title);
                    }}
                  >
                    {adult ? <StyledFavouriteOn /> : <FaHeart />}
                  </StyledButton>
                </StyledDetails>
              </StyledDetailsContainer>
            </StyledMoviesListContainer>
          );
        })}
      </StyledMoviesList>
    </>
  );
};

export default TopRatedMovies;
