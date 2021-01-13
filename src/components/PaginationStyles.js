import styled from "styled-components";

export const StyledPaginationContainer = styled.ul`
  width: 80%;
  margin: 0 auto;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 5px;
`;

export const StyledPageNumber = styled.li`
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  margin-right: 10px;
  color: ${({ theme }) => theme.cream};
  &:hover {
    color: ${({ theme }) => theme.main};
  }
`;
