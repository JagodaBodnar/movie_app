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
} from "./FavouriteMoviesStyles";
import { useDispatch, useSelector } from "react-redux";

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
              original_name,
              first_air_date,
              overview,
              id,
            } = item;
            return (
              <StyledFavouriteContainer key={id}>
                <StyledFavouriteListLink
                  to={
                    item.title
                      ? {
                          pathname: `/movie/${title}`,
                          state: {
                            title,
                            release_date,
                            vote_average,
                            poster_path,
                            first_air_date,
                            overview,
                            id,
                          },
                        }
                      : {
                          pathname: `/tv/${original_name}`,
                          state: {
                            title,
                            release_date,
                            vote_average,
                            poster_path,
                            first_air_date,
                            overview,
                            id,
                          },
                        }
                  }
                >
                  <StyledImg
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt="movie img"
                  />
                </StyledFavouriteListLink>
                <StyledDetailsContainer>
                  <StyledDetails>
                    <StyledLabel>Title: </StyledLabel>
                    <p>
                      {title}
                      {original_name}
                    </p>
                  </StyledDetails>
                  <StyledDetails>
                    <StyledLabel>Overview: </StyledLabel>
                    <p>{overview}</p>
                  </StyledDetails>
                  <StyledDetails>
                    <StyledLabel>Release date: </StyledLabel>
                    {release_date}
                    {first_air_date}
                  </StyledDetails>
                  <StyledDetails>
                    <StyledStarIcon />
                    {vote_average}
                  </StyledDetails>
                </StyledDetailsContainer>
                <StyledButton
                  onClick={() => {
                    dispatch(
                      removeMovieFromFavourite(title),
                      removeMovieFromFavourite(original_name)
                    );
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
