import React from "react";
import { removeMovieFromFavourite } from "../actions";
import {
  StyledImg,
  StyledMoviesList,
  StyledDetails,
  StyledButton,
  StyledDetailsContainer,
  StyledFavouriteListLink,
  StyledTitleContainer,
  StyledSectionTitle,
  StyledLabel,
  StyledStarIcon,
  StyledListEmpty,
  StyledFavouriteContainer,
} from "./styles/FavouriteMoviesStyles";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const FavouriteMovies = () => {
  const favourite = useSelector((state) => state.favourite);
  const dispatch = useDispatch();

  return (
    <>
      <StyledTitleContainer>
        <StyledSectionTitle>My favourites</StyledSectionTitle>
      </StyledTitleContainer>
      {favourite.length === 0 ? (
        <StyledDetailsContainer>
          <StyledListEmpty>Your list is empty...</StyledListEmpty>
        </StyledDetailsContainer>
      ) : (
        <StyledMoviesList>
          {favourite.map((item) => {
            const {
              title,
              release_date,
              vote_average,
              poster_path,
              overview,
              id,
            } = item;
            const dates = moment(release_date).format("LL");
            return (
              <StyledFavouriteContainer key={id}>
                <StyledFavouriteListLink
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
                </StyledFavouriteListLink>
                <StyledDetailsContainer>
                  <StyledDetails>
                    <StyledLabel>Title: </StyledLabel>
                    <p>{title}</p>
                  </StyledDetails>
                  <StyledDetails>
                    <StyledLabel>Overview: </StyledLabel>
                    <p>{overview}</p>
                  </StyledDetails>
                  <StyledDetails>
                    <StyledLabel>Release date: </StyledLabel>
                    {dates}
                  </StyledDetails>
                  <StyledDetails>
                    <StyledStarIcon />
                    {vote_average}
                  </StyledDetails>
                </StyledDetailsContainer>
                <StyledButton
                  onClick={() => {
                    dispatch(removeMovieFromFavourite(title));
                  }}
                >
                  Remove from favourite
                </StyledButton>
              </StyledFavouriteContainer>
            );
          })}
        </StyledMoviesList>
      )}
    </>
  );
};

export default FavouriteMovies;
