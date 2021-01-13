import React from "react";
import {
  StyledFavouriteListLink,
  StyledImg,
  StyledDetails,
  StyledDetailsContainer,
  StyledMoviesList,
  StyledTitleContainer,
  StyledSectionTitle,
  StyledStarIcon,
  StyledLabel,
} from "./DetailsStyles";

const MovieDetails = (props) => {
  const {
    title,
    release_date,
    vote_average,
    poster_path,
    overview,
  } = props.location.state;
  const transform = Date.parse(release_date);
  const dates = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(transform);
  return (
    <>
      <StyledTitleContainer>
        <StyledSectionTitle>Details</StyledSectionTitle>
      </StyledTitleContainer>
      <StyledMoviesList>
        <StyledFavouriteListLink>
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
      </StyledMoviesList>
    </>
  );
};

export default MovieDetails;
