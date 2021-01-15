import React from "react";
import styled from "styled-components";
import tmdb from "../assets/tmdb.svg";

const StyledFooterAttribution = styled.div`
  width: 100%;
  bottom: 0;
  height: 50px;
  margin-top: 50px;
`;
const StyledFooterContent = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #ce1632, #222831);
`;
const StyledImg = styled.img`
  height: 50px;
  margin: 20px 0;
`;
const StyledInformation = styled.p`
  color: #01b4e4;
  margin-left: 5px;
`;

const Footer = () => {
  return (
    <StyledFooterAttribution>
      <StyledFooterContent>
        <StyledImg src={tmdb} />
        <StyledInformation> is source of data</StyledInformation>
      </StyledFooterContent>
    </StyledFooterAttribution>
  );
};

export default Footer;
