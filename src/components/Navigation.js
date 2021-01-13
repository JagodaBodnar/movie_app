import React from "react";
import { routes } from "../routes";

import {
  StyledTitle,
  StyledNavigationContainer,
  StyledLinks,
  StyledLinkContainer,
  StyledMoviesList,
  StyledDropdownList,
  StyledLinksCategories,
  StyledIcon,
} from "./NavigationStyles";

const Home = () => {
  return (
    <>
      <StyledNavigationContainer>
        <StyledTitle>
          <StyledIcon />
          Movie App
        </StyledTitle>
        <StyledLinkContainer>
          <StyledLinks to={routes.home}>Home</StyledLinks>
          <StyledMoviesList>
            Movies
            <StyledDropdownList>
              <StyledLinksCategories to={routes.topRatedMovies}>
                Top rated
              </StyledLinksCategories>
              <StyledLinksCategories to={routes.popularMovies}>
                Popular
              </StyledLinksCategories>
            </StyledDropdownList>
          </StyledMoviesList>

          <StyledLinks to={routes.TVShows}>TV Shows</StyledLinks>
          <StyledLinks to={routes.favouriteMovies}>Favourites</StyledLinks>
        </StyledLinkContainer>
      </StyledNavigationContainer>
    </>
  );
};

export default Home;
