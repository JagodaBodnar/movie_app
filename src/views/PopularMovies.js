import React, { useState } from "react";
import {
  addPopularMovieToFavourite,
  removeMovieFromFavourite,
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
} from "./ViewsStyles";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";

const PopularMovies = () => {
  const popularMovies = useSelector((state) => state.popularMovies);
  popularMovies.sort((item, item2) => {
    return item2.vote_average - item.vote_average;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(8);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = popularMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const dispatch = useDispatch();
  const handleFavourite = (title) => {
    popularMovies.map((item) => {
      if (item.title === title) {
        if (item.adult === true) {
          console.log("imhere");
          return dispatch(removeMovieFromFavourite(title));
        } else if (item.adult === false) {
          console.log("inope ere");
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
        <Pagination
          moviesPerPage={moviesPerPage}
          totalMovies={popularMovies.length}
          paginate={paginate}
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
