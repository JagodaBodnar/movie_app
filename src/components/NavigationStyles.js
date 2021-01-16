import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GiFilmSpool } from "react-icons/gi";

export const StyledNavigationContainer = styled.div`
  width: 90%;
  position: fixed;
  top: 0;
  left: 5%;
  display: flex;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;
  justify-content: center;
  align-items: center;
  min-height: 15vh;
  background-color: ${({ theme }) => theme.darkGray};
`;
export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.cream};
  font-weight: 300;
  text-transform: uppercase;
  text-align: left;
  margin-left: 2%;
  width: 30%;
  font-family: "Dancing Script", cursive;
`;
export const StyledIcon = styled(GiFilmSpool)`
  color: ${({ theme }) => theme.main};
  font-size: 75px;
`;
export const StyledLinkContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
`;

export const StyledLinks = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: ${({ theme }) => theme.cream};
  margin: 20px;
  width: 100%;
  &:hover {
    color: ${({ theme }) => theme.main};
  }
`;
export const StyledLinksCategories = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.cream};
  width: 100%;
  &:hover {
    color: ${({ theme }) => theme.hover};
  }
  margin-top: 15px;
  font-size: 15px;
  letter-spacing: 2px;
`;
export const StyledDropdownList = styled.div`
  display: none;
  position: absolute;
  width: 100%;
`;
export const StyledMoviesList = styled.ul`
  font-size: 20px;
  width: 100%;
  margin: 20px;
  color: ${({ theme }) => theme.cream};
  list-style: none;
  cursor: pointer;
  position: relative;
  &:hover {
    color: ${({ theme }) => theme.main};
  }
  &:hover > ${StyledDropdownList} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
