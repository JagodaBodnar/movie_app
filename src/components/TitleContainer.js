import React, { useState } from "react";
import {
  StyledTitleContainer,
  StyledSectionTitle,
} from "./TitleContainerStyles";
import Pagination from "./Pagination";
import { connect } from "react-redux";

const TitleContainer = ({ title, movies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(8);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <StyledTitleContainer>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
    </StyledTitleContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(TitleContainer);
