import React, { useState } from "react";
import { connect } from "react-redux";
import { addMovieToFavourite } from "../actions";
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
} from "./ViewsStyles";
import Pagination from "../components/Pagination";

const TopRatedMovies = ({ movies, addMovieToFavourite }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(8);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <StyledTitleContainer>
        <StyledSectionTitle>Top rated movies</StyledSectionTitle>
        <Pagination
          moviesPerPage={moviesPerPage}
          totalMovies={movies.length}
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
                  <StyledButton onClick={() => addMovieToFavourite(title)}>
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
    movies: state.movies,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addMovieToFavourite: (movie) => dispatch(addMovieToFavourite(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopRatedMovies);
