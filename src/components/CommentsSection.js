import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  saveEditedComment,
  editComment,
  handleCommentChange,
  answerComment,
  addAnswer,
  cancelComment,
  editAnswer,
  cancelAnswer,
  handleAnswerChange,
  cancelAnswerChange,
  saveAnswerChange,
} from "../actions/index";
import {
  StyledCommentsContainer,
  StyledCommentsForm,
  StyledEntryInput,
  StyledEntryComment,
  StyledButton,
  StyledCommentsList,
  StyledCommentContainer,
  StyledCommentBox,
  StyledContainers,
  StyledCommentsButtons,
  StyledButtonsContainer,
  StyledCommentParagraph,
  StyledCommentAuthorContainer,
  StyledAuthorParagraph,
  StyledCommentDots,
  StyledEditInput,
  StyledEditForm,
  StyledAnswerForm,
  StyledAnswerContainer,
  StyledSaveAndCancelButtons,
  StyledAnswerDots,
} from "./styles/CommentsSectionStyles";
import { GoReply } from "react-icons/go";
import { MdModeEdit } from "react-icons/md";
import { addAndChangeComment } from "../firebase/firebaseUtils";

const CommentsSection = ({ articleId, comments }) => {
  const isMenuOpen = useSelector((state) => state.isMenuOpen);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const commentContent = e.target.comment.value;
    const nameValue = e.target.name.value;
    const newComment = {
      commentId: Math.floor(Math.random() * 100),
      comment: commentContent,
      name: nameValue,
      edit: false,
      answer: false,
      answerArray: [],
    };
    dispatch(addComment(newComment));

    const newCommentsArray = [...comments, newComment];

    addAndChangeComment(articleId, newCommentsArray);
    e.target.reset();
  };
  const handleAnswerFormSubmit = (commentId, e) => {
    e.preventDefault();
    const answerContent = e.target.answer.value;
    const nameValue = e.target.name.value;
    const newAnswer = {
      answerId: Math.floor(Math.random() * 100),
      answerContent: answerContent,
      name: nameValue,
      edit: false,
      answer: false,
      answerArray: [],
    };
    dispatch(addAnswer(newAnswer, commentId));

    const newCommentsArray = comments.map((comment) => {
      if (comment.commentId === commentId) {
      }
      return comment;
    });
    addAndChangeComment(articleId, newCommentsArray);

    e.target.reset();
  };

  const handleEditChange = (commentId, e) => {
    const newCommentContent = e.target.value;
    dispatch(handleCommentChange(newCommentContent, commentId));
  };

  const handleSaveFormSubmit = (commentId, e) => {
    e.preventDefault();
    const newCommentContent = e.target.editComment.value;
    dispatch(saveEditedComment(commentId, newCommentContent));

    const newCommentsArray = comments.map((comment) => {
      if (comment.commentId === commentId) {
        comment.comment = newCommentContent;
      }
      return comment;
    });
    addAndChangeComment(articleId, newCommentsArray);
  };

  const handleCancelComment = (commentId, comment) => {
    console.log(comment);
    dispatch(cancelComment(commentId, comment));
  };

  const handleEditAnswerChange = (answerId, e) => {
    const newAnswerConent = e.target.value;
    dispatch(handleAnswerChange(answerId, newAnswerConent));
  };
  const handleSaveAnswerEditSubmit = (answerId, e) => {
    e.preventDefault();

    const newAnswerContent = e.target.editAnswer.value;
    dispatch(saveAnswerChange(answerId, newAnswerContent));

    const newCommentsArray = comments.map((comment) => {
      comment.answerArray.map((answer) => {
        if (answer.answerId === answerId) {
          answer.answerContent = newAnswerContent;
        }
        return answer;
      });
      return comment;
    });
    addAndChangeComment(articleId, newCommentsArray);
  };

  return (
    <>
      <StyledCommentsContainer>
        <StyledCommentsForm
          id={articleId}
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}
        >
          <StyledEntryInput
            name="name"
            placeholder="Name / nickname..."
            required
          />
          <StyledEntryComment
            name="comment"
            placeholder="Write comment..."
            required
          />
          <StyledButton type="submit">Add comment</StyledButton>
        </StyledCommentsForm>
      </StyledCommentsContainer>

      <StyledContainers isMenuOpen={isMenuOpen}>
        {comments.map((singleComment) => {
          const { name, commentId, comment, edit, answer } = singleComment;
          return (
            <StyledCommentsList key={commentId}>
              {edit ? (
                <>
                  <StyledEditForm
                    onSubmit={(e) => handleSaveFormSubmit(commentId, e)}
                  >
                    <StyledEditInput
                      type="text"
                      name="editComment"
                      defaultValue={comment}
                      onChange={(e) => handleEditChange(commentId, e)}
                    />
                    <StyledSaveAndCancelButtons>
                      <StyledButton type="submit">Save</StyledButton>
                      <StyledButton
                        onClick={() => handleCancelComment(commentId, comment)}
                      >
                        Cancel
                      </StyledButton>
                    </StyledSaveAndCancelButtons>
                  </StyledEditForm>
                  {singleComment.answerArray.map((singleAnswer) => {
                    const {
                      name,
                      answerContent,
                      answerId,
                      edit,
                    } = singleAnswer;
                    return (
                      <StyledAnswerContainer key={answerId}>
                        <StyledCommentAuthorContainer>
                          <StyledCommentDots></StyledCommentDots>
                          <StyledAuthorParagraph>{name}</StyledAuthorParagraph>
                        </StyledCommentAuthorContainer>
                        <StyledCommentBox>
                          <StyledCommentParagraph>
                            {answerContent}
                          </StyledCommentParagraph>
                        </StyledCommentBox>
                      </StyledAnswerContainer>
                    );
                  })}
                </>
              ) : (
                <>
                  {answer ? (
                    <>
                      <StyledCommentContainer>
                        <StyledCommentAuthorContainer>
                          <StyledCommentDots></StyledCommentDots>
                          <StyledAuthorParagraph>{name}</StyledAuthorParagraph>
                        </StyledCommentAuthorContainer>
                        <StyledCommentBox>
                          <StyledCommentParagraph>
                            {comment}
                          </StyledCommentParagraph>
                          <StyledButtonsContainer>
                            <StyledCommentsButtons
                              onClick={() => dispatch(answerComment(commentId))}
                            >
                              <GoReply />
                            </StyledCommentsButtons>
                            <StyledCommentsButtons
                              onClick={() => dispatch(editComment(commentId))}
                            >
                              <MdModeEdit />
                            </StyledCommentsButtons>
                          </StyledButtonsContainer>
                        </StyledCommentBox>
                      </StyledCommentContainer>
                      <StyledAnswerForm
                        onSubmit={(e) =>
                          handleAnswerFormSubmit(commentId, e, commentId)
                        }
                      >
                        <StyledEntryInput
                          name="name"
                          placeholder="Name / nickname..."
                          required
                        />
                        <StyledEntryComment
                          name="answer"
                          placeholder="Write comment..."
                          required
                        />
                        <StyledSaveAndCancelButtons>
                          <StyledButton type="submit">Add answer</StyledButton>
                          <StyledButton
                            onClick={() => dispatch(cancelAnswer(commentId))}
                          >
                            Cancel
                          </StyledButton>
                        </StyledSaveAndCancelButtons>
                      </StyledAnswerForm>

                      {singleComment.answerArray.map((singleAnswer) => {
                        const {
                          name,
                          answerContent,
                          answerId,
                          edit,
                        } = singleAnswer;
                        return (
                          <StyledAnswerContainer key={answerId}>
                            <StyledCommentAuthorContainer>
                              <StyledCommentDots></StyledCommentDots>
                              <StyledAuthorParagraph>
                                {name}
                              </StyledAuthorParagraph>
                            </StyledCommentAuthorContainer>
                            <StyledCommentBox>
                              <StyledCommentParagraph>
                                {answerContent}
                              </StyledCommentParagraph>
                            </StyledCommentBox>
                          </StyledAnswerContainer>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <StyledCommentContainer key={commentId}>
                        <StyledCommentAuthorContainer>
                          <StyledCommentDots></StyledCommentDots>
                          <StyledAuthorParagraph>{name}</StyledAuthorParagraph>
                        </StyledCommentAuthorContainer>
                        <StyledCommentBox>
                          <StyledCommentParagraph>
                            {comment}
                          </StyledCommentParagraph>
                          <StyledButtonsContainer>
                            <StyledCommentsButtons
                              onClick={() => dispatch(answerComment(commentId))}
                            >
                              <GoReply />
                            </StyledCommentsButtons>
                            <StyledCommentsButtons
                              onClick={() => dispatch(editComment(commentId))}
                            >
                              <MdModeEdit />
                            </StyledCommentsButtons>
                          </StyledButtonsContainer>
                        </StyledCommentBox>
                      </StyledCommentContainer>
                      {singleComment.answerArray.map((singleAnswer) => {
                        const {
                          name,
                          answerContent,
                          answerId,
                          edit,
                        } = singleAnswer;
                        return (
                          <StyledAnswerContainer key={answerId}>
                            {edit ? (
                              <StyledAnswerForm
                                onSubmit={(e) =>
                                  handleSaveAnswerEditSubmit(answerId, e)
                                }
                              >
                                <StyledEditInput
                                  type="text"
                                  name="editAnswer"
                                  defaultValue={answerContent}
                                  onChange={(e) =>
                                    handleEditAnswerChange(answerId, e)
                                  }
                                />
                                <StyledSaveAndCancelButtons>
                                  <StyledButton type="submit">
                                    Save
                                  </StyledButton>
                                  <StyledButton
                                    onClick={() =>
                                      dispatch(
                                        cancelAnswerChange(
                                          answerId,
                                          answerContent
                                        )
                                      )
                                    }
                                  >
                                    Cancel
                                  </StyledButton>
                                </StyledSaveAndCancelButtons>
                              </StyledAnswerForm>
                            ) : (
                              <StyledAnswerContainer key={answerId}>
                                <StyledCommentAuthorContainer>
                                  <StyledAnswerDots></StyledAnswerDots>
                                  <StyledAuthorParagraph>
                                    {name}
                                  </StyledAuthorParagraph>
                                </StyledCommentAuthorContainer>
                                <StyledCommentBox>
                                  <StyledCommentParagraph>
                                    {answerContent}
                                  </StyledCommentParagraph>
                                  <StyledButtonsContainer>
                                    <StyledCommentsButtons
                                      onClick={() =>
                                        dispatch(editAnswer(answerId))
                                      }
                                    >
                                      <MdModeEdit />
                                    </StyledCommentsButtons>
                                  </StyledButtonsContainer>
                                </StyledCommentBox>
                              </StyledAnswerContainer>
                            )}
                          </StyledAnswerContainer>
                        );
                      })}
                    </>
                  )}
                </>
              )}
            </StyledCommentsList>
          );
        })}
      </StyledContainers>
    </>
  );
};

export default CommentsSection;
