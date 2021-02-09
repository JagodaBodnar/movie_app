import styled from "styled-components";
import ReactPlayer from "react-player";

export const StyledSingleArticleContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledTitleContainer = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.white};
  font-weight: 400;
`;
export const StyledImage = styled.img`
  width: 60%;
  margin-top: 30px;
`;
export const StyledContent = styled.p`
  width: 60%;
  margin: 50px auto;
  color: ${({ theme }) => theme.white};
  text-align: justify;
`;

export const StyledPlayer = styled(ReactPlayer)`
  width: 100%;
  margin-bottom: 50px;
`;
