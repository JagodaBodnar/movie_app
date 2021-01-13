import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: #222831;
    font-family: 'Lato', sans-serif;
}

`;

export default GlobalStyle;
