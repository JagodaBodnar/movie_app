import styled from "styled-components";

export const StyledSelectContainer = styled.div``;
export const StyledSelectButton = styled.select`
  background-color: ${({ theme }) => theme.darkGray};
  border: none;
  color: ${({ theme }) => theme.cream};
  cursor: pointer;
  text-align: center;
  outline: none;
`;
export const StyledOptionButton = styled.option`
  border: 1px solid #222831;
  cursor: pointer;
`;
