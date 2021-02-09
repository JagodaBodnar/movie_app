import React from "react";
import moment from "moment";
import {
  StyledCategoryParagraph,
  StyledCategoryAndDateContainer,
} from "../views/styles/BlogStyles";
import {
  StyledSingleArticleContainer,
  StyledTitleContainer,
  StyledImage,
  StyledContent,
  StyledPlayer,
} from "./styles/SingleArticleStyles";
import CommentsSection from "./CommentsSection";
import { useSelector } from "react-redux";

const SingleArticle = () => {
  const selectedArticle = useSelector((state) => state.selectedArticle);
  const {
    id,
    category,
    date,
    title,
    shortTitle,
    mainImage,
    content,
    secondaryImage,
    contentSec,
    trailer,
    author,
    comments,
  } = selectedArticle;
  const dateFormat = moment(date).format("LL");
  return (
    <StyledSingleArticleContainer key={id}>
      <StyledCategoryAndDateContainer>
        <StyledCategoryParagraph>{category}</StyledCategoryParagraph>
        <StyledCategoryParagraph>/</StyledCategoryParagraph>
        <StyledCategoryParagraph>{dateFormat}</StyledCategoryParagraph>
      </StyledCategoryAndDateContainer>
      <StyledTitleContainer>{title}</StyledTitleContainer>
      <StyledImage src={mainImage} alt={shortTitle} />
      <StyledContent>{content}</StyledContent>
      <StyledImage src={secondaryImage} alt={shortTitle} />
      <StyledContent>{contentSec}</StyledContent>
      <StyledPlayer url={trailer} width="60%" />
      <StyledCategoryAndDateContainer>
        <StyledCategoryParagraph>{author}</StyledCategoryParagraph>
      </StyledCategoryAndDateContainer>
      <CommentsSection articleId={id} comments={comments} />
    </StyledSingleArticleContainer>
  );
};

export default SingleArticle;
