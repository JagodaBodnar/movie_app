import styled from "styled-components";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { device } from "../globalStyles/device";

export const StyledPaginationContainer = styled.ul`
  width: 50%;
  margin: 0 auto;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 5px;
  @media ${device.desktop} {
    width: 80%;
  }
  @media ${device.mobileS} {
    width: 30%;
  }
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

export const StyledPrevButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;
export const StyledNextButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
`;

export const StyledNextIcon = styled(MdNavigateNext)`
  color: ${({ theme }) => theme.cream};
  &:hover {
    color: ${({ theme }) => theme.main};
  }
`;

export const StyledPrevIcon = styled(MdNavigateBefore)`
  color: ${({ theme }) => theme.cream};
  &:hover {
    color: ${({ theme }) => theme.main};
  }
`;
