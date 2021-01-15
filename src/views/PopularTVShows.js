import React, { useState } from "react";
import { addTVShowToFavourite } from "../actions";
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
} from "./ViewsStyles";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";

const PopularTVShows = () => {
  const tvShows = useSelector((state) => state.tvShows);
  tvShows.sort((item, item2) => {
    return item2.vote_average - item.vote_average;
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(8);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = tvShows.slice(indexOfFirstMovie, indexOfLastMovie);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const dispatch = useDispatch();

  return (
    <>
      <StyledTitleContainer>
        <StyledSectionTitle>Popular TV Shows</StyledSectionTitle>
        <Pagination
          moviesPerPage={moviesPerPage}
          totalMovies={tvShows.length}
          paginate={paginate}
        />
      </StyledTitleContainer>
      <StyledMoviesList>
        {currentMovies.map((item) => {
          const {
            original_name,
            first_air_date,
            vote_average,
            poster_path,
            id,
            overview,
          } = item;
          return (
            <StyledMoviesListContainer key={id}>
              <StyledMovieImage
                to={{
                  pathname: `/tv/${original_name}`,
                  state: {
                    original_name,
                    first_air_date,
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
                <StyledDetails>{original_name}</StyledDetails>
                <StyledDetails>
                  <StyledVoteParagraph>
                    <StyledStarIcon />
                    {vote_average}
                  </StyledVoteParagraph>
                  <StyledButton
                    onClick={() =>
                      dispatch(addTVShowToFavourite(original_name))
                    }
                  >
                    <FaHeart />
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

export default PopularTVShows;
