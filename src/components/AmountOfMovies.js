import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledSelectButton,
  StyledOptionButton,
  StyledSelectContainer,
} from "./AmountOfMoviesStyles";
import { changeMoviesPerPage, setCurrentPage } from "../actions";

const AmountOfMovies = () => {
  const moviesFour = useSelector((state) => state.moviesFour);
  const moviesEight = useSelector((state) => state.moviesEight);
  const moviesTen = useSelector((state) => state.moviesTen);
  const dispatch = useDispatch();

  return (
    <>
      <StyledSelectContainer>
        <StyledSelectButton
          onChange={(e) => {
            dispatch(changeMoviesPerPage(e.target.value));
            dispatch(setCurrentPage());
          }}
          defaultValue={moviesEight}
        >
          <StyledOptionButton value={moviesFour}>4</StyledOptionButton>
          <StyledOptionButton value={moviesEight}>8</StyledOptionButton>
          <StyledOptionButton value={moviesTen}>10</StyledOptionButton>
        </StyledSelectButton>
      </StyledSelectContainer>
    </>
  );
};

export default AmountOfMovies;
