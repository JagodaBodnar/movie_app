import React from "react";
import { ThemeProvider } from "styled-components";
import { mainGlobalStyles } from "../globalStyles/mainGlobalStyles";
import GlobalStyle from "../globalStyles/GlobalStyle";
import Navigation from "../components/Navigation";
import Footer from "../views/Footer";
import styled from "styled-components";

const StyledChildrenContainer = styled.div`
  min-height: 69vh;
`;

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainGlobalStyles}>
        <Navigation />
        <StyledChildrenContainer>{children}</StyledChildrenContainer>
        <Footer />
      </ThemeProvider>
    </>
  );
};
export default MainTemplate;
