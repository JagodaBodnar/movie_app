import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { device } from "../../globalStyles/device";

export const StyledTitleContainer = styled.div`
  width: 80%;
  margin: 30px auto;
  margin-top: 100px;
  border-bottom: 2px solid;
  border-image-slice: 1;
  display: flex;
  border-image-source: linear-gradient(to right, #ce1632, #222831);
`;
export const StyledStarIcon = styled(FaStar)`
  margin-right: 10px;
  color: ${({ theme }) => theme.star};
`;
export const StyledSectionTitle = styled.h3`
  font-weight: 500;
  padding-bottom: 5px;
  color: ${({ theme }) => theme.cream};
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.cream};
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledDetailsParagraph = styled.p`
  margin-right: 5px;
  font-size: 18px;
`;
export const StyledDetailsLabel = styled.p`
  margin-right: 5px;
  color: ${({ theme }) => theme.main};
`;
export const StyledFavouriteListLink = styled.div`
  text-decoration: none;
  font-size: 65px;
  font-weight: 300;
  text-transform: uppercase;
  color: ${({ theme }) => theme.cream};
`;
export const StyledMoviesList = styled.ul`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  align-items: center;
  justify-items: center;
  list-style: none;
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const StyledImg = styled.img`
  width: 250px;
  height: auto;
  @media ${device.desktop} {
    width: 350px;
    height: auto;
  }
`;

export const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledLabel = styled.p`
  color: ${({ theme }) => theme.main};
`;
export const StyledDetails = styled.li`
  color: ${({ theme }) => theme.cream};
  margin-top: 20px;
  font-size: 14px;
  list-style: none;
  width: 100%;
  text-align: center;
  @media ${device.tablet} {
    text-align: left;
  }
  @media ${device.desktop} {
    font-size: 18px;
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

export const StyledMovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
