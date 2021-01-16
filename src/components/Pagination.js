import React from "react";
import {
  StyledPaginationContainer,
  StyledPageNumber,
} from "./PaginationStyles";
import { useSelector } from "react-redux";

const Pagination = ({ totalMovies, paginate }) => {
  const currentPage = useSelector((state) => state.currentPage);
  const moviesPerPage = useSelector((state) => state.moviesPerPage);
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
          <StyledPageNumber
            key={pageNumber}
            style={
              currentPage === pageNumber
                ? { color: "#CE1632" }
                : { color: `#eeeeee` }
            }
            onClick={() => paginate(pageNumber)}
          >
            {pageNumber}
          </StyledPageNumber>
        );
      })}
    </StyledPaginationContainer>
  );
};

export default Pagination;
