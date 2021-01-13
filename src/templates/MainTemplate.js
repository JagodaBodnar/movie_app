import React from "react";
import { ThemeProvider } from "styled-components";
import { mainGlobalStyles } from "../globalStyles/mainGlobalStyles";
import GlobalStyle from "../globalStyles/GlobalStyle";
import Navigation from "../components/Navigation";

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainGlobalStyles}>
        <Navigation />
        {children}
      </ThemeProvider>
    </>
  );
};
export default MainTemplate;
