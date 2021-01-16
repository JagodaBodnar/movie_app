import React from "react";
import { routes } from "../routes/index";
import {
  StyledNavigationContent,
  StyledHamburger,
  StyledNavigationList,
  StyledNavigationOverlay,
  StyledSpan,
  StyledNavigationLinks,
  StyledNavigationContainer,
  StyledIcon,
  StyledTitle,
} from "./MobileNavigationStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../actions";

const MobileNavigation = () => {
  const isMenuOpen = useSelector((state) => state.isMenuOpen);
  const dispatch = useDispatch();

  return (
    <StyledNavigationContainer>
      <StyledTitle>
        <StyledIcon />
        Movie App
      </StyledTitle>
      <StyledNavigationContent>
        <StyledHamburger
          onClick={() => dispatch(toggleMenu())}
          isMenuOpen={isMenuOpen}
        >
          <StyledSpan isMenuOpen={isMenuOpen}></StyledSpan>
          <StyledSpan isMenuOpen={isMenuOpen}></StyledSpan>
          <StyledSpan isMenuOpen={isMenuOpen}></StyledSpan>
        </StyledHamburger>
        <StyledNavigationOverlay isMenuOpen={isMenuOpen}>
          <StyledNavigationList>
            <StyledNavigationLinks
              to={routes.home}
              onClick={() => {
                dispatch(toggleMenu());
              }}
            >
              Home
            </StyledNavigationLinks>

            <StyledNavigationLinks
              to={routes.topRatedMovies}
              onClick={() => {
                dispatch(toggleMenu());
              }}
            >
              Top rated movies
            </StyledNavigationLinks>
            <StyledNavigationLinks
              to={routes.popularMovies}
              onClick={() => {
                dispatch(toggleMenu());
              }}
            >
              Popular movies
            </StyledNavigationLinks>

            <StyledNavigationLinks
              to={routes.favouriteMovies}
              onClick={() => {
                dispatch(toggleMenu());
              }}
            >
              Favourites
            </StyledNavigationLinks>
          </StyledNavigationList>
        </StyledNavigationOverlay>
      </StyledNavigationContent>
    </StyledNavigationContainer>
  );
};

export default MobileNavigation;
