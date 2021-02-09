import React from "react";
import {
  addPopularMovieToFavourite,
  removeMovieFromFavourite,
  paginate,
} from "../actions";
import { FaHeart } from "react-icons/fa";
import {
  StyledTitleContainer,
  StyledSectionTitle,
  StyledMovieImage,
  StyledImg,
  StyledMoviesList,
  StyledDetails,
  StyledButton,
  StyledDetailsContainer,
  StyledMoviesListContainer,
  StyledVoteParagraph,
  StyledStarIcon,
  StyledFavouriteOn,
} from "./styles/ViewsStyles";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import AmountOfMovies from "../components/AmountOfMovies";

const PopularMovies = () => {
  const popularMovies = useSelector((state) => state.popularMovies);
  const currentPage = useSelector((state) => state.currentPage);
  const moviesPerPage = useSelector((state) => state.moviesPerPage);
  popularMovies.sort((item, item2) => {
    return item2.vote_average - item.vote_average;
  });

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = popularMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );
  const dispatch = useDispatch();
  const paginateMovies = (pageNumber) => {
    dispatch(paginate(pageNumber));
  };

  const handleFavourite = (title) => {
    popularMovies.map((item) => {
      if (item.title === title) {
        if (item.adult === true) {
          return dispatch(removeMovieFromFavourite(title));
        } else if (item.adult === false) {
          return dispatch(addPopularMovieToFavourite(title));
        }
      }
      return item;
    });
  };
  return (
    <>
      <StyledTitleContainer>
        <StyledSectionTitle>Popular movies</StyledSectionTitle>
        <AmountOfMovies />
        <Pagination
          moviePerPage={moviesPerPage}
          currentPage={currentPage}
          totalMovies={popularMovies.length}
          paginate={paginateMovies}
        />
      </StyledTitleContainer>
      <StyledMoviesList>
        {currentMovies.map((item) => {
          const {
            adult,
            title,
            release_date,
            vote_average,
            poster_path,
            id,
            overview,
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
                <StyledDetails>{title}</StyledDetails>
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

export default PopularMovies;
