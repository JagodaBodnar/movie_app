import React from "react";
import { routes } from "../routes";
import { changeMoviesPerPage, setCurrentPage, setPath } from "../actions";
import {
  StyledTitle,
  StyledNavigationContainer,
  StyledLinks,
  StyledLinkContainer,
  StyledMoviesList,
  StyledDropdownList,
  StyledLinksCategories,
  StyledIcon,
} from "./styles/NavigationStyles";
import { useDispatch, useSelector } from "react-redux";
import { mainGlobalStyles } from "../globalStyles/mainGlobalStyles";

const DesktopNavigation = () => {
  const path = useSelector((state) => state.path);
  const moviesEight = useSelector((state) => state.moviesEight);
  const dispatch = useDispatch();

  const active = {
    color: mainGlobalStyles.main,
  };
  const inactive = {
    color: mainGlobalStyles.cream,
  };
  return (
    <StyledNavigationContainer>
      <StyledTitle>
        <StyledIcon />
        Movie App
      </StyledTitle>
      <StyledLinkContainer>
        <StyledLinks
          to={routes.home}
          activeStyle={active}
          onClick={() => dispatch(setPath(false))}
          exact
        >
          Home
        </StyledLinks>
        <StyledMoviesList onClick={() => dispatch(setPath(true))}>
          <div style={path ? active : inactive}>Movies</div>
          <StyledDropdownList>
            <StyledLinksCategories
              to={routes.topRatedMovies}
              activeStyle={active}
              onClick={() => {
                dispatch(setCurrentPage());
                dispatch(changeMoviesPerPage(moviesEight));
              }}
            >
              Top rated
            </StyledLinksCategories>
            <StyledLinksCategories
              to={routes.popularMovies}
              activeStyle={active}
              onClick={() => {
                dispatch(setCurrentPage());
                dispatch(changeMoviesPerPage(moviesEight));
              }}
            >
              Popular
            </StyledLinksCategories>
          </StyledDropdownList>
        </StyledMoviesList>
        <StyledLinks
          to={routes.blog}
          activeStyle={active}
          onClick={() => dispatch(setPath(false))}
        >
          Blog
        </StyledLinks>
        <StyledLinks
          to={routes.favouriteMovies}
          activeStyle={active}
          onClick={() => dispatch(setPath(false))}
        >
          Favourites
        </StyledLinks>
      </StyledLinkContainer>
    </StyledNavigationContainer>
  );
};

export default DesktopNavigation;
