import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export const StyledTitleContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 100px;
  border-bottom: 2px solid;
  border-image-slice: 1;
  display: flex;
  border-image-source: linear-gradient(to right, #ce1632, #222831);
`;
export const StyledSectionTitle = styled.h3`
  font-weight: 500;
  padding-bottom: 5px;
  color: ${({ theme }) => theme.cream};
`;

export const StyledMoviesList = styled.ul`
  width: 80%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 50px;
  align-items: center;
  justify-items: center;
  list-style: none;
  padding-top: 20px;
`;

export const StyledMovieImage = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImg = styled.img`
  width: 250px;
  height: 375px;
  border-radius: 5px;
`;

export const StyledDetails = styled.li`
  color: ${({ theme }) => theme.cream};
  margin-top: 10px;
  text-align: left;
  font-size: 15px;
  font-family: "Oswald", sans-serif;
  letter-spacing: 2px;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.cream};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${({ theme }) => theme.main};
    outline: none;
  }
`;

export const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 80px;
`;

export const StyledLinks = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  color: ${({ theme }) => theme.cream};
  margin: 20px;
  &:hover {
    color: ${({ theme }) => theme.main};
  }
`;

export const StyledMoviesListContainer = styled.div``;

export const StyledVoteParagraph = styled.p`
  display: flex;
  justify-content: content;
  align-items: content;
`;
export const StyledStarIcon = styled(FaStar)`
  margin-right: 10px;
  color: ${({ theme }) => theme.star};
`;
