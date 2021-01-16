import styled from "styled-components";
import { Link } from "react-router-dom";
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
  justify-content: space-between;
  align-items: center;
  min-height: 15vh;
  background-color: ${({ theme }) => theme.darkGray};
`;

export const StyledNavigationContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledNavigationList = styled.ul`
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
`;
export const StyledNavigationLinks = styled(Link)`
  padding: 8px;
  text-decoration: none;
  font-size: 20px;
  color: ${({ theme }) => theme.white};
  display: block;
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.main};
  }
`;

export const StyledNavigationOverlay = styled.div`
  height: 100%;
  width: ${({ isMenuOpen }) => (isMenuOpen ? "100%" : "0%")};
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: rgba(34, 40, 49, 1);
  overflow-x: hidden;
  transition: 0.5s;
`;
export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.cream};
  font-weight: 300;
  text-transform: uppercase;
  text-align: left;
  margin-left: 2%;
  width: 50%;
  font-family: "Dancing Script", cursive;
  font-size: 20px;
`;
export const StyledIcon = styled(GiFilmSpool)`
  color: ${({ theme }) => theme.main};
  font-size: 35px;
`;

export const StyledSpan = styled.span`
  display: block;
  width: 30px;
  height: 2px;
  margin-bottom: 5px;
  position: relative;
  background: ${({ isMenuOpen, theme }) =>
    isMenuOpen ? theme.main : theme.white};
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    opacity 0.55s ease;
`;
export const StyledHamburger = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  z-index: 1;
  margin: 5px 20px 0 0;
  cursor: pointer;
  z-index: 1000;
  ${StyledSpan}:first-child {
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "rotate(45deg) translate(-1px, 0px)" : ""};
  }
  ${StyledSpan}:last-child {
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "rotate(-45deg) translate(-2px, -1px)" : ""};
  }
  ${StyledSpan}:nth-child(2) {
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "1")};
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "transform: rotate(0deg) scale(0.2, 0.2)" : ""};
  }
`;
