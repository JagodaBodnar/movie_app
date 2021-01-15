import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { device } from "../globalStyles/device";

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
export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.cream};
  font-size: 25px;
  font-weight: 300;
  text-transform: uppercase;
`;

export const StyledListEmpty = styled.p`
  margin-top: 30px;
  color: ${({ theme }) => theme.cream};
  font-weight: 300;
`;
export const StyledFavouriteListLink = styled(Link)`
  text-decoration: none;
  font-size: 65px;
  font-weight: 300;
  text-transform: uppercase;
  color: ${({ theme }) => theme.cream};
`;

export const StyledMoviesList = styled.ul`
  width: 80%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  align-items: center;
  justify-items: center;
  list-style: none;
`;

export const StyledImg = styled.img`
  width: 250px;
  height: auto;
`;

export const StyledDetails = styled.li`
  color: ${({ theme }) => theme.cream};
  margin-top: 20px;
  font-size: 14px;
  list-style: none;
  width: 100%;
  @media ${device.tablet} {
    font-size: 18px;
  }
`;
export const StyledButton = styled.button`
  width: 200px;
  padding: 5px;
  border-radius: 3px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.cream};
  color: ${({ theme }) => theme.cream};
  cursor: pointer;
  &:hover {
    border: 2px solid ${({ theme }) => theme.main};
    outline: none;
  }
`;
export const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.laptop} {
    text-align: left;
  }
`;

export const StyledLinks = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  color: ${({ theme }) => theme.cream};
  margin: 20px;
  &:hover {
    color: ${({ theme }) => theme.yellow};
  }
`;

export const StyledLabel = styled.p`
  color: ${({ theme }) => theme.main};
`;
export const StyledStarIcon = styled(FaStar)`
  margin-right: 10px;
  color: ${({ theme }) => theme.star};
`;

export const StyledFavouriteContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  align-items: center;
  justify-items: center;
  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
