import React from "react";
import { connect } from "react-redux";
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
} from "./FavouriteMoviesStyles";

const FavouriteMovies = ({ favourite, removeMovieFromFavourite }) => {
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
              <>
                <StyledFavouriteListLink
                  to={{
                    pathname: `/top_rated_movies/${title}`,
                    state: {
                      title,
                      release_date,
                      vote_average,
                      poster_path,
                      first_air_date,
                      overview,
                      id,
                    },
                  }}
                  key={id}
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
                <StyledButton onClick={() => removeMovieFromFavourite(title)}>
                  Remove from favourite
                </StyledButton>
              </>
            );
          })}
        </StyledMoviesList>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    favourite: state.favourite,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeMovieFromFavourite: (title) =>
      dispatch(removeMovieFromFavourite(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteMovies);
