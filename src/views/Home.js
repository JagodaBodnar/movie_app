import React from "react";
import { connect } from "react-redux";
import { addNowPlayingToFavourite } from "../actions";
import { FaHeart } from "react-icons/fa";
import {
  StyledMovieImage,
  StyledImg,
  StyledMoviesList,
  StyledDetails,
  StyledButton,
  StyledDetailsContainer,
  StyledTitleContainer,
  StyledSectionTitle,
  StyledVoteParagraph,
  StyledMoviesListContainer,
  StyledStarIcon,
} from "./ViewsStyles";

const Home = ({ nowPlaying, addNowPlayingToFavourite }) => {
  nowPlaying.sort((item, item2) => {
    return item2.vote_average - item.vote_average;
  });
  const limited = nowPlaying.slice(0, 4);

  return (
    <>
      <StyledTitleContainer>
        <StyledSectionTitle>Now playing</StyledSectionTitle>
      </StyledTitleContainer>
      <StyledMoviesList>
        {limited.map((item) => {
          const {
            title,
            release_date,
            vote_average,
            poster_path,
            id,
            overview,
          } = item;
          return (
            <StyledMoviesListContainer key={id}>
              <StyledMovieImage
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
              </StyledMovieImage>
              <StyledDetailsContainer>
                <StyledDetails>{title}</StyledDetails>
                <StyledDetails>
                  <StyledVoteParagraph>
                    <StyledStarIcon />
                    {vote_average}
                  </StyledVoteParagraph>
                  <StyledButton onClick={() => addNowPlayingToFavourite(title)}>
                    <FaHeart />
                  </StyledButton>
                </StyledDetails>
              </StyledDetailsContainer>
            </StyledMoviesListContainer>
          );
        })}
      </StyledMoviesList>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    nowPlaying: state.nowPlaying,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNowPlayingToFavourite: (movie) =>
      dispatch(addNowPlayingToFavourite(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
