import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { StyledTitleContainer, StyledSectionTitle } from "./styles/ViewsStyles";
import {
  StyledArticlesList,
  StyledMainImage,
  StyledCategoryAndDateContainer,
  StyledCategoryParagraph,
  StyledImageContainer,
  StyledRecapParagraph,
  StyledListElement,
  StyledReadMore,
  StyledTitle,
} from "./styles/BlogStyles";
import { selectArticle } from "../actions";

const Blog = () => {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  return (
    <>
      <StyledTitleContainer>
        <StyledSectionTitle>Articles...</StyledSectionTitle>
      </StyledTitleContainer>
      <StyledArticlesList>
        {articles.map((article) => {
          const {
            category,
            date,
            title,
            mainImage,
            recap,
            id,
            shortTitle,
          } = article;
          const dateFormat = moment(date).format("LL");
          return (
            <StyledListElement key={id}>
              <StyledCategoryAndDateContainer>
                <StyledCategoryParagraph>{category}</StyledCategoryParagraph>
                <StyledCategoryParagraph>/</StyledCategoryParagraph>
                <StyledCategoryParagraph>{dateFormat}</StyledCategoryParagraph>
              </StyledCategoryAndDateContainer>
              <StyledTitle>{title}</StyledTitle>
              <StyledImageContainer>
                <StyledMainImage src={mainImage} alt={title} />
              </StyledImageContainer>
              <StyledRecapParagraph>
                {recap}
                <StyledReadMore
                  onClick={() => dispatch(selectArticle(id))}
                  to={{
                    pathname: `/blog/${shortTitle}`,
                    // state: {
                    //   title,
                    //   category,
                    //   date,
                    //   mainImage,
                    //   secondaryImage,
                    //   content,
                    //   contentSec,
                    //   author,
                    //   id,
                    //   trailer,
                    //   articles,
                    // },
                  }}
                >
                  Read more...
                </StyledReadMore>
              </StyledRecapParagraph>
            </StyledListElement>
          );
        })}
      </StyledArticlesList>
    </>
  );
};

export default Blog;
