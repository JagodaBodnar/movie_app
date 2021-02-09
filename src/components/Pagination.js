import React from "react";
import {
  StyledPaginationContainer,
  StyledPageNumber,
  StyledPrevButton,
  StyledPrevIcon,
  StyledNextButton,
  StyledNextIcon,
} from "./styles/PaginationStyles";
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
      <StyledPrevButton
        onClick={() =>
          currentPage > 1 ? paginate(currentPage - 1) : paginate(currentPage)
        }
      >
        <StyledPrevIcon />
      </StyledPrevButton>
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
      <StyledNextButton
        onClick={() => {
          currentPage < pageNumbers.length
            ? paginate(currentPage + 1)
            : paginate(currentPage);
        }}
      >
        <StyledNextIcon />
      </StyledNextButton>
    </StyledPaginationContainer>
  );
};

export default Pagination;
