import React from "react";
import { routes } from "../routes";
import { setCurrentPage, setPath } from "../actions";
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
import { useDispatch, useSelector } from "react-redux";

const DesktopNavigation = () => {
  const path = useSelector((state) => state.path);
  const dispatch = useDispatch();

  const active = {
    color: "#CE1632",
  };
  const inactive = {
    color: "#eeeeee",
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
          exact={true}
        >
          Home
        </StyledLinks>
        <StyledMoviesList onClick={() => dispatch(setPath(true))}>
          <div style={path ? active : inactive}>Movies</div>
          <StyledDropdownList>
            <StyledLinksCategories
              to={routes.topRatedMovies}
              activeStyle={active}
              onClick={() => dispatch(setCurrentPage())}
            >
              Top rated
            </StyledLinksCategories>
            <StyledLinksCategories
              to={routes.popularMovies}
              activeStyle={active}
              onClick={() => dispatch(setCurrentPage())}
            >
              Popular
            </StyledLinksCategories>
          </StyledDropdownList>
        </StyledMoviesList>
        {/* <StyledLinks to={routes.TVShows} activeStyle={{ color: "#CE1632" }}>
            TV Shows
          </StyledLinks> */}
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
