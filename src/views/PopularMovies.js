import React, { useState } from "react";
import { connect } from "react-redux";
import { addPopularMovieToFavourite } from "../actions";
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

const PopularMovies = ({ popularMovies, addPopularMovieToFavourite }) => {
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
                    onClick={() => addPopularMovieToFavourite(title)}
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

const mapStateToProps = (state) => {
  return {
    popularMovies: state.popularMovies,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPopularMovieToFavourite: (movie) =>
      dispatch(addPopularMovieToFavourite(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies);
