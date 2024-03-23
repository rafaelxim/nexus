import { createGlobalStyle, css } from "styled-components";

import { device } from "./mediaQueries";

const GlobalStyles = createGlobalStyle`
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      font-family: "Roboto", sans-serif;

      @media ${device.fourK} {
        font-size: 125%;
      }
    }
    body {
      background-color: ${theme.colors.background.default};
      color: ${theme.colors.text.primary};
    }
  `}
`;

export default GlobalStyles;
