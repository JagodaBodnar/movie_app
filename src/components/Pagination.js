import React from "react";
import {
  StyledPaginationContainer,
  StyledPageNumber,
} from "./PaginationStyles";

const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {
  const pageNumbers = [];
  for (
    let index = 1;
    index <= Math.ceil(totalMovies / moviesPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }
  return (
    <StyledPaginationContainer>
      {pageNumbers.map((pageNumber) => {
        return (
          <StyledPageNumber key={pageNumber}>
            <p onClick={() => paginate(pageNumber)}>{pageNumber}</p>
          </StyledPageNumber>
        );
      })}
    </StyledPaginationContainer>
  );
};

export default Pagination;
