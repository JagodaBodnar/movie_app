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
} from "./styles/DetailsStyles";
import moment from "moment";

const MovieDetails = (props) => {
  const {
    title,
    release_date,
    vote_average,
    poster_path,
    overview,
  } = props.location.state;
  const dates = moment(release_date).format("LL");
  return (
    <>
      <StyledTitleContainer>
        <StyledSectionTitle>Details</StyledSectionTitle>
      </StyledTitleContainer>
      <StyledMoviesList>
        <StyledFavouriteListLink>
          <StyledImg
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
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
