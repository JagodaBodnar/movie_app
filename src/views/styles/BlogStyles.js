import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledArticlesList = styled.ul`
  list-style: none;
  width: 80%;
  margin: 50px auto;
`;
export const StyledMainImage = styled.img`
  width: 60%;
`;

export const StyledCategoryParagraph = styled.p`
  color: ${({ theme }) => theme.gray};
  font-style: italic;
  margin-right: 5px;
`;
export const StyledCategoryAndDateContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.white};
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
`;
export const StyledRecapParagraph = styled.p`
  color: ${({ theme }) => theme.gray};
  width: 60%;
  margin: 0 auto;
  margin-top: 20px;
`;
export const StyledReadMore = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  font-size: 14px;
  margin-left: 5px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`;
export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledListElement = styled.li`
  margin-bottom: 50px;
`;
