import styled from "styled-components";
import { device } from "../../globalStyles/device";

export const StyledCommentsContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  @media ${device.mobile} {
    width: 80%;
  }
`;
export const StyledCommentsForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  @media ${device.laptop} {
    width: 60%;
  }
`;
export const StyledEditForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px auto;
`;
export const StyledEditInput = styled.input`
  outline: none;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-radius: 5px;
  padding: 10px 20px;
  width: 50%;
  color: #000;
  width: 100%;
  background-color: #ddd;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  min-height: 50px;
`;

export const StyledEntryInput = styled.input`
  background-color: transparent;
  outline: none;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border: 1px solid #c91632;
  border-radius: 5px;
  padding: 10px 20px;
  width: 50%;
  color: #fff;
  ::placeholder {
    color: #fff;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
export const StyledEntryComment = styled.textarea`
  background-color: transparent;
  border: 1px solid #c91632;
  border-radius: 5px;
  outline: none;
  margin-bottom: 20px;
  padding: 20px;
  color: #fff;
  resize: vertical;
  font-family: "Lato", sans-serif;
  ::placeholder {
    color: #fff;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
export const StyledButton = styled.button`
  width: 30%;
  background-color: #c91632;
  border: none;
  outline: none;
  padding: 5px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
`;

export const StyledCommentsList = styled.li`
  list-style: none;
  width: 100%;
  margin: 0 auto;
  @media ${device.laptop} {
    width: 80%;
  }
`;

export const StyledCommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 50px auto;
`;
export const StyledCommentAuthor = styled.p`
  color: #c91632;
`;
export const StyledCommentBox = styled.div`
  width: 100%;
  background-color: #ddd;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  min-height: 50px;
`;
export const StyledCommentParagraph = styled.p`
  padding: 10px;
`;
export const StyledContainers = styled.div`
  width: 80%;
  margin: 0 auto;
  z-index: ${({ isMenuOpen }) => (isMenuOpen ? "-1" : "0")};
`;

export const StyledCommentsButtons = styled.button`
  color: #888;
  border: none;
  outline: none;
  width: 20%;
  cursor: pointer;
  background-color: transparent;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 25px;
  &:hover {
    color: #c91632;
  }
`;
export const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCommentAuthorContainer = styled.div`
  width: 100%;
  padding: 10px;
  position: relative;
`;

export const StyledAuthorParagraph = styled.p`
  font-size: 20px;
  color: #c91632;
`;
export const StyledCommentDots = styled.div`
  position: absolute;
  border-top: 1px dotted #fff;
  border-left: 1px dotted #fff;
  border-bottom: 1px dotted #fff;
  left: -10px;
  top: 25px;
  width: 10px;
  height: 50px;
`;
export const StyledAnswerForm = styled(StyledEditForm)`
  width: 100%;
  @media ${device.laptop} {
    width: 60%;
  }
`;

export const StyledAnswerContainer = styled.div`
  width: 100%;
  margin-left: 15px;
  @media ${device.tablet} {
    width: 80%;
    margin-left: 50px;
  }
`;

export const StyledSaveAndCancelButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledAnswerDots = styled.div`
  position: absolute;
  border-left: 1px dotted #fff;
  border-bottom: 1px dotted #fff;
  left: -10px;
  top: -25px;
  width: 10px;
  height: 100px;
`;
